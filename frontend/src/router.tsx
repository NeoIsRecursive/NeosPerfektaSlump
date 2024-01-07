import { About } from "@/routes/About";
import { Home } from "@/routes/Home";
import { Root } from "@/routes/Root";
import { Route, Router, rootRouteWithContext } from "@tanstack/react-router";
import { Group } from "./routes/Group";
import { Groups } from "./routes/Groups";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import { groupsOptions } from "./api/groups/options";
import { membersOptions } from "./api/members/options";
import { Create } from "./routes/groups/Create";

type RouterContext = {
  queryClient: QueryClient;
};

export const rootRoute = rootRouteWithContext<RouterContext>()({
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
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(groupsOptions());
  },
  getParentRoute: () => rootRoute,
  path: "/groups",
  component: Groups,
});

const createGroupRoute = new Route({
  getParentRoute: () => groupsRoute,
  path: "new",
  component: Create,
});

const groupRoute = new Route({
  loader: async ({ context: { queryClient }, params: { id } }) => {
    await queryClient.ensureQueryData(membersOptions(id));
  },
  getParentRoute: () => groupsRoute,
  path: "$id",
  component: Group,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  groupsRoute,
  createGroupRoute,
  groupRoute,
]);

export const router = new Router({ routeTree, context: { queryClient } });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
