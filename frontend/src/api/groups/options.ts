import { queryOptions } from "@tanstack/react-query";
import { supabase } from "../supabase";

export const groupsOptions = () =>
  queryOptions({
    queryKey: ["groups"],
    queryFn: async () => {
      const { data, error } = await supabase.from("groups").select("*");

      if (error) {
        throw error;
      }

      return data;
    },
  });
