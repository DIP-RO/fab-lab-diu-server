import Idea from "../models/idea.model.js";

// Get all ideas
export const getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    console.error("Error in getAllIdeas: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get idea by ID
export const getIdeaById = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ error: "Idea not found" });
    }
    res.status(200).json(idea);
  } catch (error) {
    console.error("Error in getIdeaById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new idea
export const createIdea = async (req, res) => {
  const { title, description, category, createdBy } = req.body;
  try {
    const newIdea = await Idea.create({ title, description, category, createdBy });
    res.status(201).json(newIdea);
  } catch (error) {
    console.error("Error in createIdea: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update idea
export const updateIdea = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(req.params.id,
      { title, description, category },
      { new: true }
    );
    if (!updatedIdea) {
      return res.status(404).json({ error: "Idea not found" });
    }
    res.status(200).json(updatedIdea);
  } catch (error) {
    console.error("Error in updateIdea: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete idea
export const deleteIdea = async (req, res) => {
  try {
    const deletedIdea = await Idea.findByIdAndDelete(req.params.id);
    if (!deletedIdea) {
      return res.status(404).json({ error: "Idea not found" });
    }
    res.status(200).json({ message: "Idea deleted successfully" });
  } catch (error) {
    console.error("Error in deleteIdea: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
