import { Link, Navigate, useParams } from "react-router-dom";
import { religionById } from "../data/religions";
import { concepts } from "../data/concepts";
import { versesByReligion } from "../data/verses";

export default function ReligionDetail() {
  const { religionId } = useParams();
  const religion = religionId ? religionById(religionId) : undefined;

  if (!religion) return <Navigate to="/religions" replace />;

  const verses = versesByReligion(religion.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        to="/religions"
        className="text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
      >
        ← All traditions
      </Link>

      <div
        className="mt-4 rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
        style={{ borderTopColor: religion.accent, borderTopWidth: 4 }}
      >
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
          {religion.name}
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {religion.scripture}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {religion.description}
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {concepts.map((concept) => {
          const verse = verses.find((v) => v.conceptId === concept.id);
          if (!verse) return null;
          return (
            <div key={concept.id}>
              <Link
                to={`/concepts/${concept.id}`}
                className="font-serif text-xl font-semibold hover:underline"
              >
                {concept.title}
              </Link>
              <blockquote className="mt-2 border-l-4 pl-4 font-serif text-lg leading-relaxed text-slate-700 dark:text-slate-200"
                style={{ borderColor: religion.accent }}
              >
                &ldquo;{verse.text}&rdquo;
              </blockquote>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {verse.reference} · {verse.translation} ·{" "}
                <a
                  href={verse.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600"
                >
                  verify source ↗
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
