import type { Religion, Verse } from "../data/types";

export default function VerseCard({
  verse,
  religion,
}: {
  verse: Verse;
  religion: Religion;
}) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      style={{ borderTopColor: religion.accent, borderTopWidth: 4 }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: religion.accent }}
        >
          {religion.name}
        </span>
        <span className="text-xs text-slate-400">{religion.scripture}</span>
      </div>

      <blockquote className="mt-3 flex-1 font-serif text-lg leading-relaxed text-slate-800 dark:text-slate-100">
        &ldquo;{verse.text}&rdquo;
      </blockquote>

      <div className="mt-4 space-y-1 text-sm">
        <p className="font-medium text-slate-700 dark:text-slate-200">
          {verse.reference}
        </p>
        <p className="text-slate-400">Translation: {verse.translation}</p>
      </div>

      {verse.note && (
        <p className="mt-3 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          {verse.note}
        </p>
      )}

      <a
        href={verse.sourceUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600 dark:decoration-slate-600 dark:hover:decoration-slate-300"
        style={{ color: religion.accent }}
      >
        Verify at the primary source ↗
      </a>
    </div>
  );
}
