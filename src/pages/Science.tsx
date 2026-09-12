import { scienceCategories, scienceTopicsByCategory } from "../data/science";
import ScienceCard from "../components/ScienceCard";

export default function Science() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        Science in the Qur'an
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        A well-known genre in modern Dawah (often called i'jaz 'ilmi, or
        "scientific miracles") reads certain Qur'anic verses as anticipating
        findings of modern science. The verses below are cited accurately,
        with a named translation and a link to check them yourself — but
        this page also names the popular claim as a claim, not a settled
        fact, and includes context on how classical commentators read the
        same verses centuries before modern science existed, and where
        scientists or Muslim scholars themselves urge caution.
      </p>
      <p className="mt-3 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
        Weigh both sides. A verse being compatible with a modern finding is
        a different claim from a verse having predicted it. A couple of
        entries below also note a genuine objection critics raise (an
        anatomical detail, a translation choice) rather than only the
        favorable reading.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2">
        {scienceCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {category.title}
          </a>
        ))}
      </nav>

      {scienceCategories.map((category) => {
        const topics = scienceTopicsByCategory(category.id);
        if (topics.length === 0) return null;
        return (
          <section key={category.id} id={category.id} className="mt-14 scroll-mt-20">
            <h2 className="border-b border-teal-600 pb-3 font-serif text-2xl font-semibold dark:border-teal-400">
              {category.title}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {topics.map((topic) => (
                <ScienceCard key={topic.id} topic={topic} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
