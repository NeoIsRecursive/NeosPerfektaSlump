import { queryOptions } from "@tanstack/react-query";
import { supabase } from "../supabase";

/**
 * get all groups
 */
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

/**
 * get a single group
 */
export const groupOptions = (id: string) => {
  return queryOptions({
    queryKey: ["group", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("groups")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });
};
