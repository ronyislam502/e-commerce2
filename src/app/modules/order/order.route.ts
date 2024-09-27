import express from "express";
import { OderControllers } from "./order.controller";

const router = express.Router();

router.post("/create-order", OderControllers.createOrder);

router.get("/", OderControllers.getAllOrders);

router.get("/search", OderControllers.getOrderByEmail);

export const OrderRoutes = router;
