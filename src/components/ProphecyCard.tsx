import type { Prophecy } from "../data/types";

export default function ProphecyCard({ item }: { item: Prophecy }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>

      {item.passage ? (
        <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
          <blockquote className="font-serif text-base leading-relaxed text-slate-800 dark:text-slate-100">
            &ldquo;{item.passage.text}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {item.passage.reference}
          </p>
          <p className="text-xs text-slate-400">
            Translation: {item.passage.translation}
          </p>
          <a
            href={item.passage.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-block text-xs font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600 dark:decoration-slate-600 dark:hover:decoration-slate-300"
          >
            Verify at the primary source ↗
          </a>
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-400">
            No citation given here — the text's authenticity and dating is
            itself the disputed point. See the context below.
          </p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          The claim
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {item.claim}
        </p>
      </div>

      <p className="mt-4 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400">
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          Context worth knowing:{" "}
        </span>
        {item.context}
      </p>
    </div>
  );
}
