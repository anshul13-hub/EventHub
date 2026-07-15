const express = require("express");
const {
  registerForEvent,
  cancelRegistration,
  getMyRegistrations,
  getEventRegistrations,
  getRegistrationStats,
  getTicket,
} = require("../controllers/registrationController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/my-events", protect, getMyRegistrations);
router.get("/event/:eventId", protect, getEventRegistrations);
router.get("/stats/:eventId", protect, getRegistrationStats);
router.get("/ticket/:registrationId", protect, getTicket);
router.post("/:eventId", protect, registerForEvent);
router.put("/cancel/:eventId", protect, cancelRegistration);
module.exports = router;