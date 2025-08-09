import z from "zod";

export const LoginValid = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string()
    .min(3, "Password must be at least 3 characters long")
    .max(100, "Password is too long"),
});
export type LoginValidType = z.infer<typeof LoginValid>;

