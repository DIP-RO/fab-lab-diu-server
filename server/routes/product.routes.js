import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

// Get all products
router.get('/products', getAllProducts);

// Get product by ID
router.get('/products/:id', getProductById);

// Create new product
router.post('/products', createProduct);

// Update product
router.put('/products/:id', updateProduct);

// Delete product
router.delete('/products/:id', deleteProduct);

export default router;
