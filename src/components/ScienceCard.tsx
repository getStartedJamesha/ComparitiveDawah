import type { ScienceTopic } from "../data/types";
import { ScienceDiagram } from "./ScienceDiagrams";

export default function ScienceCard({ topic }: { topic: ScienceTopic }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-serif text-xl font-semibold">{topic.title}</h3>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:bg-teal-950 dark:text-teal-400">
          {topic.field}
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <blockquote className="font-serif text-base leading-relaxed text-slate-800 dark:text-slate-100">
          &ldquo;{topic.passage.text}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">
          {topic.passage.reference}
        </p>
        <p className="text-xs text-slate-400">
          Translation: {topic.passage.translation}
        </p>
        <a
          href={topic.passage.sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-block text-xs font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600 dark:decoration-slate-600 dark:hover:decoration-slate-300"
        >
          Verify at the primary source ↗
        </a>
      </div>

      <ScienceDiagram id={topic.id} />

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          The popular claim
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {topic.claim}
        </p>
      </div>

      <p className="mt-4 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-3 text-xs leading-relaxed text-slate-500 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400">
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          Context worth knowing:{" "}
        </span>
        {topic.context}
      </p>
    </div>
  );
}
