import Machinery from "../models/machine.model.js";

// Get all machineries
export const getAllMachineries = async (req, res) => {
  try {
    const machineries = await Machinery.find();
    res.status(200).json(machineries);
  } catch (error) {
    console.error("Error in getAllMachineries: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get machinery by ID
export const getMachineryById = async (req, res) => {
  try {
    const machinery = await Machinery.findById(req.params.id);
    if (!machinery) {
      return res.status(404).json({ error: "Machinery not found" });
    }
    res.status(200).json(machinery);
  } catch (error) {
    console.error("Error in getMachineryById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new machinery
export const createMachinery = async (req, res) => {
  const { name, description, type, status, location, lastMaintenanceDate } = req.body;
  try {
    const newMachinery = await Machinery.create({ name, description, type, status, location, lastMaintenanceDate });
    res.status(201).json(newMachinery);
  } catch (error) {
    console.error("Error in createMachinery: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update machinery
export const updateMachinery = async (req, res) => {
  const { name, description, type, status, location, lastMaintenanceDate } = req.body;
  try {
    const updatedMachinery = await Machinery.findByIdAndUpdate(req.params.id,
      { name, description, type, status, location, lastMaintenanceDate },
      { new: true }
    );
    if (!updatedMachinery) {
      return res.status(404).json({ error: "Machinery not found" });
    }
    res.status(200).json(updatedMachinery);
  } catch (error) {
    console.error("Error in updateMachinery: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete machinery
export const deleteMachinery = async (req, res) => {
  try {
    const deletedMachinery = await Machinery.findByIdAndDelete(req.params.id);
    if (!deletedMachinery) {
      return res.status(404).json({ error: "Machinery not found" });
    }
    res.status(200).json({ message: "Machinery deleted successfully" });
  } catch (error) {
    console.error("Error in deleteMachinery: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
