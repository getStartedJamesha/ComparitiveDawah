import type { ScienceTopic } from "./types";

/**
 * Same sourcing policy as the rest of the site: an authentic, linked verse
 * first. The "claim" field states the popular modern correspondence often
 * drawn from it (the i'jaz 'ilmi / "scientific miracles" genre, largely
 * popularized from the mid-20th century onward). The "context" field is
 * not a rebuttal — it's the same kind of honest caveat used throughout
 * this site: what classical commentators (writing centuries before modern
 * science) actually understood the verse to mean, and where scientists or
 * Muslim scholars themselves urge caution about reading a specific modern
 * finding into the text. Readers should weigh both, not just the claim.
 */
export const scienceTopics: ScienceTopic[] = [
  {
    id: "embryology",
    title: "Stages of Embryonic Development",
    field: "Embryology",
    passage: {
      reference: "Qur'an 23:12-14",
      text: "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh; then We developed him into another creature. So blessed is Allah, the best of creators.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/23/12-14",
    },
    claim:
      "Popularly read as matching the sequence of modern embryology: implantation ('clinging clot'), the mesenchyme/somite stage ('lump of flesh'), and ossification followed by muscle formation ('bones... covered... with flesh').",
    context:
      "This staged reading was popularized in the late 20th century partly through Canadian embryologist Keith Moore's collaboration with Muslim scholars — itself a point of ongoing debate among other embryologists about how precisely the Arabic terms map onto specific Carnegie stages. Classical commentators (e.g. al-Tabari, Ibn Kathir), writing centuries earlier, read the same verses as a general description of gestation and a sign of God's creative power, without the detailed one-to-one staging popular apologetics now draw from it.",
  },
  {
    id: "cosmic-expansion",
    title: "An Expanding Universe",
    field: "Cosmology",
    passage: {
      reference: "Qur'an 51:47",
      text: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/51/47",
    },
    claim:
      "Cited as anticipating the expansion of the universe, a finding associated with Edwin Hubble's observations in 1929.",
    context:
      "The Arabic musi'un ('expander,' from the same root as si'ah, 'vastness/capacity') is used across classical tafsir to affirm God's power in extending and spreading out the heavens generally. Commentators writing well before modern cosmology read it as a statement of divine vastness and power, not a specific claim about the metric expansion of spacetime discovered in the 20th century.",
  },
  {
    id: "mountains-stability",
    title: "Mountains and Crustal Stability",
    field: "Geology",
    passage: {
      reference: "Qur'an 16:15",
      text: "And He has cast into the earth firmly set mountains, lest it shift with you, and [made] rivers and roads, that you may be guided.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/16/15",
    },
    claim:
      "Cited as anticipating the geological finding that mountain ranges have deep 'roots' (isostasy) that help stabilize continental crust.",
    context:
      "Classical commentators read 'firmly set... lest it shift with you' as describing the visible stability mountains give to land against everyday shifting — an observation available to any settled society — rather than a claim about crustal root structure specifically. Geologists also note that plate tectonics concerns the movement of entire plates, which surface mountains do not by themselves prevent.",
  },
  {
    id: "water-cycle",
    title: "The Water Cycle",
    field: "Hydrology",
    passage: {
      reference: "Qur'an 39:21",
      text: "Do you not see that Allah sends down rain from the sky and makes it flow as springs [and rivers] in the earth; then He produces thereby crops of varying colors; then they wither and you see them turned yellow; then He makes them [scattered] debris. Indeed in that is a reminder for those of understanding.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/39/21",
    },
    claim:
      "Cited as describing the hydrological cycle: rainfall replenishing springs and rivers, sustaining and then withering plant growth.",
    context:
      "This is among the less contested examples, since the basic observation — rain feeding springs and rivers, which feed crops — was already available to ancient agricultural societies and appears in earlier texts too (e.g. Ecclesiastes 1:7). What's debated is less the observation itself than whether it amounts to a scientific prediction beyond common experience of the time.",
  },
  {
    id: "sea-barrier",
    title: "A Barrier Between Two Seas",
    field: "Oceanography",
    passage: {
      reference: "Qur'an 55:19-20",
      text: "He released the two seas, meeting [side by side]; between them is a barrier [so] neither of them transgresses.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/55/19-20",
    },
    claim:
      "Popularly linked to oceanographic haloclines/pycnoclines — density boundaries where two bodies of water of differing salinity or temperature resist fully mixing.",
    context:
      "Sailors and coastal communities could visibly distinguish adjoining seas (by color, current, or taste) long before oceanography existed, and a widely circulated attribution of this observation to Jacques Cousteau has been reported as unverifiable. Classical commentators generally read this as describing the observable meeting of fresh and salt water, or of two seas at a strait, rather than a technical claim about density stratification.",
  },
  {
    id: "iron-origin",
    title: "The Cosmic Origin of Iron",
    field: "Astrophysics",
    passage: {
      reference: "Qur'an 57:25",
      text: "...And We sent down iron, wherein is great military might and benefits for the people, and so that Allah may make evident those who support Him and His messengers unseen. Indeed, Allah is Powerful and Exalted in Might.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/57/25",
    },
    claim:
      "Cited as anticipating astrophysics: iron heavier than what stellar fusion in ordinary stars can produce is understood to form in supernovae, later arriving on Earth via meteorites — matching the verb 'sent down.'",
    context:
      "The same Arabic verb (anzala, 'sent down') is used elsewhere in the Qur'an for things plainly of earthly origin — livestock and clothing, for instance, in 39:6 and 7:26 — in the general sense of 'bestowed' or 'provided,' not physical descent from space. Classical commentators read 'sent down' here the same way; the astrophysical reading is a modern addition, not one found in early tafsir.",
  },
  {
    id: "celestial-orbits",
    title: "Celestial Bodies in Orbit",
    field: "Astronomy",
    passage: {
      reference: "Qur'an 21:33",
      text: "And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming.",
      translation: "Sahih International",
      sourceUrl: "https://quran.com/21/33",
    },
    claim:
      "Cited as an early description of celestial bodies each following an orbit.",
    context:
      "The verse doesn't specify what orbits what. Pre-modern astronomers — including Greek and Indian astronomers centuries before Islam — already modeled celestial bodies moving along circular paths, within a geocentric framework. Classical Islamic commentators read this verse within that same geocentric cosmology of their era, not as a heliocentric claim.",
  },
];
