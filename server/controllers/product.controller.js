import Product from "../models/product.model.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in getAllProducts: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error in getProductById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new product
export const createProduct = async (req, res) => {
  const { name, category, price, description, details } = req.body;
  try {
    const newProduct = await Product.create({ name, category, price, description, details });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error in createProduct: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  const { name, category, price, description, details } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
      { name, category, price, description, details },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error in updateProduct: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in deleteProduct: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
