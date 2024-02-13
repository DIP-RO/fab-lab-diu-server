import Order from "../models/order.model.js";

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error in getAllOrders: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getOrderById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new order
export const createOrder = async (req, res) => {
  const { customerName, productName, quantity, totalPrice, shippingAddress } = req.body;
  try {
    const newOrder = await Order.create({ customerName, productName, quantity, totalPrice, shippingAddress });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error in createOrder: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  const { customerName, productName, quantity, totalPrice, status, shippingAddress } = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
      { customerName, productName, quantity, totalPrice, status, shippingAddress },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error in updateOrder: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error in deleteOrder: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
