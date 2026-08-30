import type { Prophecy, ProphecyReligionId } from "./types";

/**
 * Same sourcing policy as the rest of the site. Each entry states the
 * Islamic apologetic claim honestly, alongside an authentic citation where
 * one exists, and the "context" field gives the tradition's own mainstream
 * reading and any relevant textual-critical facts (e.g. manuscript
 * evidence) — not to dismiss the claim, but because this site's whole
 * premise is that a citation is only worth something if it's checkable.
 * One entry (the Bhavishya Purana) has no passage citation at all: the
 * authenticity and dating of that text's relevant passage is itself the
 * disputed point, and fabricating a confident-looking citation for it
 * would violate that premise rather than serve it.
 */
export const prophecies: Prophecy[] = [
  {
    id: "judaism-deuteronomy-prophet",
    religionId: "judaism",
    title: "\"A Prophet Like unto Thee\"",
    passage: {
      reference: "Deuteronomy 18:18",
      text: "I will raise them up a Prophet from among their brethren, like unto thee; and I will put My words in his mouth, and he shall speak unto them all that I shall command him.",
      translation: "JPS 1917",
      sourceUrl: "https://www.sefaria.org/Deuteronomy.18.18",
    },
    claim:
      "Read by Muslim commentators as a prophecy of Muhammad: 'from among their brethren' is taken to extend to the Ishmaelite/Arab line (Ishmael being Isaac's brother), and 'like unto thee' — a lawgiver bringing new scripture, who married and had children, and died a natural death — is read as fitting Muhammad more closely than Jesus.",
    context:
      "Jewish tradition reads 'from among their brethren' as meaning from among the Israelites specifically, referring to the ongoing line of Israelite prophets. Christian tradition has long read this verse — quoted directly in Acts 3:22 and 7:37 — as fulfilled in Jesus. Both traditional readings differ from the Islamic application, which depends on extending 'brethren' beyond Israel to Ishmael's descendants, a move the text itself does not make explicit.",
  },
  {
    id: "judaism-isaiah-kedar",
    religionId: "judaism",
    title: "The Servant and the Tents of Kedar",
    passage: {
      reference: "Isaiah 42:1,11",
      text: "Behold My servant, whom I uphold; Mine elect, in whom My soul delighteth... Let the wilderness and the cities thereof lift up their voice, the villages that Kedar doth inhabit; let the inhabitants of Sela sing, let them shout from the top of the mountains.",
      translation: "JPS 1917",
      sourceUrl: "https://www.sefaria.org/Isaiah.42",
    },
    claim:
      "Read together with the mention of Kedar — traditionally identified as a son of Ishmael and ancestor of northern Arabian tribes, per Genesis 25:13 — as pointing to a prophet arising among the Arabs.",
    context:
      "Jewish tradition generally reads the 'servant' figure in this passage as Israel collectively, or a righteous remnant of Israel. Christian tradition applies it directly to Jesus — most explicitly in Matthew 12:18-21, which quotes this exact passage. Kedar is named elsewhere in Isaiah (21:16-17, 60:7) simply as a Northern Arabian tribal group among the nations, without the text identifying an individual prophet from among them.",
  },
  {
    id: "judaism-song-of-songs",
    religionId: "judaism",
    title: "\"Altogether Lovely\" (Machamaddim)",
    passage: {
      reference: "Song of Songs 5:16",
      text: "His mouth is most sweet; yea, he is altogether lovely (machamaddim). This is my beloved, and this is my friend, O daughters of Jerusalem.",
      translation: "JPS 1917",
      sourceUrl: "https://www.sefaria.org/Song_of_Songs.5.16",
    },
    claim:
      "The Hebrew machamaddim ('altogether lovely/desirable') sounds close to 'Muhammad,' which some read as an embedded reference to his name.",
    context:
      "Grammatically, machamaddim is a common plural noun/adjective — 'most desirable things' or 'utterly delightful' — not a proper name, and it appears elsewhere in the Hebrew Bible as an ordinary word (e.g. Lamentations 1:11, 2:4). Jewish tradition reads this verse as part of a love poem describing the beloved, read literally or (in later tradition) allegorically as describing God and Israel — not as a name or a prophecy.",
  },
  {
    id: "christianity-paraclete",
    religionId: "christianity",
    title: "The Coming of the Comforter",
    passage: {
      reference: "John 14:16; 16:7",
      text: "And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever... Nevertheless I tell you the truth; It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you; but if I depart, I will send him unto you.",
      translation: "King James Version",
      sourceUrl:
        "https://www.biblegateway.com/passage/?search=John+14%3A16%3B+16%3A7&version=KJV",
    },
    claim:
      "Some Muslim commentators identify the 'Comforter' (Greek parakletos) with Muhammad, connecting it to Qur'an 61:6, where Jesus foretells a messenger to come 'whose name is Ahmad' — built from the same root as 'Muhammad,' meaning 'praised.' This reading is sometimes supported by proposing the original Greek was periklytos ('renowned, praised one,' close in meaning to Ahmad), later altered to parakletos.",
    context:
      "Every surviving Greek manuscript of John reads parakletos at each of these verses — there is no manuscript evidence for an original periklytos reading anywhere in the textual record; this is a proposed theory, not an attested variant. Mainstream Christian tradition identifies the Comforter as the Holy Spirit, based on John 14:26 in the very same discourse: 'the Comforter, which is the Holy Ghost, whom the Father will send in my name.'",
  },
  {
    id: "hinduism-bhavishya-purana",
    religionId: "hinduism",
    title: "The \"Mahamad\" Passage in the Bhavishya Purana",
    claim:
      "A passage in the Bhavishya Purana's Pratisarga Parva is widely circulated in Islamic apologetics as describing a teacher named 'Mahamad' arriving from Arabia — read as a Hindu scriptural prophecy of Muhammad.",
    context:
      "This site does not give a specific citation or link for this passage, unlike every other entry here, because the point genuinely in dispute is the authenticity and dating of the text itself. The Bhavishya Purana as it survives today is a composite work; Indologists (including many Hindu scholars of the Puranas) date large portions of the Pratisarga Parva — including passages referencing events, names, and even the British and Muslim periods of India — to many centuries after the classical Puranic era, some as late as the medieval or early modern period. That makes it, by mainstream textual-critical consensus, a later interpolation reacting to Islam's arrival in South Asia rather than an ancient prediction of it. Presenting a confident-looking verse citation for a passage whose age is the actual question at issue would run against this site's own standard for what counts as an authentic reference.",
  },
];

export const propheciesByReligion = (religionId: ProphecyReligionId) =>
  prophecies.filter((p) => p.religionId === religionId);
