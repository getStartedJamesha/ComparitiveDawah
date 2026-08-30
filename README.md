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

- `src/data/` — the religions, concepts, and verses (with citations) that
  drive the entire site. This is the part to edit/extend carefully.
- `src/components/` — shared UI (layout, verse card, contradiction card).
- `src/pages/` — routed pages: Home, Concepts, Concept detail, Religions,
  Religion detail, Contradictions, Sources.
