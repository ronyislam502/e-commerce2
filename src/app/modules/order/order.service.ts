import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const product = await Product.findById(payload.productId);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  if (payload.quantity > product.inventory.quantity) {
    throw new AppError(httpStatus.BAD_REQUEST, "Insufficient stock");
  }

  const order = await Order.create(payload);
  console.log(order);

  product.inventory.quantity -= payload.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();
  return order;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
