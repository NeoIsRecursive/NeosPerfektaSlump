import { Link } from "@tanstack/react-router";
import { Input } from "@/components/form/Input";
import { useState } from "react";

type Props = {
  groups: number[];
};

export const GroupNavigation = ({ groups }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex flex-col gap-2">
      <Input label="Search" id="search" value={search} onChange={setSearch} />
      {groups
        .filter((x) => String(x).includes(search))
        .map((id) => (
          <Link
            to="/groups/$id"
            params={{ id: String(id) }}
            className="data-[status=active]:text-blue-600"
          >
            Group {id}
          </Link>
        ))}
    </nav>
  );
};
