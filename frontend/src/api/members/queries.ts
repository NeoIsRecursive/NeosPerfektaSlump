import { useQuery } from "@tanstack/react-query";
import { membersOptions } from "./options";

export const useMembers = (groupId: string) =>
  useQuery(membersOptions(groupId));
