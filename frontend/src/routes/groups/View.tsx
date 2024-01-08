import { useGroup } from "@/api/groups/queries";
import { useStoreMember } from "@/api/members/mutations";
import { useMembers } from "@/api/members/queries";
import { Input } from "@/components/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createMemberSchema = z.object({
  name: z.string().min(1),
  group_id: z.string(),
});

type CreateMemberSchema = z.infer<typeof createMemberSchema>;

export const View = () => {
  /**
   * Get the params
   */
  const { id } = useParams({ from: "/groups/$id" });

  /**
   * Queries
   */
  const { data: group, ...groupQuery } = useGroup(id);
  const { data: members, ...membersQuery } = useMembers(id);

  /**
   * Mutations
   */
  const { mutate, ...storeMemberMut } = useStoreMember();

  /**
   * Form
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateMemberSchema>({
    resolver: zodResolver(createMemberSchema),
    defaultValues: {
      group_id: id,
    },
  });

  return (
    <>
      <h1 className="text-xl font-bold mb-2">{group?.name}</h1>
      {membersQuery.isLoading || groupQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <form
          onSubmit={handleSubmit((e) => {
            mutate(e);
            reset({ name: "", group_id: id });
          })}
        >
          <Input {...register("name")} label="Name" id="name" />
          {errors.name && <p>{errors.name.message}</p>}

          <button type="submit" disabled={storeMemberMut.isPending}>
            add
          </button>
        </form>
      )}

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
