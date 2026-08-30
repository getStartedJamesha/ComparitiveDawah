# One God, Many Scriptures — Comparative Dawah

A comparative-theology web app for Dawah: it lays out how Islam, Christianity,
Judaism, and Hinduism each speak — in their own scripture — about the oneness
of God, creation, mercy, prophets, the afterlife, and God's knowledge and
power.

Every quoted verse names its specific translation and links to a primary,
independently checkable source (Quran.com, Sefaria, BibleGateway,
holy-bhagavad-gita.org, sacred-texts.com) so readers can verify it themselves
rather than take the app's word for it. See the in-app **Sources** page for
the full sourcing methodology.

## Stack

- React + TypeScript + Vite
- React Router
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```

Want to run this permanently on your own hardware (e.g. a Raspberry Pi)
instead of just locally? See [`deploy/README.md`](deploy/README.md) for a
step-by-step guide, including a systemd service so it survives reboots.

## Structure

- `src/data/` — the religions, concepts, verses, contradictions, science
  topics, and prophecies (with citations) that drive the entire site. This
  is the part to edit/extend carefully.
- `src/components/` — shared UI (layout, verse/contradiction/science/
  prophecy cards).
- `src/pages/` — routed pages: Home, Concepts, Concept detail, Religions,
  Religion detail, Contradictions, Science, Prophecies, Sources.

## A note on the Science and Prophecies sections

Both present popular Dawah claims honestly — but neither presents a claim
as settled fact just because it's popular. Every entry states the claim,
gives an authentic citation where one exists, and also gives the honest
counter-context: how classical commentators or the other tradition's own
mainstream reading actually understands the same passage, including plain
facts about manuscript evidence where relevant (see the Paraclete entry in
Prophecies). One entry (the Bhavishya Purana) deliberately has no citation
at all, because that passage's authenticity and dating is itself the
disputed point — see `src/data/prophecies.ts` for why. This follows the
same sourcing policy as the rest of the site, documented in full on the
in-app **Sources** page.
