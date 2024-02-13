import express from "express";
import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../controllers/event.controller.js';

const router = express.Router();

// Get all events
router.get('/events', getAllEvents);

// Get event by ID
router.get('/events/:id', getEventById);

// Create new event
router.post('/events', createEvent);

// Update event
router.put('/events/:id', updateEvent);

// Delete event
router.delete('/events/:id', deleteEvent);

export default router;
