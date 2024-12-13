import { appRouter } from '@/server/root';
import { createContext } from '@/server/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext
  });
export { handler as GET, handler as POST };
