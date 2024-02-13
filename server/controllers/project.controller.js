import Project from "../models/project.model.js";

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error in getAllProjects: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error("Error in getProjectById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new project
export const createProject = async (req, res) => {
  const { name, description, status, startDate, endDate } = req.body;
  try {
    const newProject = await Project.create({ name, description, status, startDate, endDate });
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error in createProject: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update project
export const updateProject = async (req, res) => {
  const { name, description, status, startDate, endDate } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id,
      { name, description, status, startDate, endDate },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error in updateProject: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error in deleteProject: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
