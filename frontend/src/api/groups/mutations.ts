import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase";
import { queryClient } from "../queryClient";
import { groupsOptions } from "./options";

export const useStoreGroup = () =>
  useMutation({
    mutationFn: async (body: { name: string }) => {
      const { data, error } = await supabase.from("groups").insert(body);

      if (error) {
        throw error;
      }

      return data;
    },
    onError: (error) => {
      alert(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(groupsOptions());
    },
  });
