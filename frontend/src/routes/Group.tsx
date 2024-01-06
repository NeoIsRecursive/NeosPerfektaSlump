import { useParams } from "@tanstack/react-router";

export const Group = () => {
  const { id } = useParams({ from: "/groups/$id" });

  return (
    <>
      <h1>Group {id}</h1>
      <p>Group {id} is a great group!</p>
    </>
  );
};
