import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createEvent } from "../services/eventService";
import toast from "react-hot-toast";

export default function CreateEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  eventDate: "",
  registrationDeadline: "",
  venue: "",
  department: "",
  capacity: "",
  poster: "",
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEvent(formData);

      toast.success("Event Created Successfully");

      navigate("/organizer/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create event"
      );
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold mb-10">
          Create New Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6"
        >

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />
          <div>

  <label className="block text-slate-300 mb-2">
    Registration Deadline
  </label>

  <input
    type="date"
    name="registrationDeadline"
    value={formData.registrationDeadline}
    onChange={handleChange}
    className="w-full bg-slate-800 p-4 rounded-xl outline-none"
    required
  />

</div>

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            name="poster"
            placeholder="Poster Image URL"
            value={formData.poster}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 py-4 rounded-xl text-lg font-semibold"
          >
            Create Event
          </button>

        </form>

      </div>

    </div>
  );
}