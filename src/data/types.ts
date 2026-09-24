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
  /** Lightweight thematic subheading shown when it differs from the previous entry in the same religion's list. */
  group: string;
  title: string;
  description: string;
  passages: Passage[];
  note?: string;
}

export type ScienceCategoryId =
  | "embryology"
  | "astronomy"
  | "earth-sciences"
  | "oceans-water"
  | "biology"
  | "metallurgy"
  | "other";

export interface ScienceTopic {
  id: string;
  title: string;
  field: string;
  category: ScienceCategoryId;
  /** One or more verses cited for this claim — several of these are cited across multiple, sometimes non-adjacent, passages. */
  passages: Passage[];
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

/**
 * lifetime = said to have been fulfilled while Muhammad ﷺ was alive;
 * after-death = fulfilled in the decades/centuries after his death;
 * long-range = broad, open-ended claims (e.g. Islam's geographic spread);
 * unfulfilled = events mainstream Islamic eschatology still awaits.
 */
export type MuhammadProphecyCategory =
  | "lifetime"
  | "after-death"
  | "long-range"
  | "unfulfilled";

export interface HadithSource {
  reference: string;
  text: string;
  /** Omitted for Qur'anic citations, which aren't hadith-graded. */
  grade?: string;
  sourceUrl: string;
}

export interface MuhammadProphecy {
  id: string;
  category: MuhammadProphecyCategory;
  title: string;
  source: HadithSource;
  claim: string;
  context: string;
}
