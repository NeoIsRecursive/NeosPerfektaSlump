import { useStoreGroup } from "@/api/groups/mutations";
import { Input } from "@/components/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const createGroupSchema = z.object({
  name: z.string(),
});

export const Create = () => {
  /**
   * Form
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createGroupSchema>>({
    resolver: zodResolver(createGroupSchema),
  });

  /**
   * Add group mutation
   */
  const { mutate: storeGroup, ...storeGroupMutation } = useStoreGroup();

  /**
   * Submit handler
   */
  const onSubmit: SubmitHandler<z.infer<typeof createGroupSchema>> = (data) =>
    storeGroup(data);

  return (
    <>
      <h1>Create new group</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} label="Name" id="name" />
        {errors.name && <p>{errors.name?.message}</p>}

        <button disabled={storeGroupMutation.isPending} type="submit">
          Create
        </button>
      </form>
    </>
  );
};
