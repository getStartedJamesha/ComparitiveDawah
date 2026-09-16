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
    group: "Creation",
    title: "Two Orders of Creation",
    description:
      "Genesis 1 and Genesis 2 narrate creation in different sequences: in the first, plants, then animals, then humankind (male and female together) are made; in the second, the man is formed first, then plants, then animals, then the woman.",
    passages: [
      {
        reference: "Genesis 1:11-27",
        text: "And God said, Let the earth bring forth grass, the herb yielding seed... God made the beast of the earth after his kind... So God created man in his own image... male and female created he them.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+1%3A11-27&version=KJV",
      },
      {
        reference: "Genesis 2:7,9,19,21-22",
        text: "And the LORD God formed man of the dust of the ground... And out of the ground made the LORD God to grow every tree... And out of the ground the LORD God formed every beast of the field... and the rib, which the LORD God had taken from man, made he a woman.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+2%3A7%2C9%2C19%2C21-22&version=KJV",
      },
    ],
    note: "Long discussed in biblical scholarship; harmonists read Genesis 2 as a topical zoom-in on day six rather than a second timeline, while source-critical scholars attribute the two accounts to different underlying traditions (commonly labelled P and J).",
  },
  {
    id: "christianity-light-before-sun",
    religionId: "christianity",
    group: "Creation",
    title: "Light Before the Sun",
    description:
      "Light, day, and night are created and named on the first day of creation, while the sun and moon — the sources of daylight in a plain reading — aren't created until the fourth day.",
    passages: [
      {
        reference: "Genesis 1:3-5",
        text: "And God said, Let there be light: and there was light... And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+1%3A3-5&version=KJV",
      },
      {
        reference: "Genesis 1:14-19",
        text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night... And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also... And the evening and the morning were the fourth day.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+1%3A14-19&version=KJV",
      },
    ],
    note: "Some commentators, ancient and modern, read 'light' on day one as distinct from the sun's light — a primordial light later associated with God's own glory rather than a physical light source. Others read Genesis 1 as structured in two matching halves (days 1-3 form the domains of light/dark, sky/sea, and land; days 4-6 fill each domain with its inhabitants: sun/moon/stars, birds/fish, land animals/humans), making the sequence a literary framework rather than a strict chronological claim about astronomy.",
  },
  {
    id: "christianity-genealogy",
    religionId: "christianity",
    group: "Birth & Genealogy",
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
    id: "christianity-nativity-chronology",
    religionId: "christianity",
    group: "Birth & Genealogy",
    title: "When Was Jesus Born?",
    description:
      "Matthew places Jesus's birth in the reign of Herod the Great, conventionally dated to have died in 4 BCE, with the family fleeing to Egypt to escape him; Luke ties the birth to a census under the Syrian governor Quirinius, whose only historically attested governorship and census took place around 6 CE — roughly a decade later.",
    passages: [
      {
        reference: "Matthew 2:1,13-15",
        text: "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king... Arise, and take the young child and his mother, and flee into Egypt, and be thou there until I bring thee word: for Herod will seek the young child to destroy him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+2%3A1%2C13-15&version=KJV",
      },
      {
        reference: "Luke 2:1-7",
        text: "And it came to pass in those days, that there went out a decree from Caesar Augustus, that all the world should be taxed. (And this taxing was first made when Cyrenius was governor of Syria.)",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+2%3A1-7&version=KJV",
      },
    ],
    note: "One of the more discussed chronological puzzles in New Testament scholarship. Proposed harmonizations include an earlier, otherwise unattested census, or an earlier term of governance by Quirinius not recorded elsewhere; other scholars, including some who are otherwise traditionalist, conclude the two nativity accounts were composed from independent, imprecise chronological traditions rather than a single reconcilable timeline. The Roman-era historian Josephus is the primary ancient source dating Quirinius's census to 6 CE.",
  },
  {
    id: "christianity-judas-death",
    religionId: "christianity",
    group: "The Death of Judas",
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
    id: "christianity-empty-tomb",
    religionId: "christianity",
    group: "The Resurrection",
    title: "The Resurrection Accounts: How Many Angels?",
    description:
      "The four Gospels differ on how many heavenly figures the women encountered at the tomb, and how they're described: one angel in Matthew, a 'young man' in Mark, two men in Luke, and two angels in John.",
    passages: [
      {
        reference: "Matthew 28:2,5",
        text: "...the angel of the Lord descended from heaven... And the angel answered and said unto the women, Fear not ye.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A2%2C5&version=KJV",
      },
      {
        reference: "Mark 16:5",
        text: "And entering into the sepulchre, they saw a young man sitting on the right side, clothed in a long white garment; and they were affrighted.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+16%3A5&version=KJV",
      },
      {
        reference: "Luke 24:4",
        text: "...behold, two men stood by them in shining garments.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A4&version=KJV",
      },
      {
        reference: "John 20:12",
        text: "And seeth two angels in white sitting, the one at the head, and the other at the feet, where the body of Jesus had lain.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+20%3A12&version=KJV",
      },
    ],
    note: "Harmonists suggest one figure spoke while a second was present but silent, and that Mark's 'young man' is the same kind of being described more plainly elsewhere as an angel. Critical scholars point to the differing counts and descriptions as evidence the resurrection narratives circulated independently before being written down.",
  },
  {
    id: "christianity-resurrection-women-count",
    religionId: "christianity",
    group: "The Resurrection",
    title: "How Many Women Came to the Tomb?",
    description:
      "The four Gospels list a different number and combination of women arriving at the tomb on the resurrection morning.",
    passages: [
      {
        reference: "Matthew 28:1",
        text: "In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A1&version=KJV",
      },
      {
        reference: "Mark 16:1",
        text: "And when the sabbath was past, Mary Magdalene, and Mary the mother of James, and Salome, had bought sweet spices, that they might come and anoint him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+16%3A1&version=KJV",
      },
      {
        reference: "Luke 24:10",
        text: "It was Mary Magdalene, and Joanna, and Mary the mother of James, and other women that were with them, which told these things unto the apostles.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A10&version=KJV",
      },
      {
        reference: "John 20:1",
        text: "The first day of the week cometh Mary Magdalene early, when it was yet dark, unto the sepulchre, and seeth the stone taken away from the sepulchre.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+20%3A1&version=KJV",
      },
    ],
    note: "Harmonists often read John as narrowing in on Mary Magdalene's part in a larger group implied just after — she says 'we do not know' (plural) in John 20:2. Critical scholars instead see the differing lists as evidence the resurrection tradition developed through separate accounts before being written down.",
  },
  {
    id: "christianity-first-witness",
    religionId: "christianity",
    group: "The Resurrection",
    title: "Who Saw the Risen Jesus First?",
    description:
      "The Gospels and Paul's early creedal summary differ on who Jesus appeared to first after the resurrection: the women, Mary Magdalene alone, or Peter.",
    passages: [
      {
        reference: "Matthew 28:9",
        text: "And as they went to tell his disciples, behold, Jesus met them, saying, All hail. And they came and held him by the feet, and worshipped him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A9&version=KJV",
      },
      {
        reference: "John 20:14-17",
        text: "...she turned herself back, and saw Jesus standing, and knew not that it was Jesus... Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni...",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+20%3A14-17&version=KJV",
      },
      {
        reference: "Luke 24:34; 1 Corinthians 15:5",
        text: "Saying, The Lord is risen indeed, and hath appeared to Simon... And that he was seen of Cephas, then of the twelve.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A34%3B+1+Corinthians+15%3A5&version=KJV",
      },
    ],
    note: "Harmonists usually propose a sequence — Mary Magdalene first, then Peter, then the wider group of women — since none of the texts explicitly claims to give an exhaustive, ordered list. Notably, 1 Corinthians 15:3-8, often considered one of the earliest written creedal summaries in the New Testament, does not mention the women's testimony at all, which some scholars connect to the low evidentiary status given to women's testimony in that era.",
  },
  {
    id: "christianity-meet-where",
    religionId: "christianity",
    group: "The Resurrection",
    title: "Where Did Jesus Tell the Disciples to Go?",
    description:
      "Matthew has the risen Jesus direct the disciples to meet him in Galilee, and the Eleven do go there; Luke and Acts instead have Jesus instruct them to stay in Jerusalem until Pentecost.",
    passages: [
      {
        reference: "Matthew 28:10,16",
        text: "Then said Jesus unto them, Be not afraid: go tell my brethren that they go into Galilee, and there shall they see me... Then the eleven disciples went away into Galilee, into a mountain where Jesus had appointed them.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A10%2C16&version=KJV",
      },
      {
        reference: "Luke 24:49; Acts 1:4",
        text: "And, behold, I send the promise of my Father upon you: but tarry ye in the city of Jerusalem, until ye be endued with power from on high... commanded them that they should not depart from Jerusalem, but wait for the promise of the Father.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A49%3B+Acts+1%3A4&version=KJV",
      },
    ],
    note: "Harmonists typically place a Galilee appearance and a return to Jerusalem within the roughly forty days Acts 1:3 describes between resurrection and ascension, treating the instructions as sequential rather than contradictory. Others note that Luke's Gospel, unlike Matthew's, records no resurrection appearances outside the Jerusalem area at all (even the Emmaus road, Luke 24:13, is nearby) — read by some scholars as a distinct geographic and theological emphasis in Luke-Acts centering the story on Jerusalem.",
  },
  {
    id: "christianity-passover-timing",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "Was the Last Supper the Passover Meal?",
    description:
      "The Synoptic Gospels describe the Last Supper itself as the Passover meal; John instead places Jesus's crucifixion at the time the Passover lambs were being prepared, implying the meal the night before was not yet Passover.",
    passages: [
      {
        reference: "Luke 22:7-8",
        text: "Then came the day of unleavened bread, when the passover must be killed. And he sent Peter and John, saying, Go and prepare us the passover, that we may eat.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+22%3A7-8&version=KJV",
      },
      {
        reference: "John 19:14",
        text: "And it was the preparation of the passover, and about the sixth hour: and he saith unto the Jews, Behold your King!",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+19%3A14&version=KJV",
      },
    ],
    note: "A long-debated chronological difference. Proposed harmonizations include the possibility that different groups in first-century Judea followed different calendars and so observed Passover on different days that year, or that John's 'preparation' means the Friday of Passover week generally rather than the specific day before Passover began. Most scholars agree the two timelines, read at face value, describe different days for the same events.",
  },
  {
    id: "christianity-last-words",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "Jesus's Last Words",
    description:
      "Each Gospel records a different final utterance from Jesus on the cross, and no single Gospel records more than one.",
    passages: [
      {
        reference: "Matthew 27:46; Mark 15:34",
        text: "Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A46%3B+Mark+15%3A34&version=KJV",
      },
      {
        reference: "Luke 23:46",
        text: "And when Jesus had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+23%3A46&version=KJV",
      },
      {
        reference: "John 19:30",
        text: "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+19%3A30&version=KJV",
      },
    ],
    note: "Traditional harmonizations read these as a sequence of several sayings across the hours of the crucifixion — the devotional 'Seven Last Words' tradition combines all of them, plus two more from Luke and John, into one timeline, rather than reading any one Gospel as claiming to report Jesus's only words. Critical scholars more often read each Gospel's chosen saying as reflecting that author's particular theological portrait of Jesus's death: abandonment, composed trust, or triumphant completion.",
  },
  {
    id: "christianity-father-son",
    religionId: "christianity",
    group: "The Nature of Christ",
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
    id: "christianity-seeing-god",
    religionId: "christianity",
    group: "The Nature of Christ",
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
    id: "christianity-faith-works",
    religionId: "christianity",
    group: "Doctrine",
    title: "Justified by Faith, or by Works?",
    description:
      "Paul states that a person is justified by faith apart from works of the law, while James states plainly that a person is justified by works and not by faith alone — using strikingly similar vocabulary to reach what looks like the opposite conclusion.",
    passages: [
      {
        reference: "Romans 3:28; Ephesians 2:8-9",
        text: "Therefore we conclude that a man is justified by faith without the deeds of the law... For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Romans+3%3A28%3B+Ephesians+2%3A8-9&version=KJV",
      },
      {
        reference: "James 2:24",
        text: "Ye see then how that by works a man is justified, and not by faith only.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=James+2%3A24&version=KJV",
      },
    ],
    note: "This tension shaped major currents of Christian theology, notably the Reformation-era dispute between Martin Luther — who centered 'faith alone' and was famously uneasy with the book of James, reportedly calling it 'an epistle of straw' — and Catholic theology. A common harmonizing reading takes Paul and James as addressing different questions: Paul opposing reliance on Mosaic ritual law for initial justification, James opposing a merely intellectual 'faith' with no accompanying action — both using the same example of Abraham (Genesis 15:6) to make what they present as complementary rather than contradictory points.",
  },
  {
    id: "christianity-generation-prophecy",
    religionId: "christianity",
    group: "Doctrine",
    title: "\"Some Standing Here Will Not Taste Death\"",
    description:
      "Jesus states that some of his listeners would not die before seeing him come in his kingdom; a later New Testament letter already addresses believers' doubts about why that promised coming had not yet visibly occurred.",
    passages: [
      {
        reference: "Matthew 16:28",
        text: "Verily I say unto you, There be some standing here, which shall not taste of death, till they see the Son of man coming in his kingdom.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+16%3A28&version=KJV",
      },
      {
        reference: "2 Peter 3:3-4",
        text: "Knowing this first, that there shall come in the last days scoffers... And saying, Where is the promise of his coming? for since the fathers fell asleep, all things continue as they were from the beginning of the creation.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=2+Peter+3%3A3-4&version=KJV",
      },
    ],
    note: "Genuinely debated within Christianity today, not just by outside critics. Preterist interpreters read the promise as fulfilled within that generation — in the Transfiguration that follows immediately in all three Synoptics, in Pentecost, or in Jerusalem's destruction in 70 CE. Futurist interpreters read it as still pending, referring to a yet-future return. 2 Peter 3:8-9, immediately after the verses cited here, addresses the delay theologically ('one day is with the Lord as a thousand years'), showing the question was already alive in the early church.",
  },

  // ---------------------------------------------------------------- JUDAISM
  {
    id: "judaism-creation-order",
    religionId: "judaism",
    group: "Creation",
    title: "Two Orders of Creation",
    description:
      "As in the Christian Old Testament (the same Torah text), Genesis 1 and Genesis 2 present creation in different sequences.",
    passages: [
      {
        reference: "Genesis 1:11-27",
        text: "And God said: 'Let the earth put forth grass'... God made the beast of the earth after its kind... male and female created He them.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.1.11-27",
      },
      {
        reference: "Genesis 2:7,9,19,21-22",
        text: "Then the LORD God formed man of the dust of the ground... And out of the ground made the LORD God to grow every tree... And out of the ground the LORD God formed every beast of the field... and the rib, which the LORD God had taken from the man, made He a woman.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.2.7-22",
      },
    ],
    note: "Rabbinic commentary (e.g. Rashi) reads Genesis 2 as elaborating on the sixth day of Genesis 1 rather than contradicting it; source-critical scholarship instead attributes the two chapters to distinct literary traditions.",
  },
  {
    id: "judaism-light-before-sun",
    religionId: "judaism",
    group: "Creation",
    title: "Light Before the Sun",
    description:
      "Light, day, and night are created and named on the first day, while the sun, moon, and stars aren't created until the fourth day.",
    passages: [
      {
        reference: "Genesis 1:3-5",
        text: "And God said: 'Let there be light.' And there was light. And God saw the light, that it was good; and God divided the light from the darkness. And God called the light Day, and the darkness He called Night.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.1.3-5",
      },
      {
        reference: "Genesis 1:14-19",
        text: "And God said: 'Let there be lights in the firmament of the heaven to divide the day from the night'... And God made the two great lights: the greater light to rule the day, and the lesser light to rule the night; and the stars.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.1.14-19",
      },
    ],
    note: "Midrashic sources (e.g. Genesis Rabbah) address this directly with the concept of an 'or ha-ganuz' — a primordial light created on day one, distinct from and hidden away before the sun's light on day four — treating the sequence as intentional rather than an oversight needing correction.",
  },
  {
    id: "judaism-census-instigator",
    religionId: "judaism",
    group: "The Census",
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
    id: "judaism-census-numbers",
    religionId: "judaism",
    group: "The Census",
    title: "How Many Men Did the Census Count?",
    description:
      "Samuel and Chronicles report different totals for the same census: Samuel counts 800,000 swordsmen in Israel and 500,000 in Judah, while Chronicles counts 1,100,000 in Israel and 470,000 in Judah.",
    passages: [
      {
        reference: "II Samuel 24:9",
        text: "And Joab gave up the sum of the numbering of the people unto the king; and there were in Israel eight hundred thousand valiant men that drew the sword; and the men of Judah were five hundred thousand men.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.24.9",
      },
      {
        reference: "I Chronicles 21:5",
        text: "And Joab gave the sum of the numbering of the people unto David. And all they of Israel were a thousand thousand and a hundred thousand men that drew sword; and Judah was four hundred and threescore and ten thousand men that drew sword.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Chronicles.21.5",
      },
    ],
    note: "Commonly attributed, like the differing famine lengths recorded for the same event, to errors introduced during centuries of scribal copying of numbers — ancient Hebrew numeral notation was particularly prone to this. Some harmonists instead propose the two books count different subsets of the army, such as including or excluding certain divisions mentioned elsewhere in Chronicles.",
  },
  {
    id: "judaism-famine-years",
    religionId: "judaism",
    group: "The Census",
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
  {
    id: "judaism-horse-stalls",
    religionId: "judaism",
    group: "The Census",
    title: "How Many Stalls Did Solomon Have?",
    description:
      "Kings records Solomon owning 40,000 horse stalls; Chronicles, describing the same reign, records 4,000 — a tenfold difference, while both agree on the number of horsemen (12,000).",
    passages: [
      {
        reference: "I Kings 4:26",
        text: "And Solomon had forty thousand stalls of horses for his chariots, and twelve thousand horsemen.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Kings.4.26",
      },
      {
        reference: "II Chronicles 9:25",
        text: "And Solomon had four thousand stalls for horses and chariots, and twelve thousand horsemen...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Chronicles.9.25",
      },
    ],
    note: "Widely regarded, including by many traditional and academic commentators alike, as a straightforward scribal transmission error, given how closely the two accounts otherwise agree — right down to the matching 12,000 horsemen. Older harmonizations occasionally proposed the numbers describe different units (e.g. stalls housing several horses each), though this is a minority reading.",
  },
  {
    id: "judaism-does-god-change",
    religionId: "judaism",
    group: "God's Nature",
    title: "Does God Change His Mind?",
    description:
      "Numbers and 1 Samuel both deny that God is capable of change or regret, while Genesis, Exodus, and Jonah each describe God relenting from a stated course of action.",
    passages: [
      {
        reference: "Numbers 23:19",
        text: "God is not a man, that He should lie; neither the son of man, that He should repent.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Numbers.23.19",
      },
      {
        reference: "I Samuel 15:29",
        text: "And also the Glory of Israel will not lie nor repent; for He is not a man, that He should repent.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Samuel.15.29",
      },
      {
        reference: "Genesis 6:6",
        text: "And it repented the LORD that He had made man on the earth, and it grieved Him at His heart.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.6.6",
      },
      {
        reference: "Jonah 3:10",
        text: "And God saw their works, that they turned from their evil way; and God repented of the evil, which He said He would do unto them; and He did it not.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Jonah.3.10",
      },
    ],
    note: "The tension is tight enough to appear within a single chapter: 1 Samuel 15:29 denies God can repent in the very story where God is twice said to 'repent' of having made Saul king (verses 11 and 35 of the same chapter). Commentators typically read this 'repenting' language as anthropomorphic accommodation — describing a real change in outcome, contingent on human action, rather than a change in God's essential nature, knowledge, or long-term plan.",
  },
  {
    id: "judaism-seeing-god",
    religionId: "judaism",
    group: "God's Nature",
    title: "Can God Be Seen?",
    description:
      "Exodus states that no one can see God's face and live, yet the same book describes God speaking to Moses face to face, and Genesis describes Jacob seeing God face to face.",
    passages: [
      {
        reference: "Exodus 33:20",
        text: "And He said: 'Thou canst not see My face, for man shall not see Me and live.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.33.20",
      },
      {
        reference: "Exodus 33:11",
        text: "And the LORD spoke unto Moses face to face, as a man speaketh unto his friend...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.33.11",
      },
      {
        reference: "Genesis 32:31",
        text: "And Jacob called the name of the place Peniel: 'for I have seen God face to face, and my life is preserved.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.32.31",
      },
    ],
    note: "Commentators generally distinguish a vision, direct verbal communication, or partial manifestation (permitted, and idiomatically called 'face to face') from seeing God's essence directly (denied) — Jewish tradition has long debated exactly what 'face to face' means in each of these cases, and exactly what Jacob 'saw.'",
  },

  // --------------------------------------------------------------- HINDUISM
  {
    id: "hinduism-one-or-many",
    religionId: "hinduism",
    group: "Philosophy",
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
    group: "Philosophy",
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
    group: "Philosophy",
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
    group: "Philosophy",
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
