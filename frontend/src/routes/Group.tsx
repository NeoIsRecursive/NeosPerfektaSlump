import { useMembers } from "@/api/members/queries";
import { useParams } from "@tanstack/react-router";

export const Group = () => {
  const { id } = useParams({ from: "/groups/$id" });

  const { data: members, ...membersQuery } = useMembers(id);

  return (
    <>
      <h1>Group {id}</h1>
      {membersQuery.isLoading ? <p>Loading...</p> : null}
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
