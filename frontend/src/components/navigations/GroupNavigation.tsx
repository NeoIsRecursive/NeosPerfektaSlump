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
    <nav className="flex flex-col gap-2">
      <Input
        label="Search"
        id="search"
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
              className="data-[status=active]:text-blue-600"
            >
              {group.name}
            </Link>
          ))
      ) : (
        <p>No groups yet</p>
      )}
      <Link to="/groups/new">Create new group</Link>
    </nav>
  );
};
