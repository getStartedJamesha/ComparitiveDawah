import type { Contradiction } from "../data/types";

export default function ContradictionCard({ item }: { item: Contradiction }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {item.description}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {item.passages.map((passage, i) => (
          <div key={i} className="relative">
            {i > 0 && (
              <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:-left-4 sm:top-1/2 sm:block sm:-translate-y-1/2 sm:-translate-x-full">
                vs.
              </span>
            )}
            <div className="h-full rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
              <blockquote className="font-serif text-base leading-relaxed text-slate-800 dark:text-slate-100">
                &ldquo;{passage.text}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                {passage.reference}
              </p>
              <p className="text-xs text-slate-400">
                Translation: {passage.translation}
              </p>
              <a
                href={passage.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-xs font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600 dark:decoration-slate-600 dark:hover:decoration-slate-300"
              >
                Verify at the primary source ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {item.note && (
        <p className="mt-5 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400">
          <span className="font-semibold text-slate-600 dark:text-slate-300">
            How this is addressed:{" "}
          </span>
          {item.note}
        </p>
      )}
    </div>
  );
}
