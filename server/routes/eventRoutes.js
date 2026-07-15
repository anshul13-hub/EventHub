const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
  getOrganizerEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createEvent);

router.get("/my-events", protect, getOrganizerEvents);

router.get("/", getAllEvents);

router.get("/:id", getEventById);

router.put("/:id", protect, updateEvent);

router.delete("/:id", protect, deleteEvent);

module.exports = router;