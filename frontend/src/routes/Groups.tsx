import { GroupNavigation } from "@/components/navigations/GroupNavigation";
import { Outlet } from "@tanstack/react-router";

export const Groups = () => {
  return (
    <div className="flex gap-4">
      <GroupNavigation groups={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
