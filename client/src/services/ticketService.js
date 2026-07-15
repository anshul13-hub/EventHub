import axios from "axios";

const API_URL = "http://localhost:5000/api/registrations";

// Register Event
export const registerForEvent = async (eventId) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    `${API_URL}/${eventId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get My Registrations
export const getMyRegistrations = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/my-events`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Cancel Registration
export const cancelRegistration = async (eventId) => {
  const token = localStorage.getItem("token");

  const response = await axios.put(
    `${API_URL}/cancel/${eventId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get Ticket
export const getTicket = async (registrationId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/ticket/${registrationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};