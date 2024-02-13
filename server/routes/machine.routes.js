import express from "express";
import { getAllMachineries, getMachineryById, createMachinery, updateMachinery, deleteMachinery } from '../controllers/machine.controller.js';

const router = express.Router();

// Get all machineries
router.get('/machineries', getAllMachineries);

// Get machinery by ID
router.get('/machineries/:id', getMachineryById);

// Create new machinery
router.post('/machineries', createMachinery);

// Update machinery
router.put('/machineries/:id', updateMachinery);

// Delete machinery
router.delete('/machineries/:id', deleteMachinery);

export default router;
