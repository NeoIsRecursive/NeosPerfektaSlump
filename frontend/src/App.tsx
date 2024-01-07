import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { SessionProvider } from "./providers/SessionProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

export const App = () => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </SessionProvider>
);
