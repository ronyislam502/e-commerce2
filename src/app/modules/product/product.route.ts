import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct
);

router.get("/", ProductControllers.getAllProducts);

router.get("/:productId", ProductControllers.getSingleProducts);

router.put(
  "/:productId",
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct
);

router.delete("/:productId", ProductControllers.deleteProducts);

export const ProductRoutes = router;
