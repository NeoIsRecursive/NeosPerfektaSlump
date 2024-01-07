import { useQuery } from "@tanstack/react-query";
import { groupOptions, groupsOptions } from "./options";

export const useGroups = () => useQuery(groupsOptions());

export const useGroup = (id: string) => useQuery(groupOptions(id));
