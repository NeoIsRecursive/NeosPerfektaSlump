import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Root } from "@/routes/Root";
import { Home } from "@/routes/Home";
import { About } from "@/routes/About";
import { Groups } from "./routes/Groups";
import { Group } from "./routes/Group";
import { Login } from "./routes/auth/Login";
import { Register } from "./routes/auth/Register";

export const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
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
  registerRoute,
  loginRoute,
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
