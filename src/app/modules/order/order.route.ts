import express from "express";

import { OderControllers } from "./order.controller";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(OrderValidations.orderValidationSchema),
  OderControllers.createOrder
);

router.get("/", OderControllers.getAllOrders);

router.get("/:email", OderControllers.getOrderByEmail);
export const OrderRoutes = router;
