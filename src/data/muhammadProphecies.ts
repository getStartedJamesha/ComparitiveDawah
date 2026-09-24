import type { MuhammadProphecy, MuhammadProphecyCategory } from "./types";

/**
 * Same sourcing policy as the rest of the site, adapted for hadith. Qur'anic
 * citations link straight to a verse on quran.com, same as everywhere else
 * on this site. Hadith citations are different: printed hadith collections
 * use several competing numbering systems (e.g. the numbering in Fath
 * al-Bari differs from the consecutive numbering most English digital
 * collections use), so instead of guessing a single "correct" number, the
 * source link here points to a sunnah.com search for the hadith's
 * distinctive wording — click through and confirm the collection, chain,
 * and grading yourself. The "grade" field states each hadith's standard
 * authentication (Sahih, Hasan, etc.) honestly, including where scholars
 * are divided. Every "context" note gives the same honest counter-reading
 * this site gives everywhere else: what a skeptical historian would point
 * out, and — for anything not yet fulfilled — a plain statement that it
 * hasn't happened and can't currently be verified either way.
 */
export const muhammadProphecies: MuhammadProphecy[] = [
  {
    id: "muhammad-rome-persia",
    category: "lifetime",
    title: "The Byzantines Will Overcome",
    source: {
      reference: "Qur'an 30:2-4",
      text: "The Byzantines have been defeated in the nearest land. But they, after their defeat, will overcome within a few years. To Allah belongs the command before and after...",
      sourceUrl: "https://quran.com/30/2-4",
    },
    claim:
      "Revealed around 614-615 CE, shortly after the Sassanid Persians dealt the Byzantine (Roman) Empire a catastrophic defeat, sacking Jerusalem and capturing the True Cross. The verse predicted the Byzantines would reverse this defeat within a few years ('bid' sinin', traditionally read as 3-9 years). Emperor Heraclius did stage a dramatic comeback, decisively defeating Persia and recovering the True Cross by 627-629 CE.",
    context:
      "Byzantine-Persian wars had swung back and forth for centuries before this, so a reversal wasn't an inherently improbable guess for a well-informed observer of the region, and 'bid' sinin' is imprecise enough (3 to 9 years) to leave real interpretive room. A minority classical reading of the Arabic (recorded by some early commentators) even took the verb the other way, as the Byzantines being defeated again rather than winning — though the dominant reading and the historical outcome both favor 'they will overcome.' Even granting all that, non-Muslim historians of the period generally treat the verse's specific timeframe — announced while Byzantium's position looked its most catastrophic — as a striking call, whatever explanation one gives for it.",
  },
  {
    id: "muhammad-abu-lahab",
    category: "lifetime",
    title: "Abu Lahab's Fate",
    source: {
      reference: "Qur'an 111:1-5",
      text: "May the hands of Abu Lahab be ruined, and ruined is he. His wealth will not avail him or that which he gained. He will burn in a Fire of [blazing] flame...",
      sourceUrl: "https://quran.com/111",
    },
    claim:
      "This short, early Meccan surah names Muhammad's ﷺ own uncle, Abu Lahab, a prominent and active opponent, and predicts he will die rejecting the message and be damned — roughly a decade before he actually died (in 624 CE, shortly after the Battle of Badr). Apologists note Abu Lahab had a simple way to falsify it at any point during those ten years — outwardly convert, even insincerely — and never did.",
    context:
      "Abu Lahab was already a committed, public opponent of Muhammad ﷺ by the time this surah was revealed, so predicting he would stay one wasn't a wild guess. Whether he would have gained anything by a token conversion just to disprove a rival's claim is itself a modern counterfactual that doesn't obviously map onto 7th-century Meccan tribal politics, where such a reversal could have cost him standing among his own faction. It remains one of the sharpest examples in the Qur'an of a specific, named, falsifiable prediction about a living individual's choices — however one explains it.",
  },
  {
    id: "muhammad-suraqah-bracelets",
    category: "lifetime",
    title: "Suraqah and the Bracelets of Chosroes",
    source: {
      reference: "Sahih al-Bukhari, narration of Suraqah ibn Malik on the Hijra",
      text: "\"How would you like it, Suraqah, if you were to wear the bracelets of Chosroes?\"",
      grade: "Sahih — Bukhari",
      sourceUrl: "https://sunnah.com/search?q=Suraqah+bracelets+of+Chosroes",
    },
    claim:
      "During the Hijra (622 CE), Suraqah ibn Malik chased Muhammad ﷺ and Abu Bakr across the desert to collect a bounty on them. Tradition holds the Prophet ﷺ told him he would one day wear the bracelets of the Persian emperor, Chosroes — and let him go. Roughly two decades later, after the Muslim conquest of the Sassanid Persian Empire under Caliph Umar, Khosrow's captured bracelets were reportedly placed on Suraqah's own wrists.",
    context:
      "The story survives through hadith literature and later historians such as al-Tabari, compiled decades after the events, so — as with most of early Islamic history — this rests on later written transmission of oral reports rather than a contemporary document. The larger event it depends on, the Sassanid Empire's collapse, is well attested independently; the specific detail of the bracelets reaching Suraqah's wrists is a report about what happened after Muhammad's ﷺ death, transmitted by his companions and their successors rather than witnessed by him.",
  },
  {
    id: "muhammad-khosrau-caesar-treasures",
    category: "after-death",
    title: "The Treasures of Khosrau and Caesar",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, narrated during the Battle of the Trench",
      text: "\"...By Him in Whose Hand Muhammad's soul is, you will conquer the treasures of Khosrau and Caesar, and spend them in Allah's cause.\"",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=treasures+of+Khosrau+and+Caesar+Allah%27s+cause",
    },
    claim:
      "Said in 627 CE while the Muslims were besieged, hungry, and digging a defensive trench around Medina, at what was arguably their most desperate moment militarily. Within about 25 years of Muhammad's ﷺ death, the Rashidun Caliphate had absorbed the entire Sassanid Persian Empire and stripped the Byzantine Empire of its richest provinces (Syria, Egypt).",
    context:
      "The Sassanid and Byzantine empires had just fought each other to exhaustion in a war that ended the same year (628 CE), and historians widely credit that mutual exhaustion as a major structural reason both were so vulnerable to the Arab conquests that followed. Predicting eventual gains against two already-weakened rivals — bold given the Muslims' desperate circumstances at the moment it was said — was not predicting an implausible outcome to an informed observer of the regional balance of power at the time.",
  },
  {
    id: "muhammad-conquest-of-mecca",
    category: "after-death",
    title: "Entering Mecca in Safety",
    source: {
      reference: "Qur'an 48:27",
      text: "Certainly has Allah showed to His Messenger the vision in truth. You will surely enter al-Masjid al-Haram, if Allah wills, in safety...",
      sourceUrl: "https://quran.com/48/27",
    },
    claim:
      "Revealed around the Treaty of Hudaybiyyah (628 CE), when the treaty's terms actually barred the Muslims from entering Mecca that year — a treaty many of Muhammad's ﷺ own followers saw as humiliating at the time. Two years later, in 630 CE, Mecca surrendered without a fight and the Muslims entered peacefully, as described.",
    context:
      "The Hudaybiyyah treaty itself, by securing ten years of truce and normalizing contact between the two sides, structurally improved the Muslims' position and made some future peaceful entry into Mecca more likely on its own terms. The verse's own qualifier — 'if Allah wills' — and its lack of a specific date also give it more interpretive latitude than a dated, concrete prediction would have.",
  },
  {
    id: "muhammad-thaqif-liar-destroyer",
    category: "after-death",
    title: "Thaqif's Liar and Destroyer",
    source: {
      reference: "Sahih Muslim, on the tribe of Thaqif",
      text: "\"Among Thaqif there will be a great liar and a great destroyer.\"",
      grade: "Sahih — Muslim",
      sourceUrl: "https://sunnah.com/search?q=Thaqif+great+liar+great+destroyer",
    },
    claim:
      "Muslim tradition identifies the 'liar' as al-Mukhtar ibn Abi Ubayd (d. 687 CE), a Thaqif tribesman who later claimed to receive revelation, and the 'destroyer' as al-Hajjaj ibn Yusuf (d. 714 CE), the Umayyad governor notorious for brutally suppressing dissent, including in the Hijaz itself — both from the same tribe, a generation or two after the saying.",
    context:
      "Identifying al-Mukhtar and al-Hajjaj as 'the' liar and destroyer is the standard later interpretation, not something the hadith text itself names — it names only the tribe and the two general descriptions. A single tribe producing one dishonest and one violently repressive public figure across a few centuries of history is not, on its own, a narrow target to hit; both men were also real, extensively documented historical figures widely reviled in later Sunni memory, which is part of why this particular application became the standard one.",
  },
  {
    id: "muhammad-ammar-transgressing-party",
    category: "after-death",
    title: "Ammar and \"the Transgressing Party\"",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, on Ammar ibn Yasir",
      text: "\"Alas! Ammar will be killed by the transgressing/rebellious party (al-fi'ah al-baghiyah).\"",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=Ammar+killed+by+the+transgressing+party",
    },
    claim:
      "Reportedly said while the companion Ammar ibn Yasir, then an old man, helped build the mosque in Medina. Ammar was killed in 657 CE at the Battle of Siffin, fighting in his nineties on the side of Caliph Ali against the forces of Mu'awiyah ibn Abi Sufyan.",
    context:
      "This is one of the most debated hadith in early Islamic historiography, precisely because of what it implies about who was in the wrong at Siffin. Sunni tradition broadly accepts the hadith's authenticity — it appears in both Bukhari and Muslim — while differing sharply on what it means: a report attributed to Amr ibn al-As, on Mu'awiyah's side, argued that whoever brought Ammar out to battle bore responsibility for his death, not whoever struck the fatal blow, while Shia tradition reads the hadith more directly as vindicating Ali's side. The historical fact that this saying was remembered and that Ammar died at Siffin as described is not seriously disputed; what it settles about who was right in that civil war very much still is.",
  },
  {
    id: "muhammad-fire-from-hijaz",
    category: "after-death",
    title: "A Fire From the Land of Hijaz",
    source: {
      reference: "Sahih al-Bukhari, on the signs preceding the Hour",
      text: "\"The Hour will not be established until fire comes out of the land of Hijaz, which will light the necks of the camels at Busra.\"",
      grade: "Sahih — Bukhari",
      sourceUrl: "https://sunnah.com/search?q=fire+comes+out+of+the+land+of+Hijaz+Busra",
    },
    claim:
      "In 1256 CE (654 AH), a real volcanic eruption occurred just outside Medina — part of the Harrat Rahat lava field — bright enough to reportedly be seen from great distances and recorded by contemporary chroniclers including Ibn Kathir. Apologists point to this as the fire the hadith describes.",
    context:
      "The hadith itself frames this fire as one sign among several marking the approach of 'the Hour' — the Day of Judgment — which, by the standards of mainstream Islamic belief itself, has not yet arrived. That leaves the hadith's own framework in an odd position: either the 1256 CE eruption was the specific sign meant and the other listed signs remain pending centuries later, or it wasn't the sign meant at all and the identification is a retrospective, appealing coincidence rather than the fire the hadith had in view. Classical commentators, writing centuries before 1256 CE, did not and could not connect the hadith to this specific eruption; that link is a modern application.",
  },
  {
    id: "muhammad-night-and-day",
    category: "long-range",
    title: "Wherever Night and Day Reach",
    source: {
      reference: "Musnad Ahmad, narrated from Tamim al-Dari",
      text: "\"This affair (Islam) will reach as far as the night and day reach, and Allah will not leave a house of clay or wool [i.e. any settled or nomadic dwelling] except that He causes this religion to enter it...\"",
      grade: "Graded Hasan or Sahih by some scholars via this chain; other chains for similar wording are weaker",
      sourceUrl: "https://sunnah.com/search?q=this+affair+will+reach+as+far+as+the+night+and+day+reach",
    },
    claim:
      "Cited as predicting Islam's spread, within a few centuries, across most of the inhabited world then known — from Spain to Central and South Asia — a genuinely rapid expansion by any historical standard.",
    context:
      "Many successful religious and political movements have also spread very widely over the centuries that followed their founding; a sufficiently broad claim about geographic reach has decent odds of eventually looking impressive in hindsight for any expansionist movement that succeeds at all. The hadith's own wording — 'every house' — is also broad enough to be satisfied by even a small minority presence reaching a region, not necessarily conversion or dominance there.",
  },
  {
    id: "muhammad-shepherds-tall-buildings",
    category: "unfulfilled",
    title: "Barefoot Shepherds Competing in Tall Buildings",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, the 'Hadith of Gabriel'",
      text: "\"...that you see barefoot, naked, destitute shepherds competing in constructing tall buildings.\"",
      grade: "Sahih — Bukhari & Muslim (one of the most widely attested hadith in either collection)",
      sourceUrl: "https://sunnah.com/search?q=barefoot+naked+destitute+shepherds+competing+in+constructing+tall+buildings",
    },
    claim:
      "Popularly read today as forecasting the transformation of once-poor Bedouin desert societies into wealthy, skyscraper-building Gulf states — Dubai and Qatar are the examples usually named.",
    context:
      "This line is one item in a longer list of 'signs of the Hour' within the same hadith (alongside, for instance, a slave-girl giving birth to her own mistress), whose plain sense in classical commentary is a general future social inversion — the poor and lowly gaining unwarranted wealth and status — not a prediction about architecture specifically. Reading it as 'skyscrapers in the Gulf' is a modern, retrospective application rather than the hadith's traditional interpretation, and formerly poor populations building upward as they grow wealthy is not a pattern unique to the Gulf or to this era.",
  },
  {
    id: "muhammad-mahdi-dajjal-jesus",
    category: "unfulfilled",
    title: "The Mahdi, the Dajjal, and the Return of Jesus",
    source: {
      reference: "Extensively narrated across Sahih Muslim's Book of Tribulations, Sahih al-Bukhari, and other collections",
      text: "A large body of hadith describes a coming figure (the Mahdi) who will restore justice, a false messiah (the Dajjal) who will deceive much of humanity, and the return of Jesus, who defeats the Dajjal and establishes a period of peace before the Hour.",
      grade: "Individual narrations range from Sahih to weaker chains; the broad outline is mainstream, but many specific details are debated even within Sunni scholarship",
      sourceUrl: "https://sunnah.com/search?q=Dajjal+Mahdi+Jesus+descend",
    },
    claim:
      "Presented here for completeness, not as evidence either way: this is standard mainstream Islamic eschatology, not a fringe claim, and it is often included in popular lists of the Prophet's ﷺ prophecies.",
    context:
      "None of this has occurred. Claims about events still entirely in the future cannot be checked against a historical record the way the other entries on this page can be, and — unlike, say, the Byzantine-Persian reversal — there is no way to assess whether the description fits until (or unless) something happens that could plausibly be measured against it. That is stated plainly here rather than left implicit, in keeping with this site's approach to every other undecided or unverifiable claim it covers.",
  },
];

export const CATEGORY_ORDER: MuhammadProphecyCategory[] = [
  "lifetime",
  "after-death",
  "long-range",
  "unfulfilled",
];

export const CATEGORY_LABELS: Record<MuhammadProphecyCategory, string> = {
  lifetime: "Fulfilled in His Lifetime",
  "after-death": "Fulfilled After His Death",
  "long-range": "Long-Range and Ongoing",
  unfulfilled: "Not Yet Verifiable",
};

export const muhammadPropheciesByCategory = (
  category: MuhammadProphecyCategory,
) => muhammadProphecies.filter((p) => p.category === category);
