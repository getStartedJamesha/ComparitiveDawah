import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { search } from "../search/searchIndex";

const TYPE_STYLES: Record<string, string> = {
  Concept: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400",
  Tradition: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  Verse: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  Contradiction: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  Science: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  Prophecy: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400",
  "Muhammad's Prophecy":
    "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400",
};

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  const results = useMemo(() => search(q), [q]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Search</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Search across every concept, verse, contradiction, science claim, and
        prophecy on the site — by topic, keyword, or scripture reference
        (e.g. "Genesis 1", "mountains", "Trinity", "Paraclete").
      </p>

      <div className="mt-6">
        <input
          type="search"
          autoFocus
          value={q}
          onChange={(e) => {
            const value = e.target.value;
            setParams(value ? { q: value } : {}, { replace: true });
          }}
          placeholder="Search verses, topics, contradictions…"
          className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-teal-400"
        />
      </div>

      <div className="mt-8">
        {q.trim() === "" ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Type to search across concepts, verses, contradictions, science
            claims, and prophecies.
          </p>
        ) : results.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No results for &ldquo;{q}&rdquo;. Try a different word or a
            shorter scripture reference (e.g. "John 14" instead of "John
            14:16-17").
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              {results.length} result{results.length === 1 ? "" : "s"}
            </p>
            <ul className="space-y-3">
              {results.map((r) => (
                <li key={r.id}>
                  <Link
                    to={r.url}
                    className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                    style={r.accent ? { borderLeftColor: r.accent, borderLeftWidth: 4 } : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${TYPE_STYLES[r.type] ?? ""}`}
                      >
                        {r.type}
                      </span>
                      <span className="font-serif text-base font-semibold">
                        {r.title}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {r.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
