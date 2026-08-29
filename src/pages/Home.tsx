import { Link } from "react-router-dom";
import { concepts } from "../data/concepts";
import { religions } from "../data/religions";

export default function Home() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            A resource for Dawah &amp; comparative theology
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            One God. Every scripture points back to Him.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Explore how the Qur'an, the Bible, the Tanakh, and Hindu
            scripture each speak about the oneness of God, creation, mercy,
            and the life to come — side by side, with every quotation linked
            to a primary source you can check for yourself.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/concepts/oneness"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Start with the Oneness of God
            </Link>
            <Link
              to="/concepts"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Browse all concepts
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              Theological concepts
            </h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Pick a question and see how each tradition's own scripture
              answers it.
            </p>
          </div>
          <Link
            to="/concepts"
            className="hidden shrink-0 text-sm font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600 sm:inline"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              to={`/concepts/${concept.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-serif text-lg font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-400">
                {concept.title}
              </h3>
              <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-400">
                {concept.question}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {concept.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold">
            The four traditions
          </h2>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Each tradition's overview page collects every verse referenced
            on this site, grouped by concept.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {religions.map((religion) => (
              <Link
                key={religion.id}
                to={`/religions/${religion.id}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                style={{ borderTopColor: religion.accent, borderTopWidth: 4 }}
              >
                <h3 className="font-serif text-lg font-semibold">
                  {religion.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  {religion.scripture}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {religion.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="font-serif text-2xl font-semibold">
            Internal tensions &amp; contradictions
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            A fair comparison also looks at places where a tradition's own
            scripture appears to say two different things. This section
            covers Christianity, Judaism, and Hinduism, with every passage
            cited and linked to a primary source.
          </p>
          <Link
            to="/contradictions"
            className="mt-4 inline-block rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Explore internal tensions →
          </Link>
        </div>
      </section>
    </div>
  );
}
