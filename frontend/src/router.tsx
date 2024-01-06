import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Root } from "@/views/Root";
import { Home } from "@/views/Home";
import { About } from "@/views/About";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
