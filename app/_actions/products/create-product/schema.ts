import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório",
  }),
  price: z.number().min(0.01, {
    message: "O preço é obrigatório",
  }),
  stock: z.coerce.number().positive().int().min(0, {
    message: "O estoque é obrigatório",
  }),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
