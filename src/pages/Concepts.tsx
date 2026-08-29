import { Link } from "react-router-dom";
import { concepts } from "../data/concepts";

export default function Concepts() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold">
        Theological concepts
      </h1>
      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
        Seven questions that sit at the heart of comparative theology. Choose
        one to see how Islam, Christianity, Judaism, and Hinduism each
        answer it in their own scripture.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {concepts.map((concept) => (
          <Link
            key={concept.id}
            to={`/concepts/${concept.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="font-serif text-xl font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-400">
              {concept.title}
            </h2>
            <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-400">
              {concept.question}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {concept.summary}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-teal-700 dark:text-teal-400">
              Compare all four traditions →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
