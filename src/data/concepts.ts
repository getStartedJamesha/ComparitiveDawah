import type { Concept } from "./types";

export const concepts: Concept[] = [
  {
    id: "oneness",
    title: "The Oneness of God",
    question: "Is God one, indivisible, and without equal?",
    summary:
      "The starting point of Dawah: every major scripture tradition preserves a call to the singular, ultimate reality behind creation — though they differ sharply on whether that One admits any internal distinction (e.g. the Trinity).",
  },
  {
    id: "creation",
    title: "God as Creator",
    question: "Who brought the heavens and the earth into being?",
    summary:
      "All four traditions teach that a single supreme source originated the universe, rather than it existing eternally on its own or being the product of many competing gods.",
  },
  {
    id: "no-partners",
    title: "No Partners or Idols",
    question: "May anything be worshipped alongside or instead of God?",
    summary:
      "Each scripture, in its own language, condemns directing worship to other than the One God — idols, images, or created beings.",
  },
  {
    id: "mercy",
    title: "The Mercy of God",
    question: "Is God merciful and forgiving toward those who turn to Him?",
    summary:
      "Divine mercy and willingness to forgive repentant sinners is a recurring theme across scriptures, though the mechanisms of forgiveness differ.",
  },
  {
    id: "prophets",
    title: "Prophets & Messengers",
    question: "Does God guide humanity through chosen messengers?",
    summary:
      "Each tradition describes God raising up chosen individuals to deliver His message and call people back to righteousness.",
  },
  {
    id: "afterlife",
    title: "Life After Death",
    question: "What happens to the soul after death?",
    summary:
      "Every tradition affirms that death is not the end and that a person's deeds have consequences beyond this life — though the specifics (resurrection vs. reincarnation) differ substantially.",
  },
  {
    id: "omniscience",
    title: "God's Complete Knowledge & Power",
    question: "Does God know and control all things, seen and unseen?",
    summary:
      "God is described as all-knowing and all-powerful, aware of what is hidden from human perception.",
  },
];

export const conceptById = (id: string) =>
  concepts.find((c) => c.id === id);
