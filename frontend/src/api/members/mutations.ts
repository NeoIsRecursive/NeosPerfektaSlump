import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase";
import { queryClient } from "../queryClient";
import { membersOptions } from "./options";

export const useStoreMember = () =>
  useMutation({
    mutationFn: async (body: { name: string; group_id: string }) => {
      const { data, error } = await supabase.from("members").insert(body);

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: (_, { group_id }) => {
      queryClient.invalidateQueries(membersOptions(group_id));
    },
  });
