import { queryOptions } from "@tanstack/react-query";
import { supabase } from "../supabase";

export const membersOptions = (groupId: string) =>
  queryOptions({
    queryKey: ["members", groupId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("group_id", groupId);

      if (error) {
        throw error;
      }

      return data;
    },
  });
