import { useQuery } from "@tanstack/react-query";
import { groupsOptions } from "./options";

export const useGroups = () => useQuery(groupsOptions());
