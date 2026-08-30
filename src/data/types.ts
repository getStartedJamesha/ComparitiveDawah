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

/** Religions with a dedicated "internal tensions" section — Islam is deliberately excluded. */
export type ContradictionReligionId = "christianity" | "judaism" | "hinduism";

export interface Passage {
  reference: string;
  text: string;
  translation: string;
  sourceUrl: string;
}

export interface Contradiction {
  id: string;
  religionId: ContradictionReligionId;
  title: string;
  description: string;
  passages: Passage[];
  note?: string;
}

export interface ScienceTopic {
  id: string;
  title: string;
  field: string;
  passage: Passage;
  claim: string;
  context: string;
}

/** Scriptures with a claimed prophecy of Muhammad — presented alongside each tradition's own mainstream reading. */
export type ProphecyReligionId = "judaism" | "christianity" | "hinduism";

export interface Prophecy {
  id: string;
  religionId: ProphecyReligionId;
  title: string;
  /** Omitted when the underlying text's authenticity/dating is itself the disputed point — see hinduism-bhavishya-purana. */
  passage?: Passage;
  claim: string;
  context: string;
}
