import express from "express";
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/order.controller.js';

const router = express.Router();

// Get all orders
router.get('/orders', getAllOrders);

// Get order by ID
router.get('/orders/:id', getOrderById);

// Create new order
router.post('/orders', createOrder);

// Update order
router.put('/orders/:id', updateOrder);

// Delete order
router.delete('/orders/:id', deleteOrder);

export default router;
