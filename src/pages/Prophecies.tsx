import { religions } from "../data/religions";
import { propheciesByReligion } from "../data/prophecies";
import type { ProphecyReligionId } from "../data/types";
import ProphecyCard from "../components/ProphecyCard";

const sectionOrder: ProphecyReligionId[] = ["judaism", "christianity", "hinduism"];

export default function Prophecies() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        Prophecies of Muhammad ﷺ in Other Scriptures
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        A recurring theme in Dawah is the claim that earlier scriptures
        foretold the coming of Muhammad ﷺ. Each entry below states that
        claim honestly, gives an authentic citation where one exists, and
        also gives the tradition's own mainstream reading of the same
        passage — including, in one case, a direct fact about manuscript
        evidence that bears on the claim.
      </p>
      <p className="mt-3 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
        One entry (the Bhavishya Purana) has no verse citation at all — see
        why in that entry. Presenting a confident-looking reference for a
        passage whose age is the actual point in dispute would work against
        this site's own standard for what counts as an authentic source.
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
        const items = propheciesByReligion(id);
        return (
          <section key={id} id={id} className="mt-14 scroll-mt-20">
            <div className="border-b pb-3" style={{ borderColor: religion.accent }}>
              <h2 className="font-serif text-2xl font-semibold">
                {religion.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {religion.scripture}
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {items.map((item) => (
                <ProphecyCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
