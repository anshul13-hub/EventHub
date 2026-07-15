const Registration = require("../models/Registration");
const Event = require("../models/Event");
const crypto = require("crypto");
const generateQRCode = require("../utils/qrGenerator");

// Register for Event
const registerForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const studentId = req.user.userId;

    // Check event exists
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Duplicate registration check
    const alreadyRegistered = await Registration.findOne({
      student: studentId,
      event: eventId,
      status: "registered",
    });

    if (alreadyRegistered) {
      return res.status(400).json({
        message: "You are already registered for this event",
      });
    }

    // Capacity check
    const totalRegistrations = await Registration.countDocuments({
      event: eventId,
      status: "registered",
    });

    if (totalRegistrations >= event.capacity) {
      return res.status(400).json({
        message: "Event is full",
      });
    }

    // Generate QR Token
    const qrToken = crypto.randomBytes(20).toString("hex");

    // Generate QR Code Image (Base64)
    const qrCode = await generateQRCode(qrToken);

    // Save Registration
    const registration = await Registration.create({
      student: studentId,
      event: eventId,
      qrToken,
      qrCode,
    });

    res.status(201).json({
      message: "Registration successful",
      registration,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// Cancel Registration
const cancelRegistration = async (req, res) => {
  try {
    const registration = await Registration.findOne({
      student: req.user.userId,
      event: req.params.eventId,
      status: "registered",
    });

    if (!registration) {
      return res.status(404).json({
        message: "Registration not found",
      });
    }

    registration.status = "cancelled";

    await registration.save();

    res.status(200).json({
      message: "Registration cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Cancellation failed",
      error: error.message,
    });
  }
};

// Student Dashboard - My Registered Events
const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      student: req.user.userId,
      status: "registered",
    })
      .populate("event")
      .sort({ createdAt: -1 });

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch registrations",
      error: error.message,
    });
  }
};

// Organizer Dashboard - Event Registrations
const getEventRegistrations = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    if (event.organizer.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not allowed to view registrations",
      });
    }

    const registrations = await Registration.find({
      event: req.params.eventId,
      status: "registered",
    })
      .populate("student", "name email department rollNumber")
      .sort({ createdAt: -1 });

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch registrations",
      error: error.message,
    });
  }
};

// Organizer Dashboard - Statistics
const getRegistrationStats = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    if (event.organizer.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not allowed to view statistics",
      });
    }

    const registeredCount = await Registration.countDocuments({
      event: req.params.eventId,
      status: "registered",
    });

    const cancelledCount = await Registration.countDocuments({
      event: req.params.eventId,
      status: "cancelled",
    });

    res.status(200).json({
      eventTitle: event.title,
      capacity: event.capacity,
      registered: registeredCount,
      cancelled: cancelledCount,
      seatsLeft: event.capacity - registeredCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch statistics",
      error: error.message,
    });
  }
};
const getTicket = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.registrationId)
      .populate("student", "name email rollNumber department")
      .populate("event");

    if (!registration) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    if (registration.student._id.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to view this ticket",
      });
    }

    res.status(200).json({
      message: "Ticket fetched successfully",
      ticket: registration,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch ticket",
      error: error.message,
    });
  }
};
module.exports = {
  registerForEvent,
  cancelRegistration,
  getMyRegistrations,
  getEventRegistrations,
  getRegistrationStats,
  getTicket,
};