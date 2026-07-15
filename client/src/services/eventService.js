import axios from "axios";

const API_URL = "https://eventhub-backend-0o7f.onrender.com/api/events";

// Get All Events
export const getAllEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get Single Event
export const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create Event
export const createEvent = async (eventData) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    `${API_URL}/create`,
    eventData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update Event
export const updateEvent = async (id, eventData) => {
  const token = localStorage.getItem("token");

  const response = await axios.put(
    `${API_URL}/${id}`,
    eventData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Delete Event
export const deleteEvent = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};