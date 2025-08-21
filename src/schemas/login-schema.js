import z from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório')
})