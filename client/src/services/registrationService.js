import axios from "axios";

const API_URL = "http://localhost:5000/api/registrations";

// Get all students registered for an event
export const getEventRegistrations = async (eventId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/event/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get event registration statistics
export const getRegistrationStats = async (eventId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/stats/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};