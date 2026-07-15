const Event = require("../models/Event");

// Create Event
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      department,
      venue,
      eventDate,
      registrationDeadline,
      capacity,
      poster,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      category,
      department,
      venue,
      eventDate,
      registrationDeadline,
      capacity,
      poster,
      organizer: req.user.userId,
    });

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate(
      "organizer",
      "name email department"
    );

    res.status(200).json(events);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

// Get Single Event
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "organizer",
      "name email department"
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json(event);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch event",
      error: error.message,
    });
  }
};

// UPDATE EVENT
const updateEvent = async (req, res) => {
  console.log("============== UPDATE EVENT ==============");
  console.log("Event ID:", req.params.id);
  console.log("Logged In User:", req.user.userId);
  console.log("Body:", req.body);

  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      console.log("Event Not Found");

      return res.status(404).json({
        message: "Event not found",
      });
    }

    console.log("Organizer:", event.organizer.toString());

    if (event.organizer.toString() !== req.user.userId) {
      console.log("Permission Denied");

      return res.status(403).json({
        message: "You are not allowed to update this event",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("UPDATED SUCCESSFULLY");

    res.status(200).json({
      message: "Event updated successfully",
      updatedEvent,
    });
  } catch (error) {
    console.log("UPDATE ERROR");
    console.log(error);

    res.status(500).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    if (event.organizer.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not allowed to delete this event",
      });
    }

    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};

// Organizer Events
const getOrganizerEvents = async (req, res) => {
  try {
    const events = await Event.find({
      organizer: req.user.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(events);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch organizer events",
      error: error.message,
    });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  getOrganizerEvents,
  updateEvent,
  deleteEvent,
};