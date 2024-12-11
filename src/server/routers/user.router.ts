import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const userRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string()
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`
      };
    })
});
