import type { Verse } from "./types";

/**
 * Sourcing policy (see also the /sources page):
 * - Only well-attested, commonly cited verses are included.
 * - Every entry names its specific translation and links to a primary,
 *   independently checkable source (Quran.com, Sefaria, BibleGateway,
 *   holy-bhagavad-gita.org, sacred-texts.com) rather than an unlinkable quote.
 * - Wording can vary between translations — readers should always follow the
 *   link and compare against the original language / other translations
 *   before citing a verse elsewhere.
 */
export const verses: Verse[] = [
  // ---------------------------------------------------------------- ISLAM
  {
    religionId: "islam",
    conceptId: "oneness",
    reference: "Qur'an, Surah Al-Ikhlas 112:1-4",
    text: "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/112/1-4",
  },
  {
    religionId: "islam",
    conceptId: "creation",
    reference: "Qur'an 2:117",
    text: "[He is] Originator of the heavens and the earth. When He decrees a matter, He only says to it, 'Be,' and it is.",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/2/117",
  },
  {
    religionId: "islam",
    conceptId: "no-partners",
    reference: "Qur'an 4:48",
    text: "Indeed, Allah does not forgive association with Him (shirk), but He forgives what is less than that for whom He wills.",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/4/48",
  },
  {
    religionId: "islam",
    conceptId: "mercy",
    reference: "Qur'an 39:53",
    text: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/39/53",
  },
  {
    religionId: "islam",
    conceptId: "prophets",
    reference: "Qur'an 16:36",
    text: "And We certainly sent into every nation a messenger, [saying], 'Worship Allah and avoid Taghut (false gods).'",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/16/36",
  },
  {
    religionId: "islam",
    conceptId: "afterlife",
    reference: "Qur'an 21:35",
    text: "Every soul will taste death. And We test you with evil and with good as trial; and to Us you will be returned.",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/21/35",
  },
  {
    religionId: "islam",
    conceptId: "omniscience",
    reference: "Qur'an 6:59",
    text: "And with Him are the keys of the unseen; none knows them except Him. And He knows what is on the land and in the sea. Not a leaf falls but that He knows it.",
    translation: "Sahih International",
    sourceUrl: "https://quran.com/6/59",
  },

  // ------------------------------------------------------------ CHRISTIANITY
  {
    religionId: "christianity",
    conceptId: "oneness",
    reference: "Mark 12:29 (Jesus quoting the Shema, Deuteronomy 6:4)",
    text: "And Jesus answered him, The first of all the commandments is, Hear, O Israel; The Lord our God is one Lord.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Mark+12%3A29&version=KJV",
    note: "Christian doctrine later formalized the Trinity (one God in three persons); passages like this show the Hebrew monotheistic confession Jesus himself affirmed.",
  },
  {
    religionId: "christianity",
    conceptId: "creation",
    reference: "Genesis 1:1",
    text: "In the beginning God created the heaven and the earth.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Genesis+1%3A1&version=KJV",
  },
  {
    religionId: "christianity",
    conceptId: "no-partners",
    reference: "Exodus 20:3-4",
    text: "Thou shalt have no other gods before me. Thou shalt not make unto thee any graven image, or any likeness of any thing... thou shalt not bow down thyself to them, nor serve them.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Exodus+20%3A3-4&version=KJV",
  },
  {
    religionId: "christianity",
    conceptId: "mercy",
    reference: "Psalm 103:8",
    text: "The Lord is merciful and gracious, slow to anger, and plenteous in mercy.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Psalm+103%3A8&version=KJV",
  },
  {
    religionId: "christianity",
    conceptId: "prophets",
    reference: "Hebrews 1:1",
    text: "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Hebrews+1%3A1&version=KJV",
  },
  {
    religionId: "christianity",
    conceptId: "afterlife",
    reference: "John 5:28-29",
    text: "Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, and shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=John+5%3A28-29&version=KJV",
  },
  {
    religionId: "christianity",
    conceptId: "omniscience",
    reference: "Psalm 147:5",
    text: "Great is our Lord, and of great power: his understanding is infinite.",
    translation: "King James Version",
    sourceUrl:
      "https://www.biblegateway.com/passage/?search=Psalm+147%3A5&version=KJV",
  },

  // ---------------------------------------------------------------- JUDAISM
  {
    religionId: "judaism",
    conceptId: "oneness",
    reference: "Deuteronomy 6:4 (the Shema)",
    text: "Hear, O Israel: the LORD our God, the LORD is one.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Deuteronomy.6.4",
  },
  {
    religionId: "judaism",
    conceptId: "creation",
    reference: "Isaiah 44:24",
    text: "I am the LORD, that maketh all things; that stretcheth forth the heavens alone; that spreadeth abroad the earth by Myself.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Isaiah.44.24",
  },
  {
    religionId: "judaism",
    conceptId: "no-partners",
    reference: "Isaiah 44:6",
    text: "Thus saith the LORD, the King of Israel, and his Redeemer the LORD of hosts: I am the first, and I am the last, and beside Me there is no God.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Isaiah.44.6",
  },
  {
    religionId: "judaism",
    conceptId: "mercy",
    reference: "Exodus 34:6-7",
    text: "The LORD, the LORD, God, merciful and gracious, long-suffering, and abundant in goodness and truth... forgiving iniquity and transgression and sin.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Exodus.34.6-7",
  },
  {
    religionId: "judaism",
    conceptId: "prophets",
    reference: "Deuteronomy 18:18",
    text: "I will raise them up a prophet from among their brethren, like unto thee; and I will put My words in his mouth, and he shall speak unto them all that I shall command him.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Deuteronomy.18.18",
  },
  {
    religionId: "judaism",
    conceptId: "afterlife",
    reference: "Daniel 12:2",
    text: "And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to reproaches and everlasting abhorrence.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Daniel.12.2",
  },
  {
    religionId: "judaism",
    conceptId: "omniscience",
    reference: "Psalm 139:1-4",
    text: "O LORD, Thou hast searched me, and known me... For there is not a word in my tongue, but, lo, O LORD, Thou knowest it altogether.",
    translation: "JPS 1917",
    sourceUrl: "https://www.sefaria.org/Psalms.139.1-4",
  },

  // --------------------------------------------------------------- HINDUISM
  {
    religionId: "hinduism",
    conceptId: "oneness",
    reference: "Rig Veda 1.164.46",
    text: "They call him Indra, Mitra, Varuna, Agni... To what is One, sages give many a title: they call it Agni, Yama, Matarisvan.",
    translation: "Ralph T. H. Griffith translation",
    sourceUrl: "https://www.sacred-texts.com/hin/rigveda/index.htm",
    note: "Widely paraphrased in Sanskrit as 'Ekam Sat Vipra Bahudha Vadanti' — 'Truth is One; the wise call it by many names.' Find Mandala 1, Hymn 164 in the index linked here; readers should compare multiple translations, since Rig Vedic hymns are notoriously difficult to render precisely.",
  },
  {
    religionId: "hinduism",
    conceptId: "creation",
    reference: "Bhagavad Gita 10.8",
    text: "I am the source of all spiritual and material worlds. Everything emanates from Me.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/10/verse/8",
  },
  {
    religionId: "hinduism",
    conceptId: "no-partners",
    reference: "Bhagavad Gita 7.7",
    text: "There is nothing higher than Me, O Dhananjaya (Arjuna). All that exists is strung on Me, as clusters of gems on a thread.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/7/verse/7",
    note: "Hindu theology is diverse — some schools are strictly monist/monotheistic (as here), others are polytheistic or henotheistic in practice. This verse represents the Gita's own claim to Krishna's supremacy over all other devas.",
  },
  {
    religionId: "hinduism",
    conceptId: "mercy",
    reference: "Bhagavad Gita 9.30-31",
    text: "Even if the most sinful worship Me with undivided devotion, they are to be considered righteous... quickly they become righteous and attain lasting peace. O Arjuna, know for certain that My devotee never perishes.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/9/verse/30",
  },
  {
    religionId: "hinduism",
    conceptId: "prophets",
    reference: "Bhagavad Gita 4.7-8",
    text: "Whenever there is a decline of righteousness and a rise of unrighteousness, O Arjuna, then I manifest Myself. To protect the righteous, to destroy the wicked, and to reestablish dharma, I appear age after age.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/4/verse/7",
    note: "This describes divine incarnation (avatara) rather than human prophethood as in the Abrahamic faiths — a genuine theological difference worth noting, not glossing over.",
  },
  {
    religionId: "hinduism",
    conceptId: "afterlife",
    reference: "Bhagavad Gita 2.22",
    text: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/2/verse/22",
    note: "Describes reincarnation (samsara) rather than a single bodily resurrection and final judgment as taught in the Abrahamic faiths — an important point of contrast, not equivalence.",
  },
  {
    religionId: "hinduism",
    conceptId: "omniscience",
    reference: "Bhagavad Gita 7.26",
    text: "I know the past, the present, and the future, O Arjuna, but no one knows Me fully.",
    translation: "A. C. Bhaktivedanta Swami Prabhupada",
    sourceUrl: "https://www.holy-bhagavad-gita.org/chapter/7/verse/26",
  },
];

export const versesByConcept = (conceptId: string) =>
  verses.filter((v) => v.conceptId === conceptId);

export const versesByReligion = (religionId: string) =>
  verses.filter((v) => v.religionId === religionId);
