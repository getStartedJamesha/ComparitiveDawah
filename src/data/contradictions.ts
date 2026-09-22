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
    note: "Common harmonizations propose that Luke traces Mary's line (with Joseph as son-in-law to Heli) or that one genealogy is legal/royal while the other is biological — neither reading is stated explicitly in the text itself. The genealogies also differ substantially in their full lists of names and generation counts (compare Matthew 1:17's summary with Luke 3:23-38), which the same harmonizations are generally taken to address as well.",
  },
  {
    id: "christianity-shealtiel-father",
    religionId: "christianity",
    group: "Birth & Genealogy",
    title: "Shealtiel's Father: Jeconiah, or Neri?",
    description:
      "Both genealogies place Zerubbabel's father as Shealtiel, but name different fathers for Shealtiel himself: Matthew has Jeconiah (Jechonias), while Luke has Neri — one of several individual name discrepancies within genealogies that otherwise briefly share the same names at this point.",
    passages: [
      {
        reference: "Matthew 1:12",
        text: "And after they were brought to Babylon, Jechonias begat Salathiel; and Salathiel begat Zorobabel;",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+1%3A12&version=KJV",
      },
      {
        reference: "Luke 3:27",
        text: "...which was the son of Salathiel, which was the son of Neri,",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+3%3A27&version=KJV",
      },
    ],
    note: "A smaller, more technical example of the broader genealogy divergence, but a notable one since it falls at a point where the two lists otherwise briefly converge on the same names (Shealtiel, Zerubbabel) after diverging earlier at David's sons. Harmonists sometimes propose a levirate marriage (compare Deuteronomy 25:5-6) or legal adoption explains the differing father named, though the text doesn't state this explicitly.",
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
    id: "christianity-holy-family-location",
    religionId: "christianity",
    group: "Birth & Genealogy",
    title: "Where Did the Holy Family Live?",
    description:
      "Matthew's narrative reads as though Bethlehem was the family's original home — the birth, the magi visiting 'the house' (2:11), and the flight to Egypt are followed by a deliberate, fearful decision to relocate to Nazareth only afterward (2:22-23); Luke instead has the family living in Nazareth from before the birth, traveling to Bethlehem only for the census, and returning to Nazareth within weeks, with no mention of Egypt at all.",
    passages: [
      {
        reference: "Matthew 2:22-23",
        text: "But when he heard that Archelaus did reign in Judaea in the room of his father Herod, he was afraid to go thither: notwithstanding, being warned of God in a dream, he turned aside into the parts of Galilee: And he came and dwelt in a city called Nazareth.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+2%3A22-23&version=KJV",
      },
      {
        reference: "Luke 2:4,39",
        text: "And Joseph also went up from Galilee, out of the city of Nazareth, into Judaea, unto the city of David, which is called Bethlehem... And when they had performed all things according to the law of the Lord, they returned into Galilee, to their own city Nazareth.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+2%3A4%2C39&version=KJV",
      },
    ],
    note: "Harmonists combine the two by inserting Matthew's Egypt narrative into a gap in Luke's account — for instance, after the Temple presentation in Luke 2:22-39 (traditionally 40 days after birth) but before the family's return to Nazareth described in that same verse. This requires reading Luke 2:39's 'returned into Galilee' as compressed, skipping over the flight to Egypt it doesn't mention, similar to how Luke-Acts elsewhere summarizes events without flagging every time gap.",
  },
  {
    id: "christianity-blind-men-jericho",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "How Many Blind Men Were Healed at Jericho?",
    description:
      "Matthew describes Jesus healing two unnamed blind men as he left Jericho; Mark and Luke describe a single named blind man, Bartimaeus, healed in the same setting.",
    passages: [
      {
        reference: "Matthew 20:29-30",
        text: "And as they departed from Jericho, a great multitude followed him. And, behold, two blind men sitting by the way side, when they heard that Jesus passed by, cried out, saying, Have mercy on us, O Lord, thou son of David.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+20%3A29-30&version=KJV",
      },
      {
        reference: "Mark 10:46",
        text: "And they came to Jericho: and as he went out of Jericho with his disciples and a great number of people, blind Bartimaeus, the son of Timaeus, sat by the highway side begging.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+10%3A46&version=KJV",
      },
    ],
    note: "A common harmonization simply combines the accounts: two blind men were healed, and Mark and Luke chose to name and focus on the one — Bartimaeus — who was apparently known to their audience. Critical scholars more often read this, like other numeric differences among the Synoptic miracle stories, as evidence of independent oral traditions later shaped differently by each author. Luke adds a further wrinkle by placing the healing as Jesus approached Jericho rather than left it (Luke 18:35).",
  },
  {
    id: "christianity-temple-cleansing-timing",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "When Did Jesus Cleanse the Temple?",
    description:
      "Matthew, Mark, and Luke place Jesus's temple cleansing during the final week of his ministry, shortly before the crucifixion; John places a very similar episode near the very beginning of Jesus's public ministry, years earlier by John's own chronology.",
    passages: [
      {
        reference: "Matthew 21:12-13",
        text: "And Jesus went into the temple of God, and cast out all them that sold and bought in the temple... and said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+21%3A12-13&version=KJV",
      },
      {
        reference: "John 2:13-16",
        text: "And the Jews' passover was at hand, and Jesus went up to Jerusalem, And found in the temple those that sold oxen and sheep and doves, and the changers of money sitting: And when he had made a scourge of small cords, he drove them all out of the temple...",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+2%3A13-16&version=KJV",
      },
    ],
    note: "Some harmonists propose two separate incidents, one early (John) and one late (the Synoptics) — the accounts differ in some details, including John's mention of a whip of cords and a different complaint ('a house of merchandise' rather than 'a den of thieves'). Most critical scholars instead conclude it was a single historical event that John relocated to the start of his narrative for theological and structural reasons; John's Gospel is broadly acknowledged, even by more traditional scholars, to prioritize thematic over strictly chronological arrangement in various places.",
  },
  {
    id: "christianity-jairus-daughter",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "Jairus's Daughter: Dead, or Dying?",
    description:
      "Matthew's account has Jairus telling Jesus his daughter has already died when he first approaches; Mark and Luke have her still dying at that point, with news of her death arriving only later, while Jesus is en route.",
    passages: [
      {
        reference: "Matthew 9:18",
        text: "While he spake these things unto them, behold, there came a certain ruler, and worshipped him, saying, My daughter is even now dead: but come and lay thy hand upon her, and she shall live.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+9%3A18&version=KJV",
      },
      {
        reference: "Mark 5:23",
        text: "And besought him greatly, saying, My little daughter lieth at the point of death: I pray thee, come and lay thy hands on her, that she may be healed.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+5%3A23&version=KJV",
      },
    ],
    note: "Widely regarded as a straightforward example of Matthew's frequent compression of narratives told in more detail by Mark and Luke — Matthew's version of this story is noticeably shorter overall, and is commonly read as skipping ahead to the outcome the father feared rather than narrating the two-stage message (dying, then dead) that Mark and Luke both include. This kind of telescoping is a well-documented feature of how Matthew adapts Markan material elsewhere too.",
  },
  {
    id: "christianity-disciples-staffs",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "Were the Disciples Allowed to Carry a Staff, or Sandals?",
    description:
      "Sending out the Twelve, Mark's Jesus permits them to carry a staff and directs them to wear sandals; Matthew's version of the same instructions specifically forbids taking a staff, and also forbids shoes.",
    passages: [
      {
        reference: "Mark 6:8-9",
        text: "And commanded them that they should take nothing for their journey, save a staff only; no scrip, no bread, no money in their purse: But be shod with sandals; and not put on two coats.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+6%3A8-9&version=KJV",
      },
      {
        reference: "Matthew 10:9-10",
        text: "Provide neither gold, nor silver, nor brass in your purses, Nor scrip for your journey, neither two coats, neither shoes, nor yet staves: for the workman is worthy of his meat.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+10%3A9-10&version=KJV",
      },
    ],
    note: "A minor but frequently noted difference between otherwise closely parallel instructions. Harmonists sometimes distinguish acquiring a staff or sandals (Matthew's verb can carry the sense 'provide/acquire') from already carrying ones they owned (Mark's wording) — don't go out of your way to get one, but what you already have is fine. Source critics more often read it as ordinary variation in how Matthew and Mark each recorded or adapted a shared underlying tradition, without assuming either is being maximally precise about every detail of the instruction's wording.",
  },
  {
    id: "christianity-fig-tree",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "The Fig Tree: Withered at Once, or Overnight?",
    description:
      "Matthew narrates Jesus cursing a fig tree and the disciples marveling that it withered 'presently' (immediately); Mark splits the same episode across two days — Jesus curses the tree one morning, and the disciples only notice it withered when passing by the next morning, with the temple-cleansing episode narrated in between.",
    passages: [
      {
        reference: "Matthew 21:19-20",
        text: "And when he saw a fig tree in the way, he came to it, and found nothing thereon, but leaves only, and said unto it, Let no fruit grow on thee henceforward for ever. And presently the fig tree withered away. And when the disciples saw it, they marvelled, saying, How soon is the fig tree withered away!",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+21%3A19-20&version=KJV",
      },
      {
        reference: "Mark 11:20-21",
        text: "And in the morning, as they passed by, they saw the fig tree dried up from the roots. And Peter calling to remembrance saith unto him, Master, behold, the fig tree which thou cursedst is withered away.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+11%3A20-21&version=KJV",
      },
    ],
    note: "A commonly cited example of Matthew's tendency to compress Markan material (see also Jairus's daughter, above) — narrating the visible result immediately after the cause, without necessarily claiming the withering was instantaneous rather than simply unnoticed until the next day. Both accounts agree on the substance: Jesus cursed the tree, and it withered as a result.",
  },
  {
    id: "christianity-centurion",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "Did the Centurion Speak to Jesus Directly?",
    description:
      "Matthew narrates the centurion approaching Jesus directly and speaking to him in person; Luke has the centurion send Jewish elders, and later friends, as intermediaries, with no direct meeting between Jesus and the centurion narrated at all.",
    passages: [
      {
        reference: "Matthew 8:5-6",
        text: "And when Jesus was entered into Capernaum, there came unto him a centurion, beseeching him, And saying, Lord, my servant lieth at home sick of the palsy, grievously tormented.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+8%3A5-6&version=KJV",
      },
      {
        reference: "Luke 7:3-6",
        text: "And when he heard of Jesus, he sent unto him the elders of the Jews, beseeching him that he would come and heal his servant... Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+7%3A3-6&version=KJV",
      },
    ],
    note: "A common harmonization reads Matthew as compressing the story for narrative economy — attributing the message to the centurion himself, since it was made and delivered at his request and in his name, much as a person today might be said to have 'told' someone something a messenger relayed on their behalf. This kind of compression, attributing an intermediary's action directly to the person who sent them, is a recognized feature of ancient biographical writing generally, not unique to Matthew.",
  },
  {
    id: "christianity-twelve-disciples",
    religionId: "christianity",
    group: "Jesus's Ministry",
    title: "Thaddaeus, or Judas Son of James?",
    description:
      "Matthew's (and Mark's) list of the Twelve includes 'Lebbaeus, whose surname was Thaddaeus'; Luke's list — in both his Gospel and the book of Acts — has no Thaddaeus at all, listing instead 'Judas the brother of James' in roughly the same position.",
    passages: [
      {
        reference: "Matthew 10:3",
        text: "Philip, and Bartholomew; Thomas, and Matthew the publican; James the son of Alphaeus, and Lebbaeus, whose surname was Thaddaeus;",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+10%3A3&version=KJV",
      },
      {
        reference: "Luke 6:15-16",
        text: "Matthew and Thomas, James the son of Alphaeus, and Simon called Zelotes, And Judas the brother of James, and Judas Iscariot, which also was the traitor.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+6%3A15-16&version=KJV",
      },
    ],
    note: "Widely harmonized by proposing Thaddaeus and 'Judas the brother/son of James' (also called Jude) are the same person known by more than one name, similar to how Simon Peter, Matthew/Levi, and Nathanael/Bartholomew are each referred to by different names across the Gospels. No text explicitly states this identification, but it's the standard traditional reading, reflected in how later Christian tradition refers to 'Jude Thaddaeus' as one apostle.",
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
    id: "christianity-field-of-blood",
    religionId: "christianity",
    group: "The Death of Judas",
    title: "Who Bought the Field of Blood?",
    description:
      "Matthew has the chief priests use Judas's returned silver to buy a burial field, since Judas himself was already dead; Acts describes Judas himself acquiring the field with 'the reward of iniquity.' Both accounts agree the field became known as 'the Field of Blood,' but seemingly for different reasons.",
    passages: [
      {
        reference: "Matthew 27:6-8",
        text: "And the chief priests took the silver pieces, and said, It is not lawful for to put them into the treasury, because it is the price of blood. And they took counsel, and bought with them the potter's field, to bury strangers in. Wherefore that field was called, The field of blood, unto this day.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A6-8&version=KJV",
      },
      {
        reference: "Acts 1:18-19",
        text: "Now this man purchased a field with the reward of iniquity... And it was known unto all the dwellers at Jerusalem; insomuch as that field is called in their proper tongue, Aceldama, that is to say, The field of blood.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Acts+1%3A18-19&version=KJV",
      },
    ],
    note: "Harmonists typically read Acts as describing the field as Judas's purchase in an indirect, legal sense — the money was his, so the field bought with it is attributed to him, much as an estate's later purchase might be attributed to the person whose money funded it. This connects to the differing accounts of Judas's death above: Matthew has the priests acting after his death, while Acts' phrasing has sometimes been read as implying Judas was still alive to 'purchase' the field himself.",
  },
  {
    id: "christianity-carried-cross",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "Who Carried the Cross?",
    description:
      "The Synoptic Gospels describe Simon of Cyrene being compelled to carry Jesus's cross; John describes Jesus carrying his own cross, with no mention of Simon.",
    passages: [
      {
        reference: "Matthew 27:32",
        text: "And as they came out, they found a man of Cyrene, Simon by name: him they compelled to bear his cross.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A32&version=KJV",
      },
      {
        reference: "John 19:17",
        text: "And he bearing his cross went forth into a place called the place of a skull, which is called in the Hebrew Golgotha.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+19%3A17&version=KJV",
      },
    ],
    note: "Harmonists commonly propose a sequence: Jesus initially carried his own cross, as John records, and Simon was conscripted partway to the execution site when Jesus, weakened from the flogging all four Gospels describe, could no longer continue — a reading neither Gospel states explicitly but that isn't excluded by either. Critical scholars more often read John's silence about Simon as a deliberate theological emphasis on Jesus's sovereign control over his own death, a recurring Johannine theme (compare John 10:18).",
  },
  {
    id: "christianity-crucifixion-time",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "What Time Was Jesus Crucified?",
    description:
      "Mark records Jesus being crucified at the third hour (roughly 9am); John's timeline still has Pilate presenting Jesus for judgment at about the sixth hour (roughly noon), with the crucifixion following afterward — several hours apart for the same event.",
    passages: [
      {
        reference: "Mark 15:25",
        text: "And it was the third hour, and they crucified him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+15%3A25&version=KJV",
      },
      {
        reference: "John 19:14-16",
        text: "And it was the preparation of the passover, and about the sixth hour: and he saith unto the Jews, Behold your King!... Then delivered he him therefore unto them to be crucified.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+19%3A14-16&version=KJV",
      },
    ],
    note: "Proposed harmonizations include the possibility that Mark and John used different hour-counting conventions (Roman civil time from midnight versus Jewish reckoning from sunrise), which would shift John's 'sixth hour' earlier. Other scholars read this as one of the harder Gospel chronological discrepancies to fully resolve, and note that both Gospels likely intend approximate, symbolically rounded hours — the third, sixth, and ninth hours mark regular prayer times — rather than precise clock time.",
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
    id: "christianity-robe-color",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "The Robe: Scarlet, or Purple?",
    description:
      "Matthew describes the soldiers mocking Jesus by dressing him in a scarlet robe; Mark (and John) describe the same robe as purple.",
    passages: [
      {
        reference: "Matthew 27:28",
        text: "And they stripped him, and put on him a scarlet robe.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A28&version=KJV",
      },
      {
        reference: "Mark 15:17",
        text: "And they clothed him with purple, and platted a crown of thorns, and put it about his head,",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+15%3A17&version=KJV",
      },
    ],
    note: "Widely regarded as one of the more trivial Synoptic differences, commonly explained by the fact that in the ancient world, cheap reddish-purple or crimson dyes were visually similar and the color terms for them overlapped considerably — an inexpensive mock 'royal' robe could plausibly be described as either 'scarlet' or 'purple' depending on the exact dye and the describer's vocabulary, especially since genuine royal purple was an expensive dye unlikely to be used for mockery. It's often cited less as a substantive contradiction and more as an example of incidental, unharmonized eyewitness-style variation.",
  },
  {
    id: "christianity-drink-offered",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "The Drink Offered: Gall, or Myrrh?",
    description:
      "Matthew describes Jesus being offered wine mixed with 'gall' before the crucifixion; Mark describes the same offer as wine mixed with 'myrrh.'",
    passages: [
      {
        reference: "Matthew 27:34",
        text: "They gave him vinegar to drink mingled with gall: and when he had tasted thereof, he would not drink.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A34&version=KJV",
      },
      {
        reference: "Mark 15:23",
        text: "And they gave him to drink wine mingled with myrrh: but he received it not.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+15%3A23&version=KJV",
      },
    ],
    note: "Commonly read as complementary rather than conflicting: myrrh is bitter-tasting, so Matthew's 'gall' (a general Greek term for something bitter) may simply describe the taste of the same myrrh-drugged wine Mark names more specifically, rather than naming a different substance. Matthew's wording may also deliberately echo Psalm 69:21 ('they gave me gall for my meat'), a psalm early Christians read as prophetic of the crucifixion — suggesting Matthew's word choice could be shaped by that allusion as much as by a literal ingredient list.",
  },
  {
    id: "christianity-criminals-mocked",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "Did Both Criminals Mock Jesus?",
    description:
      "Matthew (and Mark) describe both criminals crucified alongside Jesus mocking him; Luke describes only one mocking him, while the other rebukes his companion and asks Jesus to remember him.",
    passages: [
      {
        reference: "Matthew 27:44",
        text: "The thieves also, which were crucified with him, cast the same in his teeth.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+27%3A44&version=KJV",
      },
      {
        reference: "Luke 23:39-43",
        text: "And one of the malefactors which were hanged railed on him... But the other answering rebuked him... And he said unto Jesus, Lord, remember me when thou comest into thy kingdom. And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+23%3A39-43&version=KJV",
      },
    ],
    note: "A commonly proposed harmonization reads Matthew's plural description as a generalization — both criminals initially mocked Jesus, as Matthew and Mark record, and one later changed his attitude over the hours of the crucifixion, as Luke separately narrates. Harmonists generally favor this sequential reading over treating the accounts as strictly incompatible, since Matthew doesn't explicitly rule out a change of heart partway through, but Luke's account gives no indication either criminal ever mocked Jesus at all, which is the detail some critical scholars see as the harder point to reconcile.",
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
    id: "christianity-peter-denial-rooster",
    religionId: "christianity",
    group: "The Crucifixion",
    title: "How Many Times Did the Rooster Crow?",
    description:
      "Predicting Peter's denial, Mark's Jesus specifically says the rooster will crow twice before Peter's third denial (and Mark later narrates it crowing twice); Matthew, Luke, and John all record the simpler prediction and fulfillment of a single crowing.",
    passages: [
      {
        reference: "Mark 14:30,72",
        text: "Verily I say unto thee, That this day, even in this night, before the cock crow twice, thou shalt deny me thrice... And the second time the cock crew. And Peter called to mind the word that Jesus said unto him...",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+14%3A30%2C72&version=KJV",
      },
      {
        reference: "Matthew 26:34,74-75",
        text: "Jesus said unto him, Verily I say unto thee, That this night, before the cock crow, thou shalt deny me thrice... and immediately the cock crew. And Peter remembered the word of Jesus...",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+26%3A34%2C74-75&version=KJV",
      },
    ],
    note: "Widely regarded as one of the more minor and easily harmonized Synoptic differences: a rooster crowing 'twice' does not exclude also crowing once as part of that sequence, so Matthew, Luke, and John aren't strictly denying a second crow — they simply don't mention it, consistent with each account's general tendency to compress surrounding narrative detail. It's often cited less as a genuine contradiction and more as an example of the kind of incidental, unharmonized detail that argues against the Gospels being copied from one single, harmonized script.",
  },
  {
    id: "christianity-empty-tomb",
    religionId: "christianity",
    group: "The Resurrection",
    title: "The Resurrection Accounts: How Many Angels?",
    description:
      "The four Gospels differ on how many heavenly figures the women encountered at the tomb, and how they're described: one angel in Matthew (sitting on the stone outside), a 'young man' in Mark, two men in Luke, and two angels in John (sitting inside, where the body had lain).",
    passages: [
      {
        reference: "Matthew 28:2,5",
        text: "...the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it... And the angel answered and said unto the women, Fear not ye.",
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
    note: "Harmonists suggest one figure spoke while a second was present but silent, that Mark's 'young man' is the same kind of being described more plainly elsewhere as an angel, and that the angel(s) could have moved between sitting on the stone outside and inside the tomb across the span the various visits cover. Critical scholars point to the differing counts, descriptions, and positions as evidence the resurrection narratives circulated independently before being written down.",
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
    id: "christianity-women-told",
    religionId: "christianity",
    group: "The Resurrection",
    title: "Did the Women Tell Anyone?",
    description:
      "Mark's account, in its earliest and best-attested manuscripts, has the women fleeing the tomb and telling no one out of fear; Matthew has the same women running immediately to report what they'd seen to the disciples.",
    passages: [
      {
        reference: "Mark 16:8",
        text: "And they went out quickly, and fled from the sepulchre; for they trembled and were amazed: neither said they any thing to any man; for they were afraid.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+16%3A8&version=KJV",
      },
      {
        reference: "Matthew 28:8",
        text: "And they departed quickly from the sepulchre with fear and great joy; and did run to bring his disciples word.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A8&version=KJV",
      },
    ],
    note: "Connects to a well-known textual question: the verses following Mark 16:8 in most Bibles (16:9-20, the 'longer ending') are widely regarded by textual scholars, based on the earliest surviving Greek manuscripts, as a later addition rather than part of Mark's original text — meaning Mark's Gospel may have been intended to end on the women's silence and fear as a deliberate, unsettling literary choice. Harmonists more often read 16:8's 'said nothing to any man' as describing a brief, immediate silence born of shock, on the way to telling the disciples exactly as Matthew describes moments later, rather than a lasting silence.",
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
    id: "christianity-eleven-or-twelve",
    religionId: "christianity",
    group: "The Resurrection",
    title: "Eleven Disciples, or Twelve?",
    description:
      "By the time of this resurrection appearance, only eleven disciples remained (Judas having died); Matthew accordingly says 'the eleven,' while Paul's early creedal summary says Jesus appeared to 'the twelve.'",
    passages: [
      {
        reference: "Matthew 28:16",
        text: "Then the eleven disciples went away into Galilee, into a mountain where Jesus had appointed them.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+28%3A16&version=KJV",
      },
      {
        reference: "1 Corinthians 15:5",
        text: "And that he was seen of Cephas, then of the twelve:",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=1+Corinthians+15%3A5&version=KJV",
      },
    ],
    note: "Widely read as Paul using 'the Twelve' as a fixed title for the apostolic group as a whole — much like a sports team keeps its name even when missing a player — rather than a literal headcount at that specific appearance; this usage is well attested in how the group is referred to elsewhere in the New Testament even after Judas's death and before Matthias's replacement was chosen (compare Acts 6:2). It's a minor example of the same general point raised elsewhere on this page: numbers and titles in these texts aren't always used with modern statistical precision.",
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
    id: "christianity-ascension-timing",
    religionId: "christianity",
    group: "The Resurrection",
    title: "When Did Jesus Ascend?",
    description:
      "Luke's Gospel narrates the ascension in the same continuous scene as the resurrection day appearances, with no time gap indicated; Acts — traditionally written by the same author as a sequel — explicitly states Jesus appeared to the disciples over forty days before ascending.",
    passages: [
      {
        reference: "Luke 24:50-51",
        text: "And he led them out as far as to Bethany, and he lifted up his hands, and blessed them. And it came to pass, while he blessed them, he was parted from them, and carried up into heaven.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Luke+24%3A50-51&version=KJV",
      },
      {
        reference: "Acts 1:3,9",
        text: "To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the kingdom of God... And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Acts+1%3A3%2C9&version=KJV",
      },
    ],
    note: "Since Luke and Acts share an author by near-universal scholarly consensus, this is usually read as narrative compression rather than a genuine factual disagreement: ancient historical writing often summarized events without flagging every time gap, and Luke's Gospel may simply narrate the resurrection appearances and the ascension together as a set without asserting they happened on the same day. A minor related point: a few early Greek manuscripts of Luke 24:51 omit the phrase 'and carried up into heaven' entirely, a textual variant scholars debate independently of the chronology question.",
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
      "John's Gospel states flatly that no one has ever seen God, while the Torah describes Moses speaking with God face to face and Israel's elders seeing God directly.",
    passages: [
      {
        reference: "John 1:18",
        text: "No man hath seen God at any time; the only begotten Son... hath declared him.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+1%3A18&version=KJV",
      },
      {
        reference: "Exodus 33:11",
        text: "And the LORD spake unto Moses face to face, as a man speaketh unto his friend.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+33%3A11&version=KJV",
      },
      {
        reference: "Exodus 24:9-11",
        text: "Then went up Moses, and Aaron, Nadab, and Abihu, and seventy of the elders of Israel: and they saw the God of Israel... also they saw God, and did eat and drink.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+24%3A9-11&version=KJV",
      },
    ],
    note: "Classical commentators distinguish seeing God's unmediated essence (denied) from seeing a manifestation, vision, or divine glory, or simply communicating directly with God (affirmed, and idiomatically called 'face to face') — a distinction the text itself does not spell out.",
  },
  {
    id: "christianity-jesus-knows-future",
    religionId: "christianity",
    group: "The Nature of Christ",
    title: "Does Jesus Know the Future?",
    description:
      "Mark's Jesus states plainly that even the Son does not know the day or hour of the end; John's disciples declare their certainty that Jesus knows all things.",
    passages: [
      {
        reference: "Mark 13:32",
        text: "But of that day and that hour knoweth no man, no, not the angels which are in heaven, neither the Son, but the Father.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+13%3A32&version=KJV",
      },
      {
        reference: "John 16:30",
        text: "Now are we sure that thou knowest all things, and needest not that any man should ask thee: by this we believe that thou camest forth from God.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+16%3A30&version=KJV",
      },
    ],
    note: "A significant point in the history of Christology, not merely a modern objection. One long-standing reading distinguishes Jesus's divine nature (which knows all things) from his human nature during the incarnation (which, per Mark, did not access that particular knowledge) — formalized in later doctrine as the distinction between Christ's two natures. John 16:30 is also the disciples' own statement of confidence, not a narrator's claim or Jesus's own words, and its 'all things' is in context about Jesus's insight into their unspoken questions (16:19), not necessarily a claim to exhaustive knowledge of every future date.",
  },
  {
    id: "christianity-god-tempt",
    religionId: "christianity",
    group: "God's Nature",
    title: "Does God Tempt People?",
    description:
      "James states plainly that God does not tempt anyone; Genesis opens the Akedah narrative by stating that God did tempt Abraham.",
    passages: [
      {
        reference: "James 1:13",
        text: "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=James+1%3A13&version=KJV",
      },
      {
        reference: "Genesis 22:1",
        text: "And it came to pass after these things, that God did tempt Abraham, and said unto him, Behold, here I am.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+22%3A1&version=KJV",
      },
    ],
    note: "This often turns on translation: the underlying Hebrew (nissah) and Greek (peirazo) both cover a semantic range from 'tempt' (toward evil) to 'test' (to prove character), and many modern translations (e.g. NIV, ESV) render Genesis 22:1 as God 'testing' Abraham specifically to avoid this apparent clash with James — the KJV's use of 'tempt' for both was standard in 1611 English but reads differently today. Classical Jewish commentary likewise reads Genesis 22:1 as a test of faith, not an enticement to sin.",
  },
  {
    id: "christianity-god-evil",
    religionId: "christianity",
    group: "God's Nature",
    title: "Does God Cause Evil?",
    description:
      "Isaiah has God declaring that He creates 'evil' alongside light, peace, and darkness; James states that God cannot be tempted by evil and tempts no one toward it.",
    passages: [
      {
        reference: "Isaiah 45:7",
        text: "I form the light, and create darkness: I make peace, and create evil: I the LORD do all these things.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Isaiah+45%3A7&version=KJV",
      },
      {
        reference: "James 1:13",
        text: "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=James+1%3A13&version=KJV",
      },
    ],
    note: "Largely turns on the range of the Hebrew word ra ('evil') in Isaiah 45:7, which — like its English counterpart in older translations — covers both moral evil and calamity/disaster; most modern translations (e.g. NIV, ESV, NASB) render it 'disaster' or 'calamity' here specifically because the immediate context contrasts it with 'peace' (shalom, well-being generally), not with moral goodness. Read this way, Isaiah claims God sends both prosperity and hardship as sovereign acts, not that God is the source of moral wrongdoing — the same distinction at stake in the 'Does God Tempt People?' entry above.",
  },
  {
    id: "christianity-god-omniscience",
    religionId: "christianity",
    group: "God's Nature",
    title: "Does God Know Everything?",
    description:
      "The Psalms affirm that God knows a person's words before they're even spoken; in Genesis, the angel of the LORD tells Abraham 'now I know' that he fears God — after, not before, Abraham's willingness to sacrifice Isaac was demonstrated.",
    passages: [
      {
        reference: "Psalm 139:4",
        text: "For there is not a word in my tongue, but, lo, O LORD, thou knowest it altogether.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Psalm+139%3A4&version=KJV",
      },
      {
        reference: "Genesis 22:12",
        text: "And he said, Lay not thine hand upon the lad, neither do thou any thing unto him: for now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+22%3A12&version=KJV",
      },
    ],
    note: "Classical commentators generally read 'now I know' as an example of God's foreknowledge being confirmed or demonstrated in observable action rather than newly acquired — similar to how a person might say 'now I know you mean it' about something they already believed, once it's been proven. Some also note it's the angel of the LORD, not God directly, who speaks the line in Genesis 22:11-12, though angel-of-the-LORD passages elsewhere in the Torah speak in God's own voice and are often read as direct divine communication.",
  },
  {
    id: "christianity-god-peace-or-war",
    religionId: "christianity",
    group: "God's Nature",
    title: "A God of Peace, or of War?",
    description:
      "Paul describes God as a God of peace, not of confusion; the Song of the Sea describes God as 'a man of war.'",
    passages: [
      {
        reference: "1 Corinthians 14:33",
        text: "For God is not the author of confusion, but of peace, as in all churches of the saints.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=1+Corinthians+14%3A33&version=KJV",
      },
      {
        reference: "Exodus 15:3",
        text: "The LORD is a man of war: the LORD is his name.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+15%3A3&version=KJV",
      },
    ],
    note: "Commentators generally read these as addressing different domains rather than conflicting: Exodus 15 is victory poetry describing God's decisive action defending Israel at the Red Sea, using martial imagery common to ancient Near Eastern praise of a deity as divine warrior on a people's behalf, while 1 Corinthians 14:33 addresses orderly conduct within church worship gatherings specifically, not God's total character or God's relationship to warfare in general. Both descriptions — God as one who acts to establish order (including through conflict) and God who is not the source of chaotic confusion — are held throughout the Bible without either passage claiming to describe God exhaustively.",
  },
  {
    id: "christianity-god-loves-everyone",
    religionId: "christianity",
    group: "God's Nature",
    title: "Does God Love Everyone?",
    description:
      "John's Gospel has God so loving 'the world' that He gave His only Son; the Psalms describe God hating all who do iniquity.",
    passages: [
      {
        reference: "John 3:16",
        text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+3%3A16&version=KJV",
      },
      {
        reference: "Psalm 5:5",
        text: "The foolish shall not stand in thy sight: thou hatest all workers of iniquity.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Psalm+5%3A5&version=KJV",
      },
    ],
    note: "Theologians distinguish different senses of divine love and hatred at stake here: a general, universal love for humanity as God's creation and the object of the offer of salvation (John 3:16's 'world'), alongside a specific opposition to sin and unrepentant wrongdoing (Psalm 5:5's 'workers of iniquity'). Reformed theology has particularly debated whether love and hatred can be simultaneously true of God toward the same individuals, or whether passages like Psalm 5:5 describe God's stance toward persistent, unrepented evil specifically rather than toward people as such — a live question within Christian theology rather than a settled one.",
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
    id: "christianity-law-permanent",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is the Law Permanent?",
    description:
      "Jesus states the Law remains valid down to its smallest letter until heaven and earth pass away; Hebrews describes the first covenant — the Mosaic Law — as obsolete and about to vanish.",
    passages: [
      {
        reference: "Matthew 5:17-18",
        text: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil. For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+5%3A17-18&version=KJV",
      },
      {
        reference: "Hebrews 8:13",
        text: "In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Hebrews+8%3A13&version=KJV",
      },
    ],
    note: "A common harmonizing reading distinguishes 'fulfill' from 'abolish': Matthew has Jesus claiming to fulfill the Law's deeper intent, not cancel it, while Hebrews addresses specifically the Levitical sacrificial and priestly system, arguing it is superseded by Christ's priesthood and sacrifice — a narrower claim about ritual law rather than the Law's moral content as a whole. This distinction between moral, ceremonial, and civil law is a longstanding one in Christian theology, though it is a later systematic framework, not one the New Testament authors state explicitly themselves.",
  },
  {
    id: "christianity-circumcision-required",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is Circumcision Required?",
    description:
      "Genesis makes circumcision an everlasting covenant obligation, on pain of being 'cut off' from the covenant people; Paul tells Gentile Christians that accepting circumcision would cut them off from Christ instead.",
    passages: [
      {
        reference: "Genesis 17:10,14",
        text: "This is my covenant, which ye shall keep, between me and you and thy seed after thee; Every man child among you shall be circumcised... And the uncircumcised man child... that soul shall be cut off from his people; he hath broken my covenant.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Genesis+17%3A10%2C14&version=KJV",
      },
      {
        reference: "Galatians 5:2,4",
        text: "Behold, I Paul say unto you, that if ye be circumcised, Christ shall profit you nothing... Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Galatians+5%3A2%2C4&version=KJV",
      },
    ],
    note: "Mainstream Christian theology resolves this by treating circumcision as the specific covenant sign given to Abraham's physical descendants under the Mosaic economy, superseded for entry into the New Covenant by faith and baptism (compare Colossians 2:11-12, which reinterprets circumcision spiritually) — while Judaism continues to read Genesis 17 as a perpetual, literal obligation for Jewish males. Paul's own position in Galatians is specifically about circumcision as a requirement for justification or covenant membership, not a claim that Genesis 17 misdescribed the Abrahamic and Mosaic covenants on their own terms.",
  },
  {
    id: "christianity-sabbath-required",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is the Sabbath Still Required?",
    description:
      "Exodus makes sabbath observance one of the Ten Commandments; Paul tells the Colossian church not to let anyone judge them regarding sabbath observance.",
    passages: [
      {
        reference: "Exodus 20:8-11",
        text: "Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+20%3A8-11&version=KJV",
      },
      {
        reference: "Colossians 2:16",
        text: "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days:",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Colossians+2%3A16&version=KJV",
      },
    ],
    note: "Christians hold a range of views on this, making it a live internal question rather than a settled one: some traditions (e.g. Seventh-day Adventists, some Reformed sabbatarians) maintain the seventh-day sabbath is still binding; most mainstream traditions read Colossians 2:16-17 (which calls sabbaths 'a shadow of things to come') as declaring the ceremonial sabbath law fulfilled in Christ, while others observe Sunday as a distinct 'Lord's Day' tradition (compare Acts 20:7, Revelation 1:10) rather than a continuation of the seventh-day sabbath under a new name.",
  },
  {
    id: "christianity-dietary-restrictions",
    religionId: "christianity",
    group: "Doctrine",
    title: "Are the Dietary Laws Still Required?",
    description:
      "Leviticus lists specific animals, including pigs, as unclean and forbidden to eat; Mark's narrative aside on Jesus's teaching states that Jesus 'declared all foods clean.'",
    passages: [
      {
        reference: "Leviticus 11:7-8",
        text: "And the swine... he is unclean to you. Of their flesh shall ye not eat, and their carcase shall ye not touch; they are unclean to you.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Leviticus+11%3A7-8&version=KJV",
      },
      {
        reference: "Mark 7:18-19",
        text: "And he saith unto them, Are ye so without understanding also? Do ye not perceive, that whatsoever thing from without entereth into the man, it cannot defile him... This he said, making all meats clean.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Mark+7%3A18-19&version=KJV",
      },
    ],
    note: "Mainstream Christian theology reads Mark 7:19's editorial comment as marking a real shift for Jesus's followers, connected to Peter's vision in Acts 10:9-16 ('What God hath cleansed, that call not thou common') and the Jerusalem council's decision not to require Gentile converts to keep the full Mosaic dietary code (Acts 15:19-20). Judaism continues to read Leviticus 11 as a perpetual, literal dietary law (kashrut) for Jews, and some Christian traditions read Mark 7 more narrowly as being about ritual hand-washing (its immediate context, Mark 7:1-5) rather than a wholesale abolition of dietary law.",
  },
  {
    id: "christianity-sacrifice-replaced",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is Animal Sacrifice Still Needed?",
    description:
      "Leviticus establishes animal sacrifice, specifically the shedding of blood, as the divinely appointed means of atonement; Hebrews argues that animal sacrifices could never actually take away sin, and are superseded entirely by Christ's single, final sacrifice.",
    passages: [
      {
        reference: "Leviticus 17:11",
        text: "For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Leviticus+17%3A11&version=KJV",
      },
      {
        reference: "Hebrews 10:4,11-12",
        text: "For it is not possible that the blood of bulls and of goats should take away sins... And every priest standeth daily ministering... offering oftentimes the same sacrifices, which can never take away sins: But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God;",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Hebrews+10%3A4%2C11-12&version=KJV",
      },
    ],
    note: "Mainstream Christian theology reads Hebrews as arguing animal sacrifice always pointed forward to, and was fulfilled by, Christ's death, rather than claiming Leviticus was wrong on its own terms — an argument made from within Christian theology, addressed to Jewish Christians tempted to return to Temple sacrifice. Judaism does not accept this typological reading, and its own tradition addressed the end of Temple sacrifice after 70 CE primarily through rabbinic teaching that prayer, repentance, and good deeds substitute for sacrifice in its absence — using logic similar to Hosea 6:6 (see the Judaism section's 'Does God Want Sacrifice?' entry).",
  },
  {
    id: "christianity-eye-for-eye",
    religionId: "christianity",
    group: "Doctrine",
    title: "An Eye for an Eye, or Turn the Other Cheek?",
    description:
      "Exodus establishes proportional retribution ('an eye for an eye') as a legal principle; Jesus explicitly quotes this principle and tells his listeners not to resist evil, but to turn the other cheek instead.",
    passages: [
      {
        reference: "Exodus 21:23-25",
        text: "And if any mischief follow, then thou shalt give life for life, Eye for eye, tooth for tooth, hand for hand, foot for foot, Burning for burning, wound for wound, stripe for stripe.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Exodus+21%3A23-25&version=KJV",
      },
      {
        reference: "Matthew 5:38-39",
        text: "Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth: But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+5%3A38-39&version=KJV",
      },
    ],
    note: "Most commentators read Exodus 21:23-25 (the lex talionis) as originally a judicial principle limiting punishment to proportionality — preventing escalating blood feuds by capping retribution rather than commanding personal vengeance — while Jesus's teaching addresses personal conduct between individuals, not courtroom sentencing. Even so, Jesus explicitly frames his teaching as contrasting with 'an eye for an eye,' one of several such contrasts in the Sermon on the Mount, making this a case where Jesus is presented as intentionally revising a Torah principle's application — a point still debated within Christian ethics regarding self-defense and criminal justice today.",
  },
  {
    id: "christianity-divorce",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is Divorce Permitted?",
    description:
      "Deuteronomy permits a man to divorce his wife by written decree for 'some uncleanness'; Jesus states that Moses only allowed this because of 'the hardness of your hearts,' that it wasn't so 'from the beginning,' and restricts legitimate divorce to cases of sexual immorality.",
    passages: [
      {
        reference: "Deuteronomy 24:1",
        text: "When a man hath taken a wife, and married her, and it come to pass that she find no favour in his eyes, because he hath found some uncleanness in her: then let him write her a bill of divorcement, and give it in her hand, and send her out of his house.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Deuteronomy+24%3A1&version=KJV",
      },
      {
        reference: "Matthew 19:8-9",
        text: "He saith unto them, Moses because of the hardness of your hearts suffered you to put away your wives: but from the beginning it was not so. And I say unto you, Whosoever shall put away his wife, except it be for fornication, and shall marry another, committeth adultery.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+19%3A8-9&version=KJV",
      },
    ],
    note: "Jesus's own framing addresses the tension directly, presenting the Deuteronomic provision as a concession to human sinfulness rather than God's original design (pointing back to Genesis 2:24). This is widely accepted within Christian theology as an intentional tightening of the Mosaic provision, though Christians still debate exactly how narrowly 'fornication' should be read, and Deuteronomy 24:1's own phrase 'some uncleanness' was already debated among ancient Jewish schools — the more permissive House of Hillel and the stricter House of Shammai famously disagreed on how broadly it applied, a live debate in Jesus's own era (compare the Pharisees' question in Matthew 19:3).",
  },
  {
    id: "christianity-human-perfection",
    religionId: "christianity",
    group: "Doctrine",
    title: "Can Humans Be Perfect?",
    description:
      "Jesus commands his listeners to be perfect, as God is perfect; Paul states that all people have sinned and fall short of God's glory.",
    passages: [
      {
        reference: "Matthew 5:48",
        text: "Be ye therefore perfect, even as your Father which is in heaven is perfect.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+5%3A48&version=KJV",
      },
      {
        reference: "Romans 3:23",
        text: "For all have sinned, and come short of the glory of God.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Romans+3%3A23&version=KJV",
      },
    ],
    note: "Commonly read as addressing different registers rather than strictly contradicting one another: Matthew 5:48 caps a section on love of enemies (5:43-48), read by many commentators as a call to complete, undivided love rather than literal moral sinlessness — a goal to strive toward, not a claim already achieved. Romans 3:23 describes universal human moral status as part of Paul's argument for why everyone needs grace. Some theological traditions (e.g. Wesleyan 'Christian perfection') take Matthew 5:48 more literally as attainable in this life, making this a live theological question within Christianity, not just a skeptic's objection.",
  },
  {
    id: "christianity-eternal-security",
    religionId: "christianity",
    group: "Doctrine",
    title: "Can Salvation Be Lost?",
    description:
      "Jesus states that no one can snatch his sheep out of his hand once given eternal life; Hebrews describes a class of people who were once enlightened and have since 'fallen away,' for whom renewed repentance is said to be impossible.",
    passages: [
      {
        reference: "John 10:28-29",
        text: "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand. My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father's hand.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=John+10%3A28-29&version=KJV",
      },
      {
        reference: "Hebrews 6:4-6",
        text: "For it is impossible for those who were once enlightened, and have tasted of the heavenly gift... If they shall fall away, to renew them again unto repentance; seeing they crucify to themselves the Son of God afresh, and put him to an open shame.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Hebrews+6%3A4-6&version=KJV",
      },
    ],
    note: "A genuinely live and much-debated question within Christian theology, not a modern skeptical objection: Reformed and many Baptist traditions read John 10 as teaching the perseverance of true believers ('once saved, always saved'), and read Hebrews 6 as describing people exposed to Christian teaching and experience without ever being genuinely regenerate to begin with. Arminian, Wesleyan, and Catholic traditions instead read Hebrews 6 at face value as warning that genuine believers can fall away and lose salvation, and read John 10's 'no one can snatch them' as describing external forces rather than a believer's own choice to abandon faith (compare Matthew 24:13's conditional 'he that endureth to the end shall be saved').",
  },
  {
    id: "christianity-can-believers-sin",
    religionId: "christianity",
    group: "Doctrine",
    title: "Can Believers Sin?",
    description:
      "In the same short letter, John states that whoever is born of God does not sin and cannot sin, while also stating that anyone who claims to be without sin deceives themselves.",
    passages: [
      {
        reference: "1 John 3:9",
        text: "Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=1+John+3%3A9&version=KJV",
      },
      {
        reference: "1 John 1:8",
        text: "If we say that we have no sin, we deceive ourselves, and the truth is not in us.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=1+John+1%3A8&version=KJV",
      },
    ],
    note: "Most commentators resolve this within 1 John itself by reading 3:9's 'doth not commit sin' as describing habitual, unrepentant sinning as a settled lifestyle (the Greek present tense verb can carry a continuous sense, 'does not keep on sinning'), consistent with 1 John 2:1's acknowledgment that 'if any man sin, we have an advocate with the Father.' Read this way, 1:8 addresses the false claim to be entirely without any sin at all, while 3:9 addresses whether sin can characterize a believer's ongoing pattern of life — two different questions the same letter is read as holding together rather than contradicting.",
  },
  {
    id: "christianity-unforgivable-sin",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is Any Sin Truly Unforgivable?",
    description:
      "Jesus names one specific, permanently unforgivable sin — blasphemy against the Holy Spirit; John states more generally that confessed sin is always forgiven.",
    passages: [
      {
        reference: "Matthew 12:31-32",
        text: "Wherefore I say unto you, All manner of sin and blasphemy shall be forgiven unto men: but the blasphemy against the Holy Ghost shall not be forgiven unto men... it shall not be forgiven him, neither in this world, neither in the world to come.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Matthew+12%3A31-32&version=KJV",
      },
      {
        reference: "1 John 1:9",
        text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=1+John+1%3A9&version=KJV",
      },
    ],
    note: "Most commentators read these as operating at different levels: 1 John 1:9 describes God's general willingness to forgive any confessed sin, while Matthew 12:31-32 is usually read as describing a specific, settled state of will — a hardened, final rejection of the Spirit's testimony about Christ (the immediate context is the Pharisees attributing Jesus's Spirit-empowered miracles to Satan) — rather than any single sinful act. On this reading, the 'unforgivable' sin isn't a particular deed but a persistent refusal to seek forgiveness at all, meaning a person troubled by having possibly committed it is, by most pastoral theology, taken as evidence they haven't.",
  },
  {
    id: "christianity-no-one-righteous",
    religionId: "christianity",
    group: "Doctrine",
    title: "Is Anyone Righteous?",
    description:
      "Paul, quoting the Psalms, states flatly that no one is righteous; the book of Job opens by describing Job himself as 'perfect and upright,' one who feared God and avoided evil.",
    passages: [
      {
        reference: "Romans 3:10",
        text: "As it is written, There is none righteous, no, not one:",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Romans+3%3A10&version=KJV",
      },
      {
        reference: "Job 1:1",
        text: "There was a man in the land of Uz, whose name was Job; and that man was perfect and upright, and one that feared God, and eschewed evil.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Job+1%3A1&version=KJV",
      },
    ],
    note: "Commentators generally read 'righteous' in these two contexts as making different kinds of claims: Job 1:1 describes Job's moral character and conduct relative to other people — sincere, blameless behavior by human standards — while Romans 3:10-18 (quoting Psalm 14 and 53) argues no one meets God's own perfect standard of righteousness, a comparison to divine holiness rather than to other humans. Job himself, later in the book, still distinguishes his own conduct from claiming sinlessness before God (compare Job 9:2-3, 'how should man be just with God?').",
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
  {
    id: "christianity-paul-damascus-road",
    religionId: "christianity",
    group: "Paul & Acts",
    title: "Paul's Damascus Road: Who Heard What?",
    description:
      "The book of Acts narrates Paul's Damascus road conversion three times, twice through Paul's own retelling, and the details shift each time: his companions 'hear a voice' in the first account but do not hear it in the second, and either 'stand' or 'fall to the ground' depending on which telling is read.",
    passages: [
      {
        reference: "Acts 9:7",
        text: "And the men which journeyed with him stood speechless, hearing a voice, but seeing no man.",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Acts+9%3A7&version=KJV",
      },
      {
        reference: "Acts 22:9; 26:14",
        text: "And they that were with me saw indeed the light, and were afraid; but they heard not the voice of him that spake to me... And when we were all fallen to the earth, I heard a voice speaking unto me...",
        translation: "King James Version",
        sourceUrl:
          "https://www.biblegateway.com/passage/?search=Acts+22%3A9%3B+26%3A14&version=KJV",
      },
    ],
    note: "Some harmonists propose the Greek verb for 'hear' (akouo) can mean 'understand' as well as physically perceive sound, so the companions might have heard an indistinct sound without understanding words — reconciling 9:7 and 22:9. The standing/falling difference (9:7 vs. 26:14) is harder to resolve the same way, and is more often read as the kind of incidental variation expected when the same author narrates an oral account of an experience multiple times, in different rhetorical settings (a narrated history versus two of Paul's own first-person speeches), rather than a claim that every retelling must match in every physical detail.",
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
    id: "judaism-creation-duration",
    religionId: "judaism",
    group: "Creation",
    title: "Six Days, or One?",
    description:
      "Genesis 1 narrates creation unfolding across six distinct days, completed and rested upon on the seventh; Genesis 2:4, immediately afterward, refers to the entire process as happening 'in the day' (singular) that God made heaven and earth.",
    passages: [
      {
        reference: "Genesis 1:31-2:2",
        text: "And there was evening and there was morning, the sixth day. And the heaven and the earth were finished, and all the host of them. And on the seventh day God finished His work which He had made...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.1.31-2.2",
      },
      {
        reference: "Genesis 2:4",
        text: "These are the generations of the heaven and of the earth when they were created, in the day that the LORD God made earth and heaven.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.2.4",
      },
    ],
    note: "Most commentators, classical and modern, read Genesis 2:4's 'day' as an idiom for 'at the time when' rather than a literal 24-hour period contradicting the six-day account — the Hebrew word yom ('day') is used this way elsewhere in the Torah (e.g. 'in the day that thou eatest thereof,' Genesis 2:17, doesn't mean Adam would die within 24 hours). This idiomatic use is usually raised in debates about how literally to read Genesis 1's own six 'days,' rather than treated as a separate contradiction in its own right.",
  },
  {
    id: "judaism-ark-animals",
    religionId: "judaism",
    group: "The Flood & Babel",
    title: "How Many Animals Boarded the Ark?",
    description:
      "God's initial instruction to Noah calls for two of every kind of animal to be brought onto the ark; a later instruction, describing the same event, calls for seven pairs of every clean animal and bird, with unclean animals alone limited to a single pair.",
    passages: [
      {
        reference: "Genesis 6:19-20",
        text: "And of every living thing of all flesh, two of every sort shalt thou bring into the ark, to keep them alive with thee; they shall be male and female.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.6.19-20",
      },
      {
        reference: "Genesis 7:2-3",
        text: "Of every clean beast thou shalt take to thee seven and seven, each with his mate; and of the beasts that are not clean two, each with his mate... to keep seed alive upon the face of all the earth.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.7.2-3",
      },
    ],
    note: "Harmonists read these as complementary rather than contradictory: the general instruction in chapter 6 ('two of every sort') is read as a baseline later refined by chapter 7's more specific instruction distinguishing clean from unclean animals — needed so Noah would have surplus clean animals available for sacrifice after the flood (Genesis 8:20). Source-critical scholars instead read the two counts as coming from different underlying literary sources (again commonly labelled P and J) combined into one narrative.",
  },
  {
    id: "judaism-flood-duration",
    religionId: "judaism",
    group: "The Flood & Babel",
    title: "Forty Days, or a Hundred and Fifty?",
    description:
      "One verse describes rain falling on the earth for forty days; other verses describe the floodwaters prevailing over the earth for a hundred and fifty days before beginning to recede.",
    passages: [
      {
        reference: "Genesis 7:17",
        text: "And the flood was forty days upon the earth; and the waters increased, and bore up the ark, and it was lift up above the earth.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.7.17",
      },
      {
        reference: "Genesis 7:24; 8:3",
        text: "And the waters prevailed upon the earth a hundred and fifty days... and the waters returned from off the earth continually; and after the end of a hundred and fifty days the waters decreased.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.7.24",
      },
    ],
    note: "Widely read as complementary rather than contradictory: the forty days (matching the forty days of rain in Genesis 7:12) describes the period of active rainfall and the rising of the waters, while the hundred and fifty days describes the longer total period the waters remained at their height before receding — the flood narrative's own detailed chronology (across Genesis 7-8) generally supports reading these as sequential phases of one continuous event rather than two conflicting totals for the same span.",
  },
  {
    id: "judaism-tower-of-babel",
    religionId: "judaism",
    group: "The Flood & Babel",
    title: "One Language, or Many?",
    description:
      "Genesis 11 opens the Babel narrative by stating the whole earth shared one language, implying the diversity of languages resulted from that story's events; the genealogical 'Table of Nations' immediately before it, in Genesis 10, already describes the nations as divided 'every one after his tongue' — multiple languages — before Babel is narrated.",
    passages: [
      {
        reference: "Genesis 11:1",
        text: "And the whole earth was of one language and of one speech.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.11.1",
      },
      {
        reference: "Genesis 10:5",
        text: "Of these were the isles of the nations divided in their lands, every one after his tongue, after their families, in their nations.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.10.5",
      },
    ],
    note: "A widely proposed resolution reads Genesis 10 and 11 as not strictly chronological relative to each other: Genesis 10 is read as a genealogical table describing the world's nations as they existed by a later point, narrated first for structural reasons, while Genesis 11 then flashes back to explain, thematically rather than strictly sequentially, how that linguistic diversity originally came about. This kind of achronological, topically-organized narration is read by many scholars as a recognized feature of ancient Near Eastern historiography generally, including elsewhere in Genesis.",
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
    note: "Commonly attributed, like the differing famine lengths and threshing-floor prices recorded for the same event, to errors introduced during centuries of scribal copying of numbers — ancient Hebrew numeral notation was particularly prone to this. Some harmonists instead propose the two books count different subsets of the army, such as including or excluding certain divisions mentioned elsewhere in Chronicles.",
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
    id: "judaism-threshing-floor-price",
    religionId: "judaism",
    group: "The Census",
    title: "What Did David Pay for the Threshing Floor?",
    description:
      "Samuel records David paying fifty shekels of silver for the threshing floor and oxen used to end the census's plague; Chronicles, describing the same purchase, records six hundred shekels of gold.",
    passages: [
      {
        reference: "II Samuel 24:24",
        text: "So David bought the threshing-floor and the oxen for fifty shekels of silver.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.24.24",
      },
      {
        reference: "I Chronicles 21:25",
        text: "So David gave to Ornan for the place six hundred shekels of gold by weight.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Chronicles.21.25",
      },
    ],
    note: "A common harmonization proposes the two figures cover different scope: Samuel's fifty shekels of silver for just the threshing floor and oxen used for the immediate sacrifice, and Chronicles's six hundred shekels of gold for the entire surrounding site — 'the place,' per 1 Chronicles 21:22, understood as the future Temple grounds — purchased separately and at greater expense. Others treat it, like several other Samuel/Chronicles numeric differences, as a probable scribal transmission variant.",
  },
  {
    id: "judaism-horse-stalls",
    religionId: "judaism",
    group: "Kings & Chronicles",
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
    id: "judaism-solomon-officers",
    religionId: "judaism",
    group: "Kings & Chronicles",
    title: "How Many Chief Officers Did Solomon Have?",
    description:
      "Kings records 550 chief officers overseeing Solomon's labor force; Chronicles, describing the same role, records 250.",
    passages: [
      {
        reference: "I Kings 9:23",
        text: "These were the chief officers that were over Solomon's work, five hundred and fifty, who bore rule over the people that wrought in the work.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Kings.9.23",
      },
      {
        reference: "II Chronicles 8:10",
        text: "And these were the chief officers of king Solomon, even two hundred and fifty, that bore rule over the people.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Chronicles.8.10",
      },
    ],
    note: "Commonly treated as another instance of the numeral discrepancies that recur between Kings and Chronicles, likely arising from scribal transmission. Some harmonists note 1 Kings 5:16 separately records 3,300 supervisory officers specifically over the building projects (compare 2 Chronicles 2:18's 3,600), suggesting 9:23 and 8:10 may be counting a different, more senior subset of overseers than those other totals — though this doesn't fully resolve why the figures for that subset still differ.",
  },
  {
    id: "judaism-syrian-chariots",
    religionId: "judaism",
    group: "Kings & Chronicles",
    title: "How Many Aramean Chariot-Fighters Did David Defeat?",
    description:
      "Samuel records David defeating 700 Aramean chariot-fighters, alongside 40,000 horsemen; Chronicles, narrating the same battle, records 7,000 men who fought in chariots, alongside 40,000 footmen — differing both in the chariot-related figure (a tenfold difference, the same pattern as several other Samuel/Chronicles numbers) and in whether the accompanying troops were horsemen or footmen.",
    passages: [
      {
        reference: "II Samuel 10:18",
        text: "And Aram fled before Israel; and David slew of Aram the men of seven hundred chariots, and forty thousand horsemen, and smote Shobach the captain of their host, who died there.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.10.18",
      },
      {
        reference: "I Chronicles 19:18",
        text: "And Aram fled before Israel; and David slew of Aram seven thousand men that fought in chariots, and forty thousand footmen, and killed Shobach the captain of the host.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Chronicles.19.18",
      },
    ],
    note: "Fits the same broader pattern as the horse-stalls and census-count discrepancies elsewhere on this page — widely attributed to scribal numeral transmission errors between the two books, which drew on shared or related source material centuries apart. The horsemen/footmen difference is less commonly discussed than the tenfold numeral pattern, but is read the same way by most textual critics.",
  },
  {
    id: "judaism-ahaziah-age",
    religionId: "judaism",
    group: "Kings & Chronicles",
    title: "How Old Was Ahaziah When He Became King?",
    description:
      "Kings records Ahaziah becoming king of Judah at age twenty-two; Chronicles, describing the same king, records age forty-two — which would make him older than his own father, who died at 40 (2 Chronicles 21:20).",
    passages: [
      {
        reference: "II Kings 8:26",
        text: "Two and twenty years old was Ahaziah when he began to reign; and he reigned one year in Jerusalem.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Kings.8.26",
      },
      {
        reference: "II Chronicles 22:2",
        text: "Forty and two years old was Ahaziah when he began to reign, and he reigned one year in Jerusalem.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Chronicles.22.2",
      },
    ],
    note: "Widely regarded as a scribal numeral error in Chronicles, precisely because forty-two would make Ahaziah older than his own father — an internal impossibility most traditional and academic commentators alike resolve by preferring Kings' figure of twenty-two. Some ancient versions of Chronicles (portions of the Septuagint and the Syriac Peshitta) already read 'twenty-two' rather than 'forty-two,' supporting this as a transmission error rather than a genuine original discrepancy.",
  },
  {
    id: "judaism-jehoiachin-age",
    religionId: "judaism",
    group: "Kings & Chronicles",
    title: "How Old Was Jehoiachin When He Became King?",
    description:
      "Kings records Jehoiachin becoming king at eighteen; Chronicles records age eight for the same king.",
    passages: [
      {
        reference: "II Kings 24:8",
        text: "Eighteen years old was Jehoiachin when he began to reign, and he reigned in Jerusalem three months.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Kings.24.8",
      },
      {
        reference: "II Chronicles 36:9",
        text: "Eight years old was Jehoiachin when he began to reign, and he reigned three months and ten days in Jerusalem.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Chronicles.36.9",
      },
    ],
    note: "Commonly treated as another scribal numeral variant between the two books. Many textual critics favor Kings' figure of eighteen as more plausible for a king described taking significant political action shortly after his accession (2 Kings 24:12,15) — though an eight-year-old king would not be unprecedented in Judah's monarchy (compare Josiah at eight, 2 Kings 22:1).",
  },
  {
    id: "judaism-goliath-killer",
    religionId: "judaism",
    group: "Historical Narratives",
    title: "Who Killed Goliath?",
    description:
      "1 Samuel credits the famous killing of Goliath to David; 2 Samuel, in a later list of battles, credits it to Elhanan. 1 Chronicles' parallel list instead has Elhanan killing 'Lahmi the brother of Goliath' — a reading often offered as the reconciliation, though it requires the name 'Lahmi' (absent from the Samuel text) to be original.",
    passages: [
      {
        reference: "I Samuel 17:50",
        text: "So David prevailed over the Philistine with a sling and with a stone, and smote the Philistine, and slew him; but there was no sword in the hand of David.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/I_Samuel.17.50",
      },
      {
        reference: "II Samuel 21:19",
        text: "And there was again war with the Philistines at Gob; and Elhanan the son of Jaare-oregim the Beth-lehemite slew Goliath the Gittite, the staff of whose spear was like a weaver's beam.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/II_Samuel.21.19",
      },
    ],
    note: "Most modern text-critical scholars regard 1 Chronicles 20:5 (which credits Elhanan with killing 'Lahmi the brother of Goliath') as a later scribal harmonization of an original discrepancy: 'Lahmi' appears to be formed from re-dividing consonants that, in the Samuel text, spell out 'the Bethlehemite' — a plausible scribal fix rather than independent information. Other traditional harmonists instead propose 'Elhanan' was another name for David, or that two different Philistine warriors both carried the name or title 'Goliath.'",
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
        reference: "Exodus 32:14",
        text: "And the LORD repented of the evil which He said He would do unto His people.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.32.14",
      },
      {
        reference: "Genesis 6:6; Jonah 3:10",
        text: "And it repented the LORD that He had made man on the earth, and it grieved Him at His heart... And God saw their works, that they turned from their evil way; and God repented of the evil, which He said He would do unto them; and He did it not.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.6.6",
      },
    ],
    note: "The tension is tight enough to appear within a single chapter: 1 Samuel 15:29 denies God can repent in the very story where God is twice said to 'repent' of having made Saul king (verses 11 and 35 of the same chapter). Commentators typically read this 'repenting' language as anthropomorphic accommodation — describing a real change in outcome, contingent on human action, rather than a change in God's essential nature, knowledge, or long-term plan.",
  },
  {
    id: "judaism-god-angry",
    religionId: "judaism",
    group: "God's Nature",
    title: "Is God Angry, or Unmoved?",
    description:
      "Numbers describes God as fundamentally unlike a changeable, emotionally reactive human being; Exodus describes God's wrath 'waxing hot' to the point of wanting to consume the Israelites entirely, needing to be talked out of it by Moses's intercession in the following verses.",
    passages: [
      {
        reference: "Numbers 23:19",
        text: "God is not a man, that He should lie; neither the son of man, that He should repent.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Numbers.23.19",
      },
      {
        reference: "Exodus 32:10",
        text: "Now therefore let Me alone, that My wrath may wax hot against them, and that I may consume them; and I will make of thee a great nation.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.32.10",
      },
    ],
    note: "Commentators generally read the 'wrath' language throughout the Torah as anthropomorphic — describing, in terms humans can understand, God's response to covenant unfaithfulness and its consequences, rather than an uncontrolled emotional outburst comparable to human anger. Numbers 23:19's point in its own context is specifically about the reliability of God's word and promises, not a general claim that God has no responsive reaction to human behavior — Exodus 32:14, just a few verses after 32:10, has God 'relenting' in response to Moses's plea, part of one fluid, responsive relationship rather than two static, opposed descriptions of God's temperament.",
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
  {
    id: "judaism-god-everywhere",
    religionId: "judaism",
    group: "God's Nature",
    title: "Is God Everywhere?",
    description:
      "The Psalm affirms there is nowhere a person could go to escape God's presence; Genesis describes God 'walking in the garden,' with Adam and Eve able to hide from His presence among the trees — language implying a localized, moving presence a person could, at least temporarily, avoid.",
    passages: [
      {
        reference: "Psalm 139:7-10",
        text: "Whither shall I go from Thy spirit? or whither shall I flee from Thy presence? If I ascend up into heaven, Thou art there; if I make my bed in the nether-world, behold, Thou art there... Even there would Thy hand lead me, and Thy right hand would hold me.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Psalms.139.7-10",
      },
      {
        reference: "Genesis 3:8",
        text: "And they heard the voice of the LORD God walking in the garden toward the cool of the day; and the man and his wife hid themselves from the presence of the LORD God amongst the trees of the garden.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.3.8",
      },
    ],
    note: "Classical commentators read Genesis 3:8 as deliberately anthropomorphic, vivid narrative language — God described as if strolling through a garden in the evening breeze — rather than a literal claim about God's location, similar to other physical descriptions of God throughout the Torah (hands, a face, 'coming down' to see the Tower of Babel, Genesis 11:5). Jewish philosophical tradition, especially from the medieval period onward (e.g. Maimonides), explicitly treats such passages as figurative accommodations to human language, reserving literal omnipresence as the philosophically precise description of God's nature.",
  },
  {
    id: "judaism-human-lifespan",
    religionId: "judaism",
    group: "God's Nature",
    title: "120 Years, or Seventy?",
    description:
      "Genesis has God declaring a maximum human lifespan of 120 years; the Psalm instead describes ordinary human lifespan as seventy to eighty years, with no reference to a 120-year figure.",
    passages: [
      {
        reference: "Genesis 6:3",
        text: "And the LORD said: 'My spirit shall not abide in man for ever, for that he also is flesh; therefore shall his days be a hundred and twenty years.'",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Genesis.6.3",
      },
      {
        reference: "Psalm 90:10",
        text: "The days of our years are threescore years and ten, or even by reason of strength fourscore years...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Psalms.90.10",
      },
    ],
    note: "Many commentators read Genesis 6:3 not as setting an individual lifespan cap at all, but as announcing a fixed countdown — 120 years — until the flood would arrive, a period of grace for humanity to repent, fitting the immediate narrative context (Genesis 6 goes on to describe the flood). Read this way, there's no real tension with Psalm 90's separate statement about ordinary human life expectancy in the psalmist's own, much later time. A minority of commentators do read Genesis 6:3 as a lifespan cap, and note biblical figures after the flood generally trend toward shorter lifespans over subsequent generations, though several (e.g. Abraham at 175, Genesis 25:7) still exceed 120.",
  },
  {
    id: "judaism-children-punished",
    religionId: "judaism",
    group: "God's Nature",
    title: "Are Children Punished for Their Parents' Sins?",
    description:
      "Exodus, in the Ten Commandments, describes God visiting the guilt of the fathers on children for multiple generations; Ezekiel states explicitly that a child will not bear a parent's guilt.",
    passages: [
      {
        reference: "Exodus 20:5",
        text: "...for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate Me.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Exodus.20.5",
      },
      {
        reference: "Ezekiel 18:20",
        text: "The soul that sinneth, it shall die; the son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son...",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Ezekiel.18.20",
      },
    ],
    note: "Many commentators, ancient and modern, read Exodus 20:5 as describing consequences that unfold through ongoing human behavior and circumstance — children raised by idolatrous parents tend to continue the pattern, and are 'punished' by its natural results — rather than direct divine punishment of the innocent for someone else's sin, which is closer to how Ezekiel frames the principle. Ezekiel 18 itself explicitly addresses a popular proverb of its time ('the fathers have eaten sour grapes, and the children's teeth are set on edge,' v.2) that people were citing to blame their circumstances on their ancestors, suggesting the chapter is a deliberate corrective clarification, not a claim that Exodus was simply wrong.",
  },
  {
    id: "judaism-sacrifice-attitude",
    religionId: "judaism",
    group: "God's Nature",
    title: "Does God Want Sacrifice?",
    description:
      "Leviticus opens an extended, detailed legal code (chapters 1-7) prescribing exactly how various sacrifices are to be offered; the Psalms and the prophet Hosea both have God stating He does not desire sacrifice.",
    passages: [
      {
        reference: "Leviticus 1:3",
        text: "If his offering be a burnt-offering of the herd, he shall offer it a male without blemish; he shall bring it to the door of the tent of meeting, that he may be accepted before the LORD.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Leviticus.1.3",
      },
      {
        reference: "Psalm 40:7; Hosea 6:6",
        text: "Sacrifice and meal-offering Thou hast no delight in; mine ears hast Thou opened; burnt-offering and sin-offering hast Thou not required... For I desire mercy, and not sacrifice; and the knowledge of God rather than burnt-offerings.",
        translation: "JPS 1917",
        sourceUrl: "https://www.sefaria.org/Psalms.40.7",
      },
    ],
    note: "Widely read, including in classical Jewish commentary, as rhetorical emphasis rather than literal cancellation: the Psalms and Prophets frequently use this kind of hyperbolic 'not X but Y' construction (compare Hosea 6:6's own parallel clause) to stress that sacrifice without genuine obedience, mercy, or right relationship with God is worthless — not that the sacrificial system itself is void. The broader context of both Psalm 40 and Hosea 6 includes calls to covenant faithfulness generally, of which sacrifice was meant to be one expression, not a replacement for it.",
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
