import { GroupNavigation } from "@/components/navigations/GroupNavigation";
import { Outlet } from "@tanstack/react-router";

export const Groups = () => {
  return (
    <div className="flex gap-4">
      <GroupNavigation />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
