// researchController.js
import Research from "../models/research.model.js";

// Get all research
export const getAllResearch = async (req, res) => {
  try {
    const research = await Research.find();
    res.status(200).json(research);
  } catch (error) {
    console.error("Error in getAllResearch: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get research by ID
export const getResearchById = async (req, res) => {
  try {
    const research = await Research.findById(req.params.id);
    if (!research) {
      return res.status(404).json({ error: "Research not found" });
    }
    res.status(200).json(research);
  } catch (error) {
    console.error("Error in getResearchById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new research
export const createResearch = async (req, res) => {
  const {  description, details, author, title } = req.body;
  try {
    const newResearch = await Research.create({  description, details, author, title });
    res.status(201).json(newResearch);
  } catch (error) {
    console.error("Error in createResearch: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update research
export const updateResearch = async (req, res) => {
  const { image, description, details, author, title } = req.body;
  try {
    const updatedResearch = await Research.findByIdAndUpdate(req.params.id,
      { image, description, details, author, title },
      { new: true }
    );
    if (!updatedResearch) {
      return res.status(404).json({ error: "Research not found" });
    }
    res.status(200).json(updatedResearch);
  } catch (error) {
    console.error("Error in updateResearch: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete research
export const deleteResearch = async (req, res) => {
  try {
    const deletedResearch = await Research.findByIdAndDelete(req.params.id);
    if (!deletedResearch) {
      return res.status(404).json({ error: "Research not found" });
    }
    res.status(200).json({ message: "Research deleted successfully" });
  } catch (error) {
    console.error("Error in deleteResearch: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
