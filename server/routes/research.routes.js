// researchRoutes.js
import express from "express";
import { getAllResearch, getResearchById, createResearch, updateResearch, deleteResearch } from '../controllers/research.controller.js';

const router = express.Router();


// Get all research
router.get('/research', getAllResearch);

// Get research by ID
router.get('/research/:id', getResearchById);

// Create new research
router.post('/research', createResearch);

// Update research
router.put('/research/:id', updateResearch);

// Delete research
router.delete('/research/:id', deleteResearch);

export default router;
