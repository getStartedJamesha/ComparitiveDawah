import type { Contradiction, ContradictionReligionId } from "./types";

/**
 * Same sourcing policy as verses.ts: only well-attested, commonly discussed
 * passages, each naming its translation and linking to a primary source.
 * A `note` on each entry names how the tradition itself has responded
 * (harmonization, source-critical theory, competing philosophical school) —
 * the goal is an honest account of a real textual tension, not a "gotcha."
 */
export const contradictions: Contradiction[] = [
  // ------------------------------------------------------------ CHRISTIANITY
  {
    id: "christianity-creation-order",
    religionId: "christianity",
    title: "Two Orders of Creation",
    description:
      "Genesis 1 and Genesis 2 narrate creation in different sequences: in the first, animals are made before humankind (male and female together); in the second, the man is formed first, then animals, then the woman.",
    passages: [
        {
        reference: "Genesis 1:25-27",
        text: "And God made the beast of the earth after his kind... So God created man in his own image... male and female created he them.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+1%3A25-27&version=KJV",
      },
      {
        reference: "Genesis 2:7,18-19",
        text: "And the LORD God formed man of the dust of the ground... And out of the ground the LORD God formed every beast of the field, and every fowl of the air, and brought them unto Adam to see what he would call them.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+2%3A7%2C18-19&version=KJV",
      },
    ],
    note: "Long discussed in biblical scholarship; harmonists read Genesis 2 as a topical zoom-in on day six rather than a second timeline, while source-critical scholars attribute the two accounts to different underlying traditions (commonly labelled P and J).",
  },
  {
    id: "christianity-genealogy",
    religionId: "christianity",
    title: "Two Genealogies of Jesus",
    description:
      "Matthew and Luke both trace Jesus' lineage through Joseph back to David, but list different fathers and different sons of David.",
    passages: [
      {
        reference: "Matthew 1:6,16",
        text: "And Jesse begat David the king; and David the king begat Solomon... And Jacob begat Joseph the husband of Mary, of whom was born Jesus.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+1%3A6%2C16&version=KJV",
      },
      {
        reference: "Luke 3:23,31",
        text: "Jesus... being (as was supposed) the son of Joseph, which was the son of Heli... which was the son of Nathan, which was the son of David.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+3%3A23%2C31&version=KJV",
      },
    ],
    note: "Common harmonizations propose that Luke traces Mary's line (with Joseph as son-in-law to Heli) or that one genealogy is legal/royal while the other is biological — neither reading is stated explicitly in the text itself.",
  },
  {
    id: "christianity-judas-death",
    religionId: "christianity",
    title: "The Death of Judas",
    description:
      "The Gospel of Matthew and the book of Acts describe Judas Iscariot's death differently.",
    passages: [
      {
        reference: "Matthew 27:5",
        text: "And he cast down the pieces of silver in the temple, and departed, and went and hanged himself.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A5&version=KJV",
      },
      {
        reference: "Acts 1:18",
        text: "Now this man purchased a field with the reward of iniquity; and falling headlong, he burst asunder in the midst, and all his bowels gushed out.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Acts+1%3A18&version=KJV",
      },
    ],
    note: "A traditional harmonization holds that Judas hanged himself and the rope or branch later gave way, causing the fall described in Acts — a reading that combines, rather than derives from, either single account.",
  },
  {
    id: "christianity-seeing-god",
    religionId: "christianity",
    title: "Can God Be Seen?",
    description:
      "John's Gospel states flatly that no one has ever seen God, while the Torah describes Israel's elders seeing God directly.",
    passages: [
      {
        reference: "John 1:18",
        text: "No man hath seen God at any time; the only begotten Son... hath declared him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+1%3A18&version=KJV",
      },
      {
        reference: "Exodus 24:9-11",
        text: "Then went up Moses, and Aaron, Nadab, and Abihu, and seventy of the elders of Israel: and they saw the God of Israel... also they saw God, and did eat and drink.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+24%3A9-11&version=KJV",
      },
    ],
    note: "Classical commentators distinguish seeing God's unmediated essence (denied) from seeing a manifestation, vision, or divine glory (affirmed) — a distinction the text itself does not spell out.",
  },
  {
    id: "christianity-father-son",
    religionId: "christianity",
    title: "Equal to the Father, or Lesser?",
    description:
      "Jesus is quoted describing his relationship to God the Father in ways later theology had to reconcile: unity of being in one place, subordination in another.",
    passages: [
      {
        reference: "John 10:30",
        text: "I and my Father are one.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+10%3A30&version=KJV",
      },
      {
        reference: "John 14:28",
        text: "...for my Father is greater than I.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+14%3A28&version=KJV",
      },
    ],
    note: "This tension sits at the heart of centuries of Trinitarian debate; Nicene theology resolves it as unity of divine essence alongside functional subordination in the incarnation, a distinction later councils spent decades formalizing.",
  },
  {
    id: "christianity-empty-tomb",
    religionId: "christianity",
    title: "The Resurrection Accounts: How Many Angels?",
    description:
      "The four Gospels differ on details of the resurrection morning, including how many angelic figures the women encountered at the tomb.",
    passages: [
      {
        reference: "Matthew 28:2,5",
        text: "...the angel of the Lord descended from heaven... And the angel answered and said unto the women, Fear not ye.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A2%2C5&version=KJV",
      },
      {
        reference: "Luke 24:4",
        text: "...behold, two men stood by them in shining garments.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A4&version=KJV",
      },
    ],
    note: "Harmonists suggest one angel spoke while a second was present but silent; critical scholars point to it as evidence the resurrection narratives circulated independently before being written down.",
  },

  // ---------------------------------------------------------------- JUDAISM
  {
    id: "judaism-creation-order",
    religionId: "judaism",
    title: "Two Orders of Creation",
    description:
      "As in the Christian Old Testament (the same Torah text), Genesis 1 and Genesis 2 present creation in different sequences.",
    passages: [
      {
        reference: "Genesis 1:25-27",
        text: "And God made the beast of the earth after his kind... male and female created He them.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.1.25-27",
      },
      {
        reference: "Genesis 2:7,19",
        text: "Then the LORD God formed man of the dust of the ground... And out of the ground the LORD God formed every beast of the field, and every fowl of the air, and brought them unto the man to see what he would call them.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.2.7-19",
      },
    ],
    note: "Rabbinic commentary (e.g. Rashi) reads Genesis 2 as elaborating on the sixth day of Genesis 1 rather than contradicting it; source-critical scholarship instead attributes the two chapters to distinct literary traditions.",
  },
  {
    id: "judaism-census-instigator",
    religionId: "judaism",
    title: "Who Incited David's Census?",
    description:
      "The book of Samuel and the book of Chronicles name different instigators behind David's controversial census of Israel.",
    passages: [
      {
        reference: "II Samuel 24:1",
        text: "And again the anger of the LORD was kindled against Israel, and He moved David against them, saying: 'Go, number Israel and Judah.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.24.1",
      },
      {
        reference: "I Chronicles 21:1",
        text: "And Satan stood up against Israel, and moved David to number Israel.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Chronicles.21.1",
      },
    ],
    note: "Classical Jewish commentators (e.g. Radak) read the two as compatible: God permitted a satan/adversary to test David, so both statements describe the same event from different vantage points.",
  },
  {
    id: "judaism-does-god-change",
    religionId: "judaism",
    title: "Does God Change His Mind?",
    description:
      "Numbers denies that God is capable of regret, while Genesis and Exodus describe God regretting a past decision.",
    passages: [
      {
        reference: "Numbers 23:19",
        text: "God is not a man, that He should lie; neither the son of man, that He should repent.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Numbers.23.19",
      },
      {
        reference: "Genesis 6:6",
        text: "And it repented the LORD that He had made man on the earth, and it grieved Him at His heart.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.6.6",
      },
    ],
    note: "Commentators typically read the 'repenting' language as anthropomorphic accommodation — describing a change in outcome or in how God relates to events, not a change in God's essential nature or knowledge.",
  },
  {
    id: "judaism-seeing-god",
    religionId: "judaism",
    title: "Can God Be Seen?",
    description:
      "Exodus states that no one can see God's face and live, yet Genesis describes Jacob doing exactly that.",
    passages: [
      {
        reference: "Exodus 33:20",
        text: "And He said: 'Thou canst not see My face, for man shall not see Me and live.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.33.20",
      },
      {
        reference: "Genesis 32:31",
        text: "And Jacob called the name of the place Peniel: 'for I have seen God face to face, and my life is preserved.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.32.31",
      },
    ],
    note: "Commentators generally distinguish a vision, angelic encounter, or partial manifestation (permitted) from seeing God's essence directly (denied) — Jewish tradition has long debated exactly what Jacob 'saw.'",
  },
  {
    id: "judaism-famine-years",
    religionId: "judaism",
    title: "Three Years of Famine, or Seven?",
    description:
      "Samuel and Chronicles record different lengths for the famine offered to David as a punishment option.",
    passages: [
      {
        reference: "II Samuel 24:13",
        text: "So Gad came to David, and told him... Shall seven years of famine come unto thee in thy land?",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.24.13",
      },
      {
        reference: "I Chronicles 21:12",
        text: "Either three years of famine; or three months to be consumed before thy foes...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Chronicles.21.12",
      },
    ],
    note: "Often attributed to a copyist error in textual transmission; some traditional harmonists instead parse the Samuel text as counting an already-elapsed famine plus three more years.",
  },

  // --------------------------------------------------------------- HINDUISM
  {
    id: "hinduism-one-or-many",
    religionId: "hinduism",
    title: "One Truth, or Many Gods?",
    description:
      "The Rig Veda contains both a famous monistic declaration that all gods are names for one truth, and hymns of praise and sacrifice addressed to individual gods as distinct beings.",
    passages: [
      {
        reference: "Rig Veda 1.164.46",
        text: "To what is One, sages give many a title: they call it Agni, Yama, Matarisvan.",
        translation: "Ralph T. H. Griffith translation",
        sourceUrl: "https://www.sacred-texts.com/hin/rigveda/index.htm",
      },
      {
        reference: "Rig Veda 1.1.1",
        text: "I laud Agni, the chosen Priest, God, minister of sacrifice, the Hotar, lavishest of wealth.",
        translation: "Ralph T. H. Griffith translation",
        sourceUrl: "https://www.sacred-texts.com/hin/rigveda/index.htm",
      },
    ],
    note: "Max Müller coined the term 'henotheism' specifically for this Rig Vedic pattern — worshipping one god at a time as supreme without denying others. Vedantic schools later resolved the tension by treating the many gods as aspects or manifestations of one ultimate reality (Brahman).",
  },
  {
    id: "hinduism-personal-or-formless",
    religionId: "hinduism",
    title: "A Personal God, or a Formless Absolute?",
    description:
      "The Upanishads describe ultimate reality (Brahman) as beyond all description and form, while the Bhagavad Gita presents Krishna as the supreme personal God who takes on visible form.",
    passages: [
      {
        reference: "Brihadaranyaka Upanishad 2.3.6",
        text: "Now therefore the description of Brahman: 'Not this, not this' (neti, neti); for there is no other and more appropriate description than this.",
        translation: "Robert Ernest Hume translation",
        sourceUrl: "https://www.sacred-texts.com/hin/index.htm",
      },
      {
        reference: "Bhagavad Gita 9.11",
        text: "Fools deride Me when I descend in the human form. They do not know My transcendental nature as the Supreme Lord of all that be.",
        translation: "A. C. Bhaktivedanta Swami Prabhupada",
        sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/9/verse/11",
      },
    ],
    note: "This is a long-running internal debate, not a modern criticism: Advaita ('non-dualist') philosophy leans toward the formless, impersonal reading; Vaishnava and other bhakti (devotional) schools hold that the Supreme is ultimately personal, with the impersonal Brahman as one partial aspect of Krishna.",
  },
  {
    id: "hinduism-soul-identity",
    religionId: "hinduism",
    title: "Is the Soul One With God, or Eternally Separate?",
    description:
      "The Chandogya Upanishad's most famous teaching identifies the individual self with ultimate reality, while the Bhagavad Gita describes souls as God's eternally distinct, though dependent, fragments.",
    passages: [
      {
        reference: "Chandogya Upanishad 6.8.7",
        text: "That which is the subtle essence, in that all that exists has its self. That is the True. That is the Self. That art thou (Tat Tvam Asi).",
        translation: "Max Müller translation",
        sourceUrl: "https://www.sacred-texts.com/hin/index.htm",
      },
      {
        reference: "Bhagavad Gita 15.7",
        text: "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses.",
        translation: "A. C. Bhaktivedanta Swami Prabhupada",
        sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/15/verse/7",
      },
    ],
    note: "This is the central fault line between Hinduism's major philosophical schools: Advaita ('non-dual') Vedanta reads Tat Tvam Asi as identity between self and Brahman, while Dvaita ('dualist') and Vishishtadvaita schools read the Gita's language as eternal distinction between the soul and God, even in liberation.",
  },
  {
    id: "hinduism-caste-origin",
    religionId: "hinduism",
    title: "Caste Ordained by God, or Spiritual Equality?",
    description:
      "The Bhagavad Gita has Krishna claim to have created the four-fold caste division, while elsewhere in the same text it commends sages who see all beings — high and low caste alike — with equal vision.",
    passages: [
      {
        reference: "Bhagavad Gita 4.13",
        text: "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me.",
        translation: "A. C. Bhaktivedanta Swami Prabhupada",
        sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/4/verse/13",
      },
      {
        reference: "Bhagavad Gita 5.18",
        text: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater.",
        translation: "A. C. Bhaktivedanta Swami Prabhupada",
        sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/5/verse/18",
      },
    ],
    note: "Traditional commentary distinguishes the origin of caste as a functional division of labor and aptitude (4:13) from spiritual equality of all souls before God (5:18); modern reformers within Hinduism (e.g. Gandhi, Vivekananda) have leaned heavily on the latter to challenge hereditary caste practice.",
  },
];

export const contradictionsByReligion = (religionId: ContradictionReligionId) =>
  contradictions.filter((c) => c.religionId === religionId);
