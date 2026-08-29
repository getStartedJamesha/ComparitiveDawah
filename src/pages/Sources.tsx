const primarySources = [
  {
    name: "Quran.com",
    detail:
      "Arabic text alongside multiple English translations (default: Sahih International) for every verse of the Qur'an.",
    url: "https://quran.com",
  },
  {
    name: "Sefaria",
    detail:
      "The Hebrew Bible (Tanakh) in Hebrew with the JPS translation and classical commentaries, freely searchable.",
    url: "https://www.sefaria.org",
  },
  {
    name: "BibleGateway",
    detail:
      "The Bible in dozens of translations (KJV, NIV, ESV, and more) for direct comparison.",
    url: "https://www.biblegateway.com",
  },
  {
    name: "Holy Bhagavad Gita",
    detail:
      "Sanskrit verses of the Bhagavad Gita with word-for-word breakdowns and multiple English translations.",
    url: "https://www.holy-bhagavad-gita.org",
  },
  {
    name: "Sacred-Texts.com",
    detail:
      "Public-domain translations of the Rig Veda, Upanishads, and other primary Hindu texts (Griffith, Max Müller).",
    url: "https://www.sacred-texts.com",
  },
];

export default function Sources() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold">
        Our sourcing approach
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Getting scripture right matters — especially when the goal is
        honest, respectful comparison. Here is exactly how citations on this
        site are chosen and what we ask readers to do before relying on
        them.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="font-serif text-xl font-semibold">
            1. Only well-attested verses
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Every verse quoted here is a commonly cited, non-fringe passage
            within its own tradition — not an obscure or disputed reading
            selected to score a rhetorical point.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold">
            2. Every quotation names its translation
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            No verse is presented as "the" wording of a scripture.
            Translation always involves interpretive choices, so each verse
            card states exactly which named translation was used (e.g. Sahih
            International, King James Version, JPS 1917, Prabhupada's
            Bhagavad-gita As It Is).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold">
            3. Every quotation links to a primary source
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Click "Verify at the primary source" on any verse card to read it
            in full context, in the original language where available, and
            in other translations. Please do this before quoting a verse
            elsewhere — surrounding context matters, and reputable primary
            sources are the final authority, not this site.
          </p>
          <ul className="mt-3 space-y-3">
            {primarySources.map((source) => (
              <li
                key={source.name}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600"
                >
                  {source.name} ↗
                </a>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {source.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold">
            4. Differences are named, not smoothed over
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Where traditions genuinely diverge — for example, the Trinity in
            Christian theology, or reincarnation versus bodily resurrection
            — a note on the verse card says so plainly. The goal is honest
            comparison, not forcing every tradition to say the same thing.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold">
            5. Corrections are welcome
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            If you believe a citation is mistranslated, mis-cited, or
            presented out of context, we want to know and will correct it.
            Comparative religion touches deeply held convictions, and
            accuracy is the minimum bar for that conversation to be
            worthwhile.
          </p>
        </section>
      </div>
    </div>
  );
}
