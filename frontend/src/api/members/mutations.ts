import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase";

export const useStoreMember = () =>
  useMutation({
    mutationFn: async (body: { name: string; group_id: string }) => {
      const { data, error } = await supabase.from("members").insert(body);

      if (error) {
        throw error;
      }

      return data;
    },
  });
