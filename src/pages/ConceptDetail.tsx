import { Link, Navigate, useParams } from "react-router-dom";
import { conceptById, concepts } from "../data/concepts";
import { religions } from "../data/religions";
import { versesByConcept } from "../data/verses";
import VerseCard from "../components/VerseCard";

export default function ConceptDetail() {
  const { conceptId } = useParams();
  const concept = conceptId ? conceptById(conceptId) : undefined;

  if (!concept) return <Navigate to="/concepts" replace />;

  const verses = versesByConcept(concept.id);
  const currentIndex = concepts.findIndex((c) => c.id === concept.id);
  const prev = concepts[(currentIndex - 1 + concepts.length) % concepts.length];
  const next = concepts[(currentIndex + 1) % concepts.length];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        to="/concepts"
        className="text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
      >
        ← All concepts
      </Link>

      <h1 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
        {concept.title}
      </h1>
      <p className="mt-2 text-lg italic text-slate-500 dark:text-slate-400">
        {concept.question}
      </p>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        {concept.summary}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {religions.map((religion) => {
          const verse = verses.find((v) => v.religionId === religion.id);
          if (!verse) return null;
          return (
            <VerseCard key={religion.id} verse={verse} religion={religion} />
          );
        })}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6 text-sm dark:border-slate-800">
        <Link
          to={`/concepts/${prev.id}`}
          className="font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          ← {prev.title}
        </Link>
        <Link
          to={`/concepts/${next.id}`}
          className="font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          {next.title} →
        </Link>
      </div>
    </div>
  );
}
