import { Link } from "@tanstack/react-router";
import { Input } from "@/components/form/Input";
import { useState } from "react";
import { useGroups } from "@/api/groups/queries";

export const GroupNavigation = () => {
  const [search, setSearch] = useState("");
  const { data: groups, ...groupsQuery } = useGroups();

  return (
    <nav className="flex flex-col gap-2">
      <Input label="Search" id="search" value={search} onChange={setSearch} />

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
    </nav>
  );
};
