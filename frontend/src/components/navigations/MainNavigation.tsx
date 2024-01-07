import { useSession } from "@/providers/SessionProvider";
import { Link } from "@tanstack/react-router";
import { tv } from "tailwind-variants";

const navLink = tv({
  base: "py-2 px-4 bg-white rounded shadow data-[status=active]:bg-gray-200 transition-colors",
});

export const MainNavigation = () => {
  const { session, logout } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <Link to="/">
        <h1 className="text-xl font-bold">Slump</h1>
      </Link>

      <div className="flex gap-4">
        <Link className={navLink()} to="/groups">
          Groups
        </Link>
        <Link className={navLink()} to="/about">
          About
        </Link>

        <button className={navLink()} onClick={logout}>
          Logout {session?.user.email}
        </button>
      </div>
    </nav>
  );
};
