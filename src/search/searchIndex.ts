import { concepts } from "../data/concepts";
import { religions, religionById } from "../data/religions";
import { verses } from "../data/verses";
import { contradictions } from "../data/contradictions";
import { scienceTopics } from "../data/science";
import { prophecies } from "../data/prophecies";

export type SearchResultType =
  | "Concept"
  | "Tradition"
  | "Verse"
  | "Contradiction"
  | "Science"
  | "Prophecy";

export interface SearchItem {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  url: string;
  accent?: string;
  /** Precomputed lowercase blob of every searchable field, for fast matching. */
  searchText: string;
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const concept of concepts) {
    items.push({
      id: `concept-${concept.id}`,
      type: "Concept",
      title: concept.title,
      subtitle: concept.question,
      url: `/concepts/${concept.id}`,
      searchText: [concept.title, concept.question, concept.summary]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const religion of religions) {
    items.push({
      id: `religion-${religion.id}`,
      type: "Tradition",
      title: religion.name,
      subtitle: religion.scripture,
      url: `/religions/${religion.id}`,
      accent: religion.accent,
      searchText: [religion.name, religion.scripture, religion.description]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const verse of verses) {
    const religion = religionById(verse.religionId);
    const concept = concepts.find((c) => c.id === verse.conceptId);
    items.push({
      id: `verse-${verse.religionId}-${verse.conceptId}`,
      type: "Verse",
      title: verse.reference,
      subtitle: `${religion?.name ?? verse.religionId} — ${truncate(verse.text, 90)}`,
      url: `/concepts/${verse.conceptId}#${verse.religionId}-${verse.conceptId}`,
      accent: religion?.accent,
      searchText: [
        verse.reference,
        verse.text,
        verse.translation,
        verse.note ?? "",
        religion?.name ?? "",
        concept?.title ?? "",
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const item of contradictions) {
    const religion = religionById(item.religionId);
    items.push({
      id: `contradiction-${item.id}`,
      type: "Contradiction",
      title: item.title,
      subtitle: truncate(item.description, 110),
      url: `/contradictions#${item.id}`,
      accent: religion?.accent,
      searchText: [
        item.title,
        item.description,
        item.note ?? "",
        item.group,
        religion?.name ?? "",
        ...item.passages.flatMap((p) => [p.reference, p.text]),
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const topic of scienceTopics) {
    items.push({
      id: `science-${topic.id}`,
      type: "Science",
      title: topic.title,
      subtitle: truncate(topic.claim, 110),
      url: `/science#${topic.id}`,
      searchText: [
        topic.title,
        topic.field,
        topic.claim,
        topic.context,
        ...topic.passages.flatMap((p) => [p.reference, p.text]),
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const item of prophecies) {
    const religion = religionById(item.religionId);
    items.push({
      id: `prophecy-${item.id}`,
      type: "Prophecy",
      title: item.title,
      subtitle: truncate(item.claim, 110),
      url: `/prophecies#${item.id}`,
      accent: religion?.accent,
      searchText: [
        item.title,
        item.claim,
        item.context,
        religion?.name ?? "",
        item.passage ? `${item.passage.reference} ${item.passage.text}` : "",
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  return items;
}

export const searchIndex: SearchItem[] = buildIndex();

interface ScoredItem {
  item: SearchItem;
  score: number;
}

export function search(query: string, limit = 60): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  const scored: ScoredItem[] = [];

  for (const item of searchIndex) {
    const title = item.title.toLowerCase();
    const allTokensPresent = tokens.every((t) => item.searchText.includes(t));
    if (!allTokensPresent) continue;

    let score = 1;
    if (title === q) score += 100;
    else if (title.includes(q)) score += 50;
    if (item.subtitle.toLowerCase().includes(q)) score += 10;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
