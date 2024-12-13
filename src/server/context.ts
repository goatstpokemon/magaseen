import { getAuth } from '@clerk/nextjs/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import * as trpc from '@trpc/server';
export const createContext = async (opts: FetchCreateContextFnOptions) => {
  return { auth: getAuth(opts.req) };
};
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
