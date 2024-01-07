import { useGroup } from "@/api/groups/queries";
import { useMembers } from "@/api/members/queries";
import { useParams } from "@tanstack/react-router";

export const Group = () => {
  const { id } = useParams({ from: "/groups/$id" });

  const { data: group, ...groupQuery } = useGroup(id);
  const { data: members, ...membersQuery } = useMembers(id);

  return (
    <>
      {membersQuery.isLoading || groupQuery.isLoading ? (
        <p>Loading...</p>
      ) : null}

      <h1>{group?.name}</h1>
      {members ? (
        <ul>
          {members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
