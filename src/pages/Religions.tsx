import { Link } from "react-router-dom";
import { religions } from "../data/religions";

export default function Religions() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold">The traditions</h1>
      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
        A brief overview of each tradition, and every verse referenced on
        this site for that tradition, grouped by theological concept.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {religions.map((religion) => (
          <Link
            key={religion.id}
            to={`/religions/${religion.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            style={{ borderTopColor: religion.accent, borderTopWidth: 4 }}
          >
            <h2 className="font-serif text-2xl font-semibold">
              {religion.name}
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {religion.scripture}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {religion.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
