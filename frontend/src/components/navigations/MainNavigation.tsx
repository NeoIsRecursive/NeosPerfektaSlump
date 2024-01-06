import { Link } from "@tanstack/react-router";
import { tv } from "tailwind-variants";

const navLink = tv({
  base: "py-2 px-4 font-mono bg-white rounded shadow data-[status=active]:bg-gray-200 transition-colors",
});

export const MainNavigation = () => (
  <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
    <h1 className="text-xl font-bold font-mono">Slump</h1>

    <div className="flex gap-4">
      <Link className={navLink()} to="/">
        Groups
      </Link>
      <Link className={navLink()} to="/about">
        About
      </Link>
    </div>
  </nav>
);
