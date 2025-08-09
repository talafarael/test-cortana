import { z } from "zod";

export const RegistrationValid = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),

  email: z.string().email("Invalid email format"),

  password: z.string()
    .min(3, "Password must be at least 3 characters long")
    .max(100, "Password is too long"),
});

export type RegisterValidType = z.infer<typeof RegistrationValid>;
