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
      text: "How would you like it, Suraqah, if you were to wear the bracelets of Chosroes?",
      grade: "Sahih — Bukhari",
      sourceUrl: "https://sunnah.com/search?q=Suraqah+bracelets+of+Chosroes",
    },
    claim:
      "During the Hijra (622 CE), Suraqah ibn Malik chased Muhammad ﷺ and Abu Bakr across the desert to collect a bounty on them. Tradition holds the Prophet ﷺ told him he would one day wear the bracelets of the Persian emperor, Chosroes — and let him go. Roughly two decades later, after the Muslim conquest of the Sassanid Persian Empire under Caliph Umar, Khosrow's captured bracelets were reportedly placed on Suraqah's own wrists.",
    context:
      "The story survives through hadith literature and later historians such as al-Tabari, compiled decades after the events, so — as with most of early Islamic history — this rests on later written transmission of oral reports rather than a contemporary document. The larger event it depends on, the Sassanid Empire's collapse, is well attested independently; the specific detail of the bracelets reaching Suraqah's wrists is a report about what happened after Muhammad's ﷺ death, transmitted by his companions and their successors rather than witnessed by him.",
  },
  {
    id: "muhammad-khaybar-spoils",
    category: "lifetime",
    title: "The Promised Spoils of War",
    source: {
      reference: "Qur'an 48:18-20",
      text: "Certainly was Allah pleased with the believers when they pledged allegiance to you under the tree... And much war booty which they will take... Allah has promised you much booty that you will take [in the future] and has hastened for you this [victory]...",
      sourceUrl: "https://quran.com/48/18-20",
    },
    claim:
      "Revealed around the Treaty of Hudaybiyyah (628 CE), promising the believers 'much war booty' they would 'take [in the future].' Weeks later, the conquest of the Jewish oasis settlement of Khaybar — also in 628 CE — yielded the largest haul of spoils the Muslim community had taken up to that point.",
    context:
      "Khaybar was already a natural next target once Hudaybiyyah's truce freed up Muslim forces previously tied down by the standing threat from Mecca, so predicting a coming military gain in that climate wasn't a wild guess. The verse itself doesn't name Khaybar or give a date, which leaves room to apply 'much booty... in the future' to any of several campaigns that followed.",
  },
  {
    id: "muhammad-protection-promise",
    category: "lifetime",
    title: "Protected From the People",
    source: {
      reference: "Qur'an 5:67",
      text: "O Messenger, announce that which has been revealed to you from your Lord, and if you do not, then you have not conveyed His message. And Allah will protect you from the people...",
      sourceUrl: "https://quran.com/5/67",
    },
    claim:
      "A direct promise of personal protection, revealed while Muhammad ﷺ faced real, repeated threats to his life. He went on to die of natural illness in 632 CE rather than by assassination, despite several attempts on his life reported in the early biographical literature, including a poisoning attempt at Khaybar.",
    context:
      "Promises of protection for a prophet or leader are a common feature of other scriptures too (compare God's promises of protection to various biblical prophets), and a leader surviving to a natural death despite facing threats isn't itself an unusual outcome historically — most attempts on political and religious leaders' lives in this period failed. Classical commentators read the verse mainly as reassurance to keep preaching publicly despite the risk, not as a claim staked against one specific, falsifiable outcome.",
  },
  {
    id: "muhammad-return-to-mecca",
    category: "lifetime",
    title: "\"A Place of Return\"",
    source: {
      reference: "Qur'an 28:85",
      text: "Indeed, [O Muhammad], He who imposed upon you the Qur'an will take you back to a place of return...",
      sourceUrl: "https://quran.com/28/85",
    },
    claim:
      "Traditionally dated to the Hijra itself, while Muhammad ﷺ was leaving Mecca for Medina. Some read 'a place of return' (ma'ad) as a specific promise that he would return to his native city — fulfilled at the conquest of Mecca in 630 CE.",
    context:
      "'Ma'ad' is a general word for 'a place of return,' and classical commentators are divided on what it refers to here — Ibn Kathir records readings that take it as Mecca specifically, but also readings that take it as death, resurrection, or Paradise: a return to God rather than to a city. Because the Arabic itself doesn't name the destination, applying this verse to the conquest of Mecca is one classical reading among a few, not the text's unambiguous meaning.",
  },
  {
    id: "muhammad-khosrau-caesar-treasures",
    category: "after-death",
    title: "The Treasures of Khosrau and Caesar",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, narrated during the Battle of the Trench",
      text: "...By Him in Whose Hand Muhammad's soul is, you will conquer the treasures of Khosrau and Caesar, and spend them in Allah's cause.",
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
    category: "lifetime",
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
      text: "Among Thaqif there will be a great liar and a great destroyer.",
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
      text: "Alas! Ammar will be killed by the transgressing/rebellious party (al-fi'ah al-baghiyah).",
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
      text: "The Hour will not be established until fire comes out of the land of Hijaz, which will light the necks of the camels at Busra.",
      grade: "Sahih — Bukhari",
      sourceUrl: "https://sunnah.com/search?q=fire+comes+out+of+the+land+of+Hijaz+Busra",
    },
    claim:
      "In 1256 CE (654 AH), a real volcanic eruption occurred just outside Medina — part of the Harrat Rahat lava field — bright enough to reportedly be seen from great distances and recorded by contemporary chroniclers including Ibn Kathir. Apologists point to this as the fire the hadith describes.",
    context:
      "The hadith itself frames this fire as one sign among several marking the approach of 'the Hour' — the Day of Judgment — which, by the standards of mainstream Islamic belief itself, has not yet arrived. That leaves the hadith's own framework in an odd position: either the 1256 CE eruption was the specific sign meant and the other listed signs remain pending centuries later, or it wasn't the sign meant at all and the identification is a retrospective, appealing coincidence rather than the fire the hadith had in view. Classical commentators, writing centuries before 1256 CE, did not and could not connect the hadith to this specific eruption; that link is a modern application.",
  },
  {
    id: "muhammad-hasan-reconciliation",
    category: "after-death",
    title: "Hasan's Reconciliation",
    source: {
      reference: "Sahih al-Bukhari, on Hasan ibn Ali",
      text: "This son of mine is a leader (sayyid), and perhaps Allah will bring about reconciliation through him between two great groups of Muslims.",
      grade: "Sahih — Bukhari",
      sourceUrl: "https://sunnah.com/search?q=this+son+of+mine+is+a+sayyid+reconciliation+two+great+groups",
    },
    claim:
      "In 661 CE, decades after this was said, Hasan ibn Ali — a claimant to the caliphate after his father Ali's assassination — voluntarily stepped down and ceded leadership to Mu'awiyah ibn Abi Sufyan, ending the first civil war between the two largest Muslim factions and giving that year its traditional name, 'Am al-Jama'ah ('the Year of Unity').",
    context:
      "This is one of the more specific and least contested items on this page: a named individual is credited in advance with a named role in a real, later, well-documented event. The main caution is that the hadith's own language — 'perhaps' — is conditional rather than a flat guarantee, and Hasan's decision to step aside was his own political choice made under real pressure (a large Syrian army and a fractured, war-weary base in Iraq), not an outcome outside human agency.",
  },
  {
    id: "muhammad-fatimah-first-to-join",
    category: "after-death",
    title: "Fatimah, First to Join Him",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, on Fatimah bint Muhammad",
      text: "During his final illness, the Prophet ﷺ reportedly told his daughter Fatimah privately that she would be the first of his family to join him after his death — at which she wept, then, on hearing a second private remark, smiled.",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=Fatimah+first+of+my+family+to+join+me",
    },
    claim:
      "Fatimah died roughly six months after her father, in 632 CE, reportedly the first of his immediate family to do so.",
    context:
      "This is a private conversation reported only through Fatimah's and 'A'isha's later testimony, with no independent way to confirm exactly what was said in the moment; some hadith scholars have also raised chain-related questions about specific versions of this narration even while accepting its general outline. Six months is also a short enough gap that, for an unwell father in his early sixties and his adult daughter among others in the household, this wasn't an especially improbable guess set aside any particular insight.",
  },
  {
    id: "muhammad-conquest-of-egypt",
    category: "after-death",
    title: "The Conquest of Egypt",
    source: {
      reference: "Sahih Muslim, on the future conquest of Egypt",
      text: "You will conquer Egypt... So when you conquer it, treat its people well, for they have a covenant of kinship and protection with us... [a reference to Hagar, traditionally held to be the mother of Ishmael and an Egyptian]",
      grade: "Sahih — Muslim",
      sourceUrl: "https://sunnah.com/search?q=you+will+conquer+Egypt+covenant+of+kinship",
    },
    claim:
      "Egypt was conquered by Muslim forces under 'Amr ibn al-'As roughly a decade after Muhammad's ﷺ death, in 639-642 CE.",
    context:
      "Egypt was one of the two wealthiest, most populous provinces of the Byzantine Empire (alongside Syria) and a natural target once the early conquests were underway against an already-weakened Byzantium — predicting its eventual conquest fits the same pattern of strategically reasonable forecasts as the broader Persia/Byzantium hadith. What's more distinctive here is the specific ethical instruction attached — to treat Egyptians well on the basis of a claimed kinship through Hagar — which early Muslim rulers, including 'Amr ibn al-'As himself as Egypt's first governor, are recorded as having invoked afterward.",
  },
  {
    id: "muhammad-thirty-year-caliphate",
    category: "after-death",
    title: "Thirty Years of Caliphate",
    source: {
      reference: "Sunan Abi Dawud and Jami' al-Tirmidhi",
      text: "The caliphate of prophethood will last thirty years, then Allah will give the kingdom (mulk) to whomever He wills.",
      grade: "Graded hasan or sahih by some scholars (e.g. al-Albani); others have raised chain-related concerns about specific wordings of this narration",
      sourceUrl: "https://sunnah.com/search?q=caliphate+will+last+thirty+years+then+kingship",
    },
    claim:
      "Adding the traditionally reckoned lengths of the first four ('Rightly Guided') caliphs' rule — Abu Bakr (~2 years), Umar (~10 years), Uthman (~12 years), and Ali (~5 years) — comes to approximately 30 years, after which governance shifted to the hereditary Umayyad dynasty: commonly read by later Muslim scholars as the shift from 'caliphate' to 'kingship' the hadith describes.",
    context:
      "The 30-year total depends on exactly where the count starts and ends — Muhammad's ﷺ death in 632 CE to Hasan ibn Ali's abdication in 661 CE is 29 years, and other framings vary by a year or two depending on whether Hasan's brief nominal caliphate is counted. 'Kingship' replacing 'caliphate' is also itself a retrospective value judgment characteristic of how later, mostly Sunni, historiography narrates the Umayyad transition — the Umayyads and their own supporters did not describe their rule that way.",
  },
  {
    id: "muhammad-night-and-day",
    category: "long-range",
    title: "Wherever Night and Day Reach",
    source: {
      reference: "Musnad Ahmad, narrated from Tamim al-Dari",
      text: "This affair (Islam) will reach as far as the night and day reach, and Allah will not leave a house of clay or wool [i.e. any settled or nomadic dwelling] except that He causes this religion to enter it...",
      grade: "Graded Hasan or Sahih by some scholars via this chain; other chains for similar wording are weaker",
      sourceUrl: "https://sunnah.com/search?q=this+affair+will+reach+as+far+as+the+night+and+day+reach",
    },
    claim:
      "Cited as predicting Islam's spread, within a few centuries, across most of the inhabited world then known — from Spain to Central and South Asia — a genuinely rapid expansion by any historical standard.",
    context:
      "Many successful religious and political movements have also spread very widely over the centuries that followed their founding; a sufficiently broad claim about geographic reach has decent odds of eventually looking impressive in hindsight for any expansionist movement that succeeds at all. The hadith's own wording — 'every house' — is also broad enough to be satisfied by even a small minority presence reaching a region, not necessarily conversion or dominance there.",
  },
  {
    id: "muhammad-constantinople",
    category: "long-range",
    title: "Constantinople Will Be Conquered",
    source: {
      reference: "Musnad Ahmad, and Sahih al-Bukhari on 'the first army'",
      text: "Constantinople will certainly be conquered...\" And, separately: \"The first army of my nation to invade Caesar's city [Constantinople] will be forgiven [their sins].",
      grade: "The Bukhari narration on 'the first army' is Sahih; the more specific 'Constantinople will certainly be conquered' wording usually cited (from Musnad Ahmad) has a chain that hadith critics, including al-Albani, have raised authenticity questions about, so its grading is more contested than most entries on this page",
      sourceUrl: "https://sunnah.com/search?q=Constantinople+will+certainly+be+conquered+first+army+forgiven",
    },
    claim:
      "The first recorded Muslim siege of Constantinople took place within about 50 years of Muhammad's ﷺ death (674-678 CE, under Caliph Mu'awiyah, traditionally associated with this hadith's 'first army'), and the city was finally and permanently conquered by Ottoman forces under Sultan Mehmed II in 1453 CE — roughly 820 years after the prediction.",
    context:
      "Constantinople was besieged by various forces, Muslim armies among them, numerous times across those eight centuries before finally falling, so a general prediction that it would 'certainly' eventually be conquered had a long stretch of opportunities to come true. The gap between the earliest and the successful sieges is also large enough that treating this as one continuously, precisely fulfilled prediction — rather than several separate campaigns against a heavily fortified capital that repeatedly resisted conquest — is itself a retrospective framing.",
  },
  {
    id: "muhammad-shepherds-tall-buildings",
    category: "unfulfilled",
    title: "Barefoot Shepherds Competing in Tall Buildings",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim, the 'Hadith of Gabriel'",
      text: "...that you see barefoot, naked, destitute shepherds competing in constructing tall buildings.",
      grade: "Sahih — Bukhari & Muslim (one of the most widely attested hadith in either collection)",
      sourceUrl: "https://sunnah.com/search?q=barefoot+naked+destitute+shepherds+competing+in+constructing+tall+buildings",
    },
    claim:
      "Popularly read today as forecasting the transformation of once-poor Bedouin desert societies into wealthy, skyscraper-building Gulf states — Dubai and Qatar are the examples usually named. A separate, similarly well-attested hadith (Sahih al-Bukhari 1412, Sahih Muslim 1012) that 'wealth will become abundant and overflowing' among Muslims is often cited alongside it as the same forecast in more general terms.",
    context:
      "This line is one item in a longer list of 'signs of the Hour' within the same hadith (alongside, for instance, a slave-girl giving birth to her own mistress), whose plain sense in classical commentary is a general future social inversion — the poor and lowly gaining unwarranted wealth and status — not a prediction about architecture specifically. Reading it as 'skyscrapers in the Gulf' is a modern, retrospective application rather than the hadith's traditional interpretation, and formerly poor populations building upward as they grow wealthy is not a pattern unique to the Gulf or to this era. The 'wealth overflowing' hadith is broader still — general predictions of future prosperity are common across many traditions and eras, and are easy to find apparent confirmation for in any sufficiently long stretch of history.",
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
      "Presented here for completeness, not as evidence either way: this is standard mainstream Islamic eschatology, not a fringe claim, and it is often included in popular lists of the Prophet's ﷺ prophecies. It is also only the headline outline — hadith literature (notably Sahih Muslim's own narration of 'the ten signs,' Sahih Muslim 2901) groups it with several further companion signs also covered separately on this page: the sun rising from the west, and the Ka'bah's eventual destruction.",
    context:
      "None of this has occurred. Claims about events still entirely in the future cannot be checked against a historical record the way the other entries on this page can be, and — unlike, say, the Byzantine-Persian reversal — there is no way to assess whether the description fits until (or unless) something happens that could plausibly be measured against it. That is stated plainly here rather than left implicit, in keeping with this site's approach to every other undecided or unverifiable claim it covers.",
  },
  {
    id: "muhammad-arabia-green-again",
    category: "unfulfilled",
    title: "Arabia Returning to Meadows and Rivers",
    source: {
      reference: "Sahih Muslim, on the signs preceding the Hour",
      text: "The Hour will not come until the land of the Arabs once again becomes meadows and rivers.",
      grade: "Sahih — Muslim",
      sourceUrl: "https://sunnah.com/search?q=land+of+the+Arabs+once+again+becomes+meadows+and+rivers",
    },
    claim:
      "Described as one of the more strikingly specific signs of the Hour, since the Arabian Peninsula is now overwhelmingly arid desert; the hadith's own wording — 'once again' — implies the region was greener at some earlier point in its history.",
    context:
      "Arabia genuinely was significantly wetter in the deep past — paleoclimate research on what's sometimes called the 'Green Arabia' periods documents repeated humid phases with lakes, rivers, and savanna-like vegetation across the peninsula, the most recent ending roughly 6,000-8,000 years ago, tens of thousands of years before Islam. That supports the 'once again' framing in a broad sense, but the hadith describes this as a future sign preceding the Hour, not a reference to prehistoric climate cycles, and Arabia has shown no large-scale reversion to that state in the 14 centuries since — small-scale, localized modern greening from irrigation projects is sometimes cited by apologists, but is not remotely the scale the hadith describes.",
  },
  {
    id: "muhammad-sun-rises-west",
    category: "unfulfilled",
    title: "The Sun Rising From the West",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim",
      text: "The Hour will not be established until the sun rises from the west; and when it rises and the people see it, they will all believe — but that will be a time when no soul will benefit from its faith if it had not believed before...",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=Hour+will+not+be+established+until+sun+rises+from+the+west",
    },
    claim:
      "Presented as one of the most specific signs, and one that — if it occurred — would be the most unambiguous: a reversal in the sun's apparent direction of travel across the sky, immediately and universally visible.",
    context:
      "Nothing resembling this has occurred, and a literal westward sunrise, which would require Earth's rotation to reverse, is essentially physically implausible on the timescale of ordinary human events by any accepted account of orbital mechanics — an observation Muslim scholars themselves have generally accepted, treating this specific sign as belonging to the category of direct divine intervention overriding the ordinary created order, not a naturally occurring geophysical process to be anticipated or explained scientifically.",
  },
  {
    id: "muhammad-euphrates-gold",
    category: "unfulfilled",
    title: "The Euphrates Uncovering Gold",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim",
      text: "The Hour will not be established until the Euphrates uncovers a mountain of gold, for which people will fight. Ninety-nine out of a hundred will die [in the fighting], and every one of them will say, 'Perhaps I will be the one who survives.'",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=Euphrates+uncovers+a+mountain+of+gold",
    },
    claim:
      "Describes a sign preceding the Hour in which the Euphrates river uncovers a vast, hidden gold deposit, triggering catastrophic violence over it — with a companion narration in which the Prophet ﷺ instructs that whoever witnesses this should not take anything from it.",
    context:
      "This is generally treated in mainstream commentary as not yet having occurred, and modern claims connecting it to riverbed exposure from dam projects or drought on the Euphrates have not produced anything resembling a literal mountain of gold or the mass violence the hadith describes — most contemporary scholars addressing the claim explicitly say it remains unfulfilled rather than treating any modern event as satisfying it.",
  },
  {
    id: "muhammad-kaaba-destruction",
    category: "unfulfilled",
    title: "The Ka'bah's Eventual Destruction",
    source: {
      reference: "Sahih al-Bukhari and Sahih Muslim",
      text: "The Ka'bah will be destroyed by Dhu al-Suwayqatayn [a man with two thin, small shins] from Ethiopia.",
      grade: "Sahih — Bukhari & Muslim",
      sourceUrl: "https://sunnah.com/search?q=Kabah+will+be+destroyed+by+Dhu+al-Suwaiqatain+from+Ethiopia",
    },
    claim:
      "Describes a future attack on Islam's central sanctuary by a described individual from Ethiopia, as one of the signs preceding the Hour.",
    context:
      "The Ka'bah has not been destroyed and stands intact today; this remains, in mainstream Islamic scholarship itself, an explicitly future and unfulfilled prediction, not a claim about anything that has already happened. There was a real historical near-miss centuries earlier and from the same general direction — the Abyssinian governor Abraha's failed attack on Mecca around the year Muhammad ﷺ was born, referenced in Qur'an 105 (Surat al-Fil) — which this hadith is sometimes read alongside, though that earlier attack demonstrably did not succeed, unlike the specific future event this hadith describes.",
  },
  {
    id: "muhammad-social-decline",
    category: "unfulfilled",
    title: "A Time of Moral Decline",
    source: {
      reference: "Sahih al-Bukhari, with parallel narrations in Sahih Muslim, Sunan Abi Dawud, and Sunan Ibn Majah",
      text: "Among the signs of the Hour: knowledge will be taken away, ignorance will prevail, alcohol will be widely consumed, and adultery will become widespread. Related narrations separately describe usury (riba) becoming so pervasive 'no one will remain untouched by it,' intoxicants being renamed and consumed under different labels, and trustworthiness disappearing from society: 'when honesty is lost, then wait for the Hour.'",
      grade: "Sahih — the core narration is agreed upon by Bukhari & Muslim; the riba and renamed-intoxicants narrations are also widely graded sound, with some variation between the several parallel wordings",
      sourceUrl: "https://sunnah.com/search?q=knowledge+taken+away+ignorance+prevail+alcohol+adultery+widespread",
    },
    claim:
      "Cited as an early, accurate forecast of long-term moral and social decline — increasing substance use, sexual immorality, financial dishonesty through interest-based finance, and a general erosion of public trust.",
    context:
      "Warnings of moral decline in the 'last days' are a recurring theme across religious traditions generally, not distinctive to this hadith cluster — comparable warnings appear, for instance, in 2 Timothy 3:1-5 of the New Testament. Every generation's moralists have also tended to perceive their own era as being in decline relative to an idealized past, which makes broad claims of this kind difficult to treat as a specific, falsifiable prediction rather than a recurring rhetorical pattern that will always find supporting examples somewhere.",
  },
  {
    id: "muhammad-modern-communication",
    category: "unfulfilled",
    title: "Objects That Speak",
    source: {
      reference: "Jami' al-Tirmidhi, with related narrations in Musnad Ahmad",
      text: "The Hour will not be established until a man's whip [or the strap of his sandal] speaks to him and tells him what his family did after he left.",
      grade: "The core narration is reported with a chain some hadith scholars grade hasan; parallel wordings about possessions 'informing' their owners vary in strength across collections",
      sourceUrl: "https://sunnah.com/search?q=whip+strap+of+sandal+speaks+to+him+what+his+family+did",
    },
    claim:
      "Popularly read today as an anticipation of mobile phones and instant long-distance communication — being informed in real time of events happening elsewhere.",
    context:
      "The hadith describes an inanimate object literally speaking, which has not occurred; a phone conveying a message someone else typed or spoke is a different mechanism from an object independently reporting what it 'witnessed.' Classical commentators, writing many centuries before telecommunications existed, read this as one of several supernatural signs marking the Hour's approach — a suspension of the ordinary order of things — rather than a forecast of a future but naturally explicable technology.",
  },
  {
    id: "muhammad-clothed-yet-naked",
    category: "unfulfilled",
    title: "\"Clothed, Yet Naked\"",
    source: {
      reference: "Sahih Muslim",
      text: "...women who are clothed yet naked, who tempt and are tempted, their heads like the swaying humps of camels — they will not enter Paradise...",
      grade: "Sahih — Muslim",
      sourceUrl: "https://sunnah.com/search?q=women+clothed+yet+naked+heads+like+humps+of+camels",
    },
    claim:
      "Popularly read as describing modern clothing trends — garments that technically cover the body while still being considered immodest, through tightness or sheerness — with 'hair like camel humps' read as anticipating certain elaborate or voluminous hairstyles.",
    context:
      "Classical commentators read 'clothed yet naked' as describing clothing present but not achieving modest covering, a description broad enough to fit many different eras' fashions rather than one specific to the present; the 'camel hump' hairstyle description is similarly read by different commentators in more than one way — some tie it to hair piled up in a particular exaggerated shape, others to a headscarf tied in a way that creates a raised shape — so tying it to any one specific modern style means choosing among several plausible readings rather than following one obvious meaning.",
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
