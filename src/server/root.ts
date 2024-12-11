import { authRouter } from './routers/auth.router';
import { barcodeRouter } from './routers/barcode.router';
import { locationsRouter } from './routers/locations.router';
import { productRouter } from './routers/product.router';
import { tasksRouter } from './routers/tasks.router';
import { userRouter } from './routers/user.router';
import { router } from './trpc';

export const appRouter = router({
  auth: authRouter,
  barcode: barcodeRouter,
  location: locationsRouter,
  product: productRouter,
  tasks: tasksRouter,
  user: userRouter
});

export type AppRouter = typeof appRouter;
