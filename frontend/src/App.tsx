import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { SessionProvider } from "./providers/SessionProvider";

export const App = () => (
  <SessionProvider>
    <RouterProvider router={router} />
  </SessionProvider>
);
