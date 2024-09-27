import { z } from "zod";

export const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  }),
});

const updateProductVariantValidationSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const updateProductInventoryValidationSchema = z.object({
  quantity: z.number().optional(),
  isStock: z.boolean().optional(),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(updateProductVariantValidationSchema),
    inventory: updateProductInventoryValidationSchema,
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
