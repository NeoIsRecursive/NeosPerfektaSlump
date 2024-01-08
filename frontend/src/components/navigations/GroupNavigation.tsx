import { Link } from "@tanstack/react-router";
import { Input } from "@/components/form/Input";
import { useState } from "react";
import { useGroups } from "@/api/groups/queries";

export const GroupNavigation = () => {
  /**
   * Search query
   */
  const [search, setSearch] = useState("");

  /**
   * Groups query
   */
  const { data: groups, ...groupsQuery } = useGroups();

  return (
    <aside>
      <nav className="flex flex-col gap-2 w-80">
        <Input
          label="Search"
          id="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {groupsQuery.isLoading ? <p>Loading...</p> : null}

        {groups ? (
          groups
            .filter((x) => String(x.name).includes(search))
            .map((group) => (
              <Link
                key={group.id}
                to="/groups/$id"
                params={{ id: group.id }}
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 data-[status=active]:bg-gray-200 hover:bg-gray-200 justify-start"
              >
                {group.name}
              </Link>
            ))
        ) : (
          <p>No groups yet</p>
        )}
        <Link
          to="/groups/new"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 data-[status=active]:bg-gray-200 hover:bg-gray-200 justify-start"
        >
          Create new group
        </Link>
      </nav>
    </aside>
  );
};
