import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getEventById,
  updateEvent,
} from "../services/eventService";
import toast from "react-hot-toast";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const event = await getEventById(id);

      setFormData({
        title: event.title,
        description: event.description,
        category: event.category,
        eventDate: event.eventDate.split("T")[0],
        registrationDeadline:
          event.registrationDeadline.split("T")[0],
        venue: event.venue,
        department: event.department,
        capacity: event.capacity,
        poster: event.poster,
      });
    } catch (err) {
  console.log(err);
  console.log(err.response?.data);

  toast.error(
    err.response?.data?.message || "Update Failed"
  );
}

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEvent(id, formData);

      toast.success("Event Updated Successfully");

      navigate("/organizer/dashboard");
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  if (loading)
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        <div className="pt-40 text-center text-3xl">
          Loading...
        </div>
      </div>
    );

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold mb-10">
          Edit Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-3xl p-8 space-y-6"
        >

          {[
            "title",
            "category",
            "venue",
            "department",
            "capacity",
            "poster",
          ].map((field) => (
            <input
              key={field}
              type={field === "capacity" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field}
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
            />
          ))}

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
          />

          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl"
          />

          <input
            type="date"
            name="registrationDeadline"
            value={formData.registrationDeadline}
            onChange={handleChange}
            className="w-full bg-slate-800 p-4 rounded-xl"
          />

          <button
            className="w-full bg-violet-600 hover:bg-violet-700 py-4 rounded-xl text-lg"
          >
            Update Event
          </button>

        </form>

      </div>

    </div>
  );
}