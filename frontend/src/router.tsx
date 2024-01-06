import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Root } from "@/routes/Root";
import { Home } from "@/routes/Home";
import { About } from "@/routes/About";
import { Groups } from "./routes/Groups";
import { Group } from "./routes/Group";

export const rootRoute = new RootRoute({
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

const groupsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/groups",
  component: Groups,
});

const groupRoute = new Route({
  getParentRoute: () => groupsRoute,
  path: "$id",
  component: Group,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  groupsRoute,
  groupRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
