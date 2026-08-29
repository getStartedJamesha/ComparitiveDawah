import type { Religion } from "./types";

export const religions: Religion[] = [
  {
    id: "islam",
    name: "Islam",
    scripture: "The Qur'an",
    accent: "#0f766e",
    description:
      "Islam teaches that God (Allah) is absolutely One, without partner, offspring, or equal, and calls all of humanity back to the pure monotheism (Tawhid) taught by every prophet from Adam to Muhammad ﷺ.",
  },
  {
    id: "christianity",
    name: "Christianity",
    scripture: "The Bible (Old & New Testament)",
    accent: "#2563eb",
    description:
      "Christianity affirms the God of Abraham as Creator and Lord, professed historically through the doctrine of the Trinity, alongside a strong scriptural inheritance of Hebrew monotheism.",
  },
  {
    id: "judaism",
    name: "Judaism",
    scripture: "The Tanakh (Hebrew Bible)",
    accent: "#7c3aed",
    description:
      "Judaism is built on strict, uncompromising monotheism, centered on the Shema declaration that the LORD is One, and the command to worship no other god.",
  },
  {
    id: "hinduism",
    name: "Hinduism",
    scripture: "The Vedas, Upanishads & Bhagavad Gita",
    accent: "#ea580c",
    description:
      "Hinduism is theologically diverse, but its foundational texts contain a strong current of ultimate, formless Oneness (Brahman) — 'Truth is one; the wise call it by many names.'",
  },
];

export const religionById = (id: string) =>
  religions.find((r) => r.id === id);
