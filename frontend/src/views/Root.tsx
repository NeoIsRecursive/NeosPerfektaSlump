import { Outlet } from "@tanstack/react-router";
import { MainNavigation } from "@/components/navigations/MainNavigation";

export const Root = () => (
  <>
    <MainNavigation />
    <main className="p-4 max-w-7xl mx-auto">
      <Outlet />
    </main>
  </>
);
