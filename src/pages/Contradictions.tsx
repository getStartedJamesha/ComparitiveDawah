import { Link } from "react-router-dom";
import { religions } from "../data/religions";
import { contradictionsByReligion } from "../data/contradictions";
import type { ContradictionReligionId } from "../data/types";
import ContradictionCard from "../components/ContradictionCard";

const sectionOrder: ContradictionReligionId[] = [
  "christianity",
  "judaism",
  "hinduism",
];

export default function Contradictions() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        Internal Tensions &amp; Contradictions
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        Comparative theology also has to look honestly at places where a
        tradition's own scripture appears to say two different things.
        Below are well-documented tensions within Christianity, Judaism, and
        Hinduism — each with the exact passages side by side, the specific
        translation used, a link to verify it at a primary source, and a
        brief note on how the tradition itself has addressed it.
      </p>
      <p className="mt-3 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
        This page intentionally does not cover Islam or the Qur'an. Nothing
        here claims these tensions are unanswerable — many have long-standing
        traditional or scholarly responses, which are noted alongside each
        entry.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2">
        {sectionOrder.map((id) => {
          const religion = religions.find((r) => r.id === id)!;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              style={{ borderColor: religion.accent }}
            >
              {religion.name}
            </a>
          );
        })}
      </nav>

      {sectionOrder.map((id) => {
        const religion = religions.find((r) => r.id === id)!;
        const items = contradictionsByReligion(id);
        return (
          <section key={id} id={id} className="mt-14 scroll-mt-20">
            <div
              className="border-b pb-3"
              style={{ borderColor: religion.accent }}
            >
              <h2 className="font-serif text-2xl font-semibold">
                {religion.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {religion.scripture} ·{" "}
                <Link
                  to={`/religions/${religion.id}`}
                  className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600"
                >
                  see this tradition's affirmative verses
                </Link>
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {items.map((item) => (
                <ContradictionCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
