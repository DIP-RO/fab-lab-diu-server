import express from "express";
import { getAllIdeas, getIdeaById, createIdea, updateIdea, deleteIdea } from '../controllers/idea.controller.js';

const router = express.Router();

// Get all ideas
router.get('/ideas', getAllIdeas);

// Get idea by ID
router.get('/ideas/:id', getIdeaById);

// Create new idea
router.post('/ideas', createIdea);

// Update idea
router.put('/ideas/:id', updateIdea);

// Delete idea
router.delete('/ideas/:id', deleteIdea);

export default router;
