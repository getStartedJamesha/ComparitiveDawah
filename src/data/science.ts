import type { ScienceCategoryId, ScienceTopic } from "./types";

export const scienceCategories: { id: ScienceCategoryId; title: string }[] = [
  { id: "embryology", title: "Embryology & Human Development" },
  { id: "astronomy", title: "Astronomy & Cosmology" },
  { id: "earth-sciences", title: "Earth Sciences" },
  { id: "oceans-water", title: "Oceans & Water" },
  { id: "biology", title: "Biology" },
  { id: "metallurgy", title: "Metallurgy & Materials" },
  { id: "other", title: "Other Frequently Cited Verses" },
];

/**
 * Same sourcing policy as the rest of the site: an authentic, linked verse
 * first. The "claim" field states the popular modern correspondence often
 * drawn from it (the i'jaz 'ilmi / "scientific miracles" genre, largely
 * popularized from the mid-20th century onward). The "context" field is
 * not a rebuttal — it's the same kind of honest caveat used throughout
 * this site: what classical commentators (writing centuries before modern
 * science) actually understood the verse to mean, and where scientists or
 * Muslim scholars themselves urge caution about reading a specific modern
 * finding into the text — including, in a couple of entries, a genuine
 * anatomical or translational objection raised by critics. Readers should
 * weigh all of it, not just the claim.
 */
export const scienceTopics: ScienceTopic[] = [
  // ---------------------------------------------------- EMBRYOLOGY & HUMAN DEVELOPMENT
  {
    id: "embryology",
    title: "Stages of Embryonic Development",
    field: "Embryology",
    category: "embryology",
    passages: [
      {
        reference: "Qur'an 23:12-14",
        text: "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh; then We developed him into another creature. So blessed is Allah, the best of creators.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/23/12-14",
      },
    ],
    claim:
      "Popularly read as matching the sequence of modern embryology: implantation ('clinging clot'), the mesenchyme/somite stage ('lump of flesh'), and ossification followed by muscle formation ('bones... covered... with flesh').",
    context:
      "This staged reading was popularized in the late 20th century partly through Canadian embryologist Keith Moore's collaboration with Muslim scholars — itself a point of ongoing debate among other embryologists about how precisely the Arabic terms map onto specific Carnegie stages. Classical commentators (e.g. al-Tabari, Ibn Kathir), writing centuries earlier, read the same verses as a general description of gestation and a sign of God's creative power, without the detailed one-to-one staging popular apologetics now draw from it.",
  },
  {
    id: "nutfah-fluid-origin",
    title: "Creation from a Fluid",
    field: "Embryology",
    category: "embryology",
    passages: [
      {
        reference: "Qur'an 96:1-2",
        text: "Recite in the name of your Lord who created - Created man from a clinging substance.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/96/1-2",
      },
      {
        reference: "Qur'an 86:5-7",
        text: "So let man observe from what he was created. He was created from a fluid, ejected, emerging from between the backbone and the ribs.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/86/5-7",
      },
    ],
    claim:
      "Read together as an early description of human origin from a minute quantity of fluid — consistent with fertilization by semen (commonly called nutfah, 'a drop,' elsewhere in the Qur'an, e.g. 23:13).",
    context:
      "86:7's description of the fluid 'emerging from between the backbone and the ribs' is one of the more genuinely contested verses in this genre: semen originates in the testes, not that region of the torso, which is why some critics (Muslim and non-Muslim alike) treat it as an anatomical error rather than a match. Common responses read 'between the backbone and the ribs' as referring broadly to the pelvic/lower-torso area, or note that classical Arabic 'bayna' ('between') can denote a general region rather than a precise point. Classical commentators such as Ibn Kathir read the verse mainly as a rhetorical emphasis on humanity's humble origin, not an anatomical description meant to be read literally.",
  },
  {
    id: "three-darknesses",
    title: "Three Stages of Darkness in the Womb",
    field: "Embryology",
    category: "embryology",
    passages: [
      {
        reference: "Qur'an 39:6",
        text: "...He creates you in the wombs of your mothers, creation after creation, within three darknesses...",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/39/6",
      },
    ],
    claim:
      "Popularly read as anatomically specific: the abdominal wall, the uterine wall, and the amniotic membrane as three distinct layers of 'darkness' around a developing fetus.",
    context:
      "Classical commentators (e.g. al-Qurtubi, Ibn Kathir) offer older readings of the 'three darknesses' that don't match this specific membrane anatomy — variously the belly, the womb, and the placenta, or simply darkness intensified across three general stages of pregnancy. The phrase also fits a broader Quranic pattern of describing hidden processes (including a person's own conception) as happening 'in darkness,' a poetic emphasis on concealment rather than a claim about distinct anatomical layers.",
  },

  // ---------------------------------------------------------- ASTRONOMY & COSMOLOGY
  {
    id: "cosmic-expansion",
    title: "An Expanding Universe",
    field: "Cosmology",
    category: "astronomy",
    passages: [
      {
        reference: "Qur'an 51:47",
        text: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/51/47",
      },
    ],
    claim:
      "Cited as anticipating the expansion of the universe, a finding associated with Edwin Hubble's observations in 1929.",
    context:
      "The Arabic musi'un ('expander,' from the same root as si'ah, 'vastness/capacity') is used across classical tafsir to affirm God's power in extending and spreading out the heavens generally. Commentators writing well before modern cosmology read it as a statement of divine vastness and power, not a specific claim about the metric expansion of spacetime discovered in the 20th century.",
  },
  {
    id: "heavens-earth-joined",
    title: "The Heavens and Earth Once Joined",
    field: "Cosmology",
    category: "astronomy",
    passages: [
      {
        reference: "Qur'an 21:30",
        text: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing? Then will they not believe?",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/21/30",
      },
    ],
    claim:
      "Cited as consistent with the Big Bang model: the universe originating from a single, unified state before separating outward.",
    context:
      "Classical commentators read 'joined entity... separated' in ways that predate modern cosmology entirely — a common older reading takes it as heaven and earth once being connected with no rain falling and no vegetation growing between them, until God sent rain (the very next clause, 'made from water every living thing') and set creation in motion. The parallel to Big Bang cosmology specifically is a modern reading, not one found in early tafsir.",
  },
  {
    id: "celestial-orbits",
    title: "Celestial Bodies in Orbit",
    field: "Astronomy",
    category: "astronomy",
    passages: [
      {
        reference: "Qur'an 21:33",
        text: "And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/21/33",
      },
      {
        reference: "Qur'an 36:38-40",
        text: "And the sun runs [on course] toward its stopping point... And the moon - We have determined for it phases... It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each, in an orbit, is swimming.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/36/38-40",
      },
    ],
    claim:
      "Cited as an early description of celestial bodies each following a distinct orbit, rather than being fixed to the sky.",
    context:
      "Neither verse specifies what orbits what, or the shape/cause of the orbit. Pre-modern astronomers — including Greek and Indian astronomers centuries before Islam — already modeled celestial bodies moving along circular paths, within a geocentric framework. Classical Islamic commentators read these verses within that same geocentric cosmology of their era, not as a heliocentric claim.",
  },
  {
    id: "sky-without-pillars",
    title: "The Sky Held Up Without Pillars",
    field: "Astronomy",
    category: "astronomy",
    passages: [
      {
        reference: "Qur'an 13:2",
        text: "It is Allah who erected the heavens without pillars that you [can] see; then He established Himself above the Throne and made subject the sun and the moon, each running [its course] for a specified term.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/13/2",
      },
      {
        reference: "Qur'an 31:10",
        text: "He created the heavens without pillars that you see and has cast into the earth firmly set mountains, lest it shift with you, and dispersed therein from every creature.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/31/10",
      },
    ],
    claim:
      "The qualifier 'that you see' is read by some as implying pillars do exist, just invisible ones — taken as a hint at gravitational forces holding celestial bodies in place without physical structure.",
    context:
      "Classical commentators generally read 'without pillars' more simply: the sky visibly has no supporting structure at all, full stop, offered as a sign of God's power holding it up directly. The 'that you see' qualifier is grammatically ambiguous in Arabic and is also commonly read as simply intensifying 'without pillars' (i.e. 'without pillars — as you can plainly see'), not as implying a class of unseen pillars later identified as gravity.",
  },

  // -------------------------------------------------------------------- EARTH SCIENCES
  {
    id: "mountains-stability",
    title: "Mountains as Pegs and Crustal Stabilizers",
    field: "Geology",
    category: "earth-sciences",
    passages: [
      {
        reference: "Qur'an 78:6-7",
        text: "Have We not made the earth as a bed, And the mountains as pegs?",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/78/6-7",
      },
      {
        reference: "Qur'an 16:15",
        text: "And He has cast into the earth firmly set mountains, lest it shift with you, and [made] rivers and roads, that you may be guided.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/16/15",
      },
      {
        reference: "Qur'an 21:31",
        text: "And We placed within the earth firmly set mountains, lest it should shift with them, and We made therein [mountain] passes [as] roads that they might be guided.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/21/31",
      },
    ],
    claim:
      "Cited as anticipating both plate tectonics (mountains stabilizing the crust) and isostasy specifically — the 'peg' (watad) image extended to mean a mountain's visible peak is only the head of a much deeper root, the way a tent peg's shaft is buried.",
    context:
      "Classical commentators read 'firmly set... lest it shift with you' as describing the visible stability mountains give to land against everyday shifting — an observation available to any settled society — rather than a claim about crustal root structure specifically. 'Pegs' is likewise read simply as a comparison to how pegs anchor a tent, not a statement about subsurface geology. Geologists also note that plate tectonics concerns the movement of entire plates, which surface mountains do not by themselves prevent.",
  },
  {
    id: "atmosphere-shield",
    title: "A Protective Atmospheric Layer",
    field: "Atmospheric Science",
    category: "earth-sciences",
    passages: [
      {
        reference: "Qur'an 21:32",
        text: "And We made the sky a protected ceiling, but they, from its signs, are turning away.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/21/32",
      },
    ],
    claim:
      "Cited as describing the atmosphere's protective role — shielding Earth from harmful solar radiation and most meteoroids.",
    context:
      "Classical commentators read 'protected ceiling' in a few different ways that predate atmospheric science: protection from the sky collapsing or falling, or (linked to nearby verses about shooting stars, e.g. 15:16-18) protection from devils eavesdropping on the heavens. None of the early readings describe radiation shielding or meteoroid burn-up specifically — those are modern additions to the verse's traditional meaning.",
  },
  {
    id: "lowest-point-earth",
    title: "\"The Nearest\" — or Lowest — Land",
    field: "Geography",
    category: "earth-sciences",
    passages: [
      {
        reference: "Qur'an 30:2-3",
        text: "The Byzantines have been defeated. In the nearest land. But they, after their defeat, will overcome.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/30/2-3",
      },
    ],
    claim:
      "The Arabic adna al-ard, translated 'the nearest land,' can also carry the sense 'the lowest land' — read by some as a reference to the region near the Dead Sea, the lowest point on Earth's land surface, where the historical Byzantine-Sasanian battle referenced here (c. 614 CE) is traditionally located.",
    context:
      "'Adna' most directly and most commonly means 'nearest/closest' in this context, and virtually every classical and modern translation renders it that way — a straightforward description of the nearest Byzantine-held territory to Persia, explaining where the defeat took place, not a claim about elevation. The 'lowest land' reading draws on a secondary sense of the same root and is a minority interpretation layered on afterward.",
  },

  // ------------------------------------------------------------------- OCEANS & WATER
  {
    id: "sea-barrier",
    title: "A Barrier Between Two Seas",
    field: "Oceanography",
    category: "oceans-water",
    passages: [
      {
        reference: "Qur'an 55:19-20",
        text: "He released the two seas, meeting [side by side]; between them is a barrier [so] neither of them transgresses.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/55/19-20",
      },
      {
        reference: "Qur'an 25:53",
        text: "And it is He who has released [simultaneously] the two seas, one fresh and palatable and the other salty and bitter, and He placed between them a barrier and prohibiting partition.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/25/53",
      },
      {
        reference: "Qur'an 27:61",
        text: "Is He [not best] who made the earth a stable ground and placed within it rivers and made for it firmly set mountains and placed between the two seas a barrier?",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/27/61",
      },
    ],
    claim:
      "Popularly linked to oceanographic haloclines/pycnoclines — density boundaries where two bodies of water of differing salinity or temperature resist fully mixing.",
    context:
      "25:53 itself specifies one sea as fresh and the other salty, which fits the everyday, visible meeting of a river mouth with the sea at least as naturally as it fits open-ocean haloclines. Sailors and coastal communities could observe this boundary (by color, current, or taste) long before oceanography existed, and a widely circulated attribution of the halocline claim to Jacques Cousteau has been reported as unverifiable. Classical commentators generally read these verses as describing that visible meeting of fresh and salt water, or of two seas at a strait, rather than a technical claim about density stratification.",
  },
  {
    id: "sea-darkness-layers",
    title: "Darkness in the Depths of the Sea",
    field: "Oceanography",
    category: "oceans-water",
    passages: [
      {
        reference: "Qur'an 24:40",
        text: "Or [they are] like darknesses within an unfathomable sea which is covered by waves, upon which are waves, over which are clouds - darknesses, some of them upon others, when one puts out his hand, he can hardly see it.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/24/40",
      },
    ],
    claim:
      "Cited as matching oceanographic findings that sunlight cannot penetrate below roughly 200 meters, and that internal waves exist at density boundaries within open water.",
    context:
      "This verse appears in a passage of similes about the state of a disbeliever's heart, not a scientific discourse. Classical commentators (e.g. Ibn Kathir) read the 'darknesses' and 'waves upon waves' primarily as vivid imagery familiar to sailors caught in a storm, illustrating spiritual confusion and lack of guidance, rather than a technical description of light attenuation or internal wave dynamics.",
  },
  {
    id: "water-cycle",
    title: "The Water Cycle",
    field: "Hydrology",
    category: "oceans-water",
    passages: [
      {
        reference: "Qur'an 39:21",
        text: "Do you not see that Allah sends down rain from the sky and makes it flow as springs [and rivers] in the earth; then He produces thereby crops of varying colors; then they wither and you see them turned yellow; then He makes them [scattered] debris.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/39/21",
      },
      {
        reference: "Qur'an 24:43",
        text: "Do you not see that Allah drives clouds? Then He brings them together, then He makes them into a mass, and you see the rain emerge from within it.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/24/43",
      },
      {
        reference: "Qur'an 25:48-49",
        text: "And it is He who sends the winds as good tidings before His mercy, and We send down from the sky pure water. That We may bring to life thereby a dead land and give it as drink to those We created of numerous livestock and men.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/25/48-49",
      },
    ],
    claim:
      "Cited as describing the hydrological cycle: cloud formation, rainfall replenishing springs and rivers, and sustaining plant growth.",
    context:
      "This is among the less contested examples, since the basic observation — clouds gathering, rain falling, feeding springs and rivers and crops — was already available to ancient agricultural societies and appears in earlier texts too (e.g. Ecclesiastes 1:7). What's debated is less the observation itself than whether it amounts to a scientific prediction beyond common experience of the time.",
  },

  // ------------------------------------------------------------------------- BIOLOGY
  {
    id: "fingerprints",
    title: "The Uniqueness of Fingertips",
    field: "Biology",
    category: "biology",
    passages: [
      {
        reference: "Qur'an 75:3-4",
        text: "Does man think that We will not assemble his bones? Yes. [We are] Able [even] to proportion his fingertips.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/75/3-4",
      },
    ],
    claim:
      "Cited as an early acknowledgment of the uniqueness of fingerprints, since the verse specifically singles out fingertips — rather than the body in general — when affirming God's power to reconstitute a person after death.",
    context:
      "The verse is about bodily resurrection, refuting the disbelievers' doubt that scattered bones could be reassembled — not a statement about biometric identification. Classical commentators read the mention of fingertips as an example chosen for its fine, intricate detail (small bones and joints being harder to imagine reassembling than large ones), a rhetorical point about God's precision, rather than a claim about fingerprint individuality — a concept not established in forensic science until the 19th century.",
  },
  {
    id: "milk-origin",
    title: "Milk from Between Waste and Blood",
    field: "Biology",
    category: "biology",
    passages: [
      {
        reference: "Qur'an 16:66",
        text: "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies - between excretion and blood - pure milk, palatable to drinkers.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/16/66",
      },
    ],
    claim:
      "Cited as an accurate physiological description: milk is synthesized in the mammary gland from nutrients absorbed into the bloodstream — not from digestive waste directly — yet emerges 'pure' despite forming amid the digestive and circulatory systems.",
    context:
      "This is among the more scientifically compatible examples, and it also has a straightforward classical reading: commentators like Ibn Kathir describe milk forming in the udder from what the animal digests, a general observation consistent with the animal husbandry knowledge available at the time, without requiring modern knowledge of mammary gland physiology specifically.",
  },
  {
    id: "bee-behavior",
    title: "The Bee's Behavior",
    field: "Biology",
    category: "biology",
    passages: [
      {
        reference: "Qur'an 16:68-69",
        text: "And your Lord inspired to the bee, 'Take for yourself among the mountains, houses, and among the trees and [in] that which they construct.'... There emerges from their bellies a drink, varying in colors, in which there is healing for people.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/16/68-69",
      },
    ],
    claim:
      "Cited for its accurate description of bees building structured hives in varied locations and producing honey with medicinal properties, alongside the grammatically feminine verb forms used for the bees throughout the passage — matching the fact that worker bees are female.",
    context:
      "The feminine grammar is a genuinely interesting linguistic detail consistent with worker bees being female. That said, hive-building, honey production, and honey's use as a folk remedy were all well known well before Islam, including in earlier Egyptian and Greek sources, so the underlying observations were available to any careful observer of the time rather than being uniquely modern knowledge.",
  },
  {
    id: "pain-receptors-skin",
    title: "Pain Receptors in the Skin",
    field: "Biology",
    category: "biology",
    passages: [
      {
        reference: "Qur'an 4:56",
        text: "Indeed, those who disbelieve in Our verses - We will drive them into a Fire. Every time their skins are roasted through We will replace them with other skins so they may taste the punishment. Indeed, Allah is ever Exalted in Might and Wise.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/4/56",
      },
    ],
    claim:
      "Cited as showing awareness that pain is sensed via receptors concentrated in the skin — implying new skin is given so the punishment keeps being felt.",
    context:
      "This verse describes eschatological punishment in the afterlife, not a physiology lesson — its point is that the punishment is unending and renewed, a motif that appears elsewhere in warnings about Hell (compare the undying-worm imagery in Mark 9:48). Classical commentators read the 'renewed skin' as emphasizing the endlessness and intensity of the punishment, not as an anatomical statement about the location of pain receptors, which was not established until much later study of the nervous system.",
  },

  // -------------------------------------------------------------- METALLURGY & MATERIALS
  {
    id: "iron-origin",
    title: "The Cosmic Origin of Iron",
    field: "Astrophysics",
    category: "metallurgy",
    passages: [
      {
        reference: "Qur'an 57:25",
        text: "...And We sent down iron, wherein is great military might and benefits for the people, and so that Allah may make evident those who support Him and His messengers unseen. Indeed, Allah is Powerful and Exalted in Might.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/57/25",
      },
    ],
    claim:
      "Cited as anticipating astrophysics: iron heavier than what stellar fusion in ordinary stars can produce is understood to form in supernovae, later arriving on Earth via meteorites — matching the verb 'sent down.'",
    context:
      "The same Arabic verb (anzala, 'sent down') is used elsewhere in the Qur'an for things plainly of earthly origin — livestock and clothing, for instance, in 39:6 and 7:26 — in the general sense of 'bestowed' or 'provided,' not physical descent from space. Classical commentators read 'sent down' here the same way; the astrophysical reading is a modern addition, not one found in early tafsir.",
  },

  // --------------------------------------------------------- OTHER FREQUENTLY CITED VERSES
  {
    id: "time-relativity",
    title: "The Relativity of Time",
    field: "Physics",
    category: "other",
    passages: [
      {
        reference: "Qur'an 22:47",
        text: "...And indeed, a day with your Lord is like a thousand years of those which you count.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/22/47",
      },
      {
        reference: "Qur'an 32:5",
        text: "He arranges [each] matter from the heaven to the earth; then it will ascend to Him in a Day, the extent of which is a thousand years of those which you count.",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/32/5",
      },
    ],
    claim:
      "Cited as anticipating relativity — the idea that time is not an absolute, universal constant but can pass differently depending on reference frame.",
    context:
      "Classical commentators read 'a day... like a thousand years' as a figure of speech emphasizing God's transcendence of human timescales, a common idiom for immense duration found in other scriptures too (e.g. Psalm 90:4: 'a thousand years in your sight are like yesterday'). It describes God's relationship to time, not a physical mechanism for time dilation, which in relativity depends specifically on relative velocity or gravitational field — neither of which these verses describe.",
  },
  {
    id: "day-night-wrapping",
    title: "Night and Day \"Wrapping\" Around Each Other",
    field: "Astronomy",
    category: "other",
    passages: [
      {
        reference: "Qur'an 39:5",
        text: "He created the heavens and earth in truth. He wraps the night over the day and wraps the day over the night...",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/39/5",
      },
      {
        reference: "Qur'an 31:29",
        text: "Do you not see that Allah causes the night to enter the day and causes the day to enter the night...",
        translation: "Sahih International",
        sourceUrl: "https://quran.com/31/29",
      },
    ],
    claim:
      "The verb in 39:5 (kawwara, 'to wrap' or 'coil,' as in wrapping a turban) is read by some as implying a spherical Earth, since 'wrapping' suggests day and night curving continuously around a globe rather than simply alternating.",
    context:
      "Classical commentators read 'wraps' mainly as vivid imagery for how night and day continuously and smoothly overtake one another, without drawing a conclusion about the Earth's shape either way — a flat, disc-like Earth was the common cosmological assumption of the era, including among early Muslim astronomers who still made this same word choice. The spherical-Earth reading is inferred from the verb by later readers rather than stated in the verse.",
  },
];

export const scienceTopicsByCategory = (category: ScienceCategoryId) =>
  scienceTopics.filter((t) => t.category === category);
