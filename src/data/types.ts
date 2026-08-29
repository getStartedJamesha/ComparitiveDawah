export type ReligionId = "islam" | "christianity" | "judaism" | "hinduism";

export interface Religion {
  id: ReligionId;
  name: string;
  scripture: string;
  accent: string;
  description: string;
}

export type ConceptId =
  | "oneness"
  | "creation"
  | "no-partners"
  | "mercy"
  | "prophets"
  | "afterlife"
  | "omniscience";

export interface Concept {
  id: ConceptId;
  title: string;
  question: string;
  summary: string;
}

export interface Verse {
  religionId: ReligionId;
  conceptId: ConceptId;
  reference: string;
  text: string;
  translation: string;
  sourceUrl: string;
  note?: string;
}
