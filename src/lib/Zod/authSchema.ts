import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string(),
    role: z.enum([
      'ADMIN',
      'WHEREHOUSE_WORKER',
      'VIEWER',
      'MAINTENANCE',
      'SUPERVISOR',
      'MANAGER',
      'INVENTORY_MANAGER'
    ]),
    passwordConfirm: z
      .string({
        required_error: 'Please confirm your password'
      })
      .min(1, 'Please confirm your password')
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
