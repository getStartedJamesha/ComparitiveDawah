import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  muhammadPropheciesByCategory,
} from "../data/muhammadProphecies";
import MuhammadProphecyCard from "../components/MuhammadProphecyCard";

export default function MuhammadProphecies() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        Prophecies of Muhammad ﷺ
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        Separately from what other scriptures are said to foretell about him,
        Muhammad ﷺ is reported to have made a number of predictions himself.
        Each entry below states the claim honestly, cites the Qur'an or
        hadith it comes from, and gives the same kind of honest historical
        context this site gives everywhere else — including a skeptical
        counter-reading where one exists, and a plain "this hasn't happened
        yet" for claims that are still pending.
      </p>
      <p className="mt-3 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
        Hadith citations here link to a sunnah.com search for the report's
        distinctive wording rather than a specific hadith number — printed
        collections use several competing numbering systems, so a search you
        can run yourself is more reliable than a guessed permalink. The
        "Grading" line on each hadith states its standard authentication
        (Sahih, Hasan, etc.), including where scholars are divided.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2">
        {CATEGORY_ORDER.map((category) => (
          <a
            key={category}
            href={`#${category}`}
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {CATEGORY_LABELS[category]}
          </a>
        ))}
      </nav>

      {CATEGORY_ORDER.map((category) => {
        const items = muhammadPropheciesByCategory(category);
        if (items.length === 0) return null;
        return (
          <section key={category} id={category} className="mt-14 scroll-mt-20">
            <div className="border-b border-slate-300 pb-3 dark:border-slate-700">
              <h2 className="font-serif text-2xl font-semibold">
                {CATEGORY_LABELS[category]}
              </h2>
            </div>

            <div className="mt-6 space-y-6">
              {items.map((item) => (
                <MuhammadProphecyCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
