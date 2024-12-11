import { RegisterInput } from '@/lib/Zod/authSchema';
import bcrypt from 'bcryptjs';

export const registrationContoller = async ({
  input
}: {
  input: RegisterInput;
}) => {
  try {
    const hashedPassword = await bcrypt.hash(input.password);
  } catch {}
};
