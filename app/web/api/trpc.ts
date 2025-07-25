import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { createTRPCContext } from "@/modules/trpc/trpc-config";
import { appRouter } from "@/modules/trpc/trpc-router";

export const loader = ({ request }: LoaderFunctionArgs) => {
  return handleRequest(request);
};

export const action = ({ request }: ActionFunctionArgs) => {
  return handleRequest(request);
};

function handleRequest(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createTRPCContext({ headers: request.headers }),
  });
}
