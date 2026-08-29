import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/concepts", label: "Concepts" },
  { to: "/religions", label: "Traditions" },
  { to: "/sources", label: "Sources" },
];

function linkClasses(isActive: boolean) {
  return [
    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
    isActive
      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
  ].join(" ");
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-serif font-semibold tracking-tight">
              One God, Many Scriptures
            </span>
          </NavLink>
          <nav className="flex flex-wrap gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => linkClasses(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 sm:px-6 dark:text-slate-400">
          <p className="max-w-3xl">
            Every citation on this site links to a primary source so you can
            verify it yourself. Translations vary — please read the
            surrounding passage in its original context before sharing or
            debating any single verse.{" "}
            <NavLink to="/sources" className="underline hover:text-slate-700 dark:hover:text-slate-200">
              Learn about our sourcing approach.
            </NavLink>
          </p>
          <p className="mt-3">
            Built in a spirit of respectful, good-faith comparison across
            traditions.
          </p>
        </div>
      </footer>
    </div>
  );
}
