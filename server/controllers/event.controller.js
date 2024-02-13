import Event from "../models/event.model.js";

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error in getAllEvents: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error in getEventById: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new event
export const createEvent = async (req, res) => {
  const { name, description, date, location, organizer } = req.body;
  try {
    const newEvent = await Event.create({ name, description, date, location, organizer });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error in createEvent: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  const { name, description, date, location, organizer } = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id,
      { name, description, date, location, organizer },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error in updateEvent: ", error.message);
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error in deleteEvent: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
