import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  FaCalendarAlt,
  FaUsers,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getAllEvents,
  deleteEvent,
} from "../services/eventService";

export default function OrganizerDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data);
    } catch (err) {
      toast.error("Failed to load events");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Delete this event?"
    );

    if (!ok) return;

    try {
      await deleteEvent(id);

      toast.success("Event Deleted");

      fetchEvents();
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  const totalCapacity = events.reduce(
    (sum, event) => sum + event.capacity,
    0
  );

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />

        <div className="pt-40 text-center text-3xl">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold">
              Organizer Dashboard
            </h1>

            <p className="text-slate-400 mt-3">
              Manage all your events from one place.
            </p>

          </div>

          <Link
            to="/create-event"
            className="mt-6 md:mt-0 bg-violet-600 hover:bg-violet-700 px-6 py-4 rounded-xl flex items-center gap-3"
          >
            <FaPlus />
            Create Event
          </Link>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-slate-900 p-6 rounded-2xl">

            <FaCalendarAlt className="text-violet-500 text-3xl"/>

            <h2 className="text-3xl font-bold mt-5">
              {events.length}
            </h2>

            <p className="text-slate-400">
              Total Events
            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <FaUsers className="text-violet-500 text-3xl"/>

            <h2 className="text-3xl font-bold mt-5">
              {events.length}
            </h2>

            <p className="text-slate-400">
              Upcoming Events
            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <FaUsers className="text-violet-500 text-3xl"/>

            <h2 className="text-3xl font-bold mt-5">
              {totalCapacity}
            </h2>

            <p className="text-slate-400">
              Total Capacity
            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <FaCalendarAlt className="text-violet-500 text-3xl"/>

            <h2 className="text-3xl font-bold mt-5">
              Active
            </h2>

            <p className="text-slate-400">
              Dashboard
            </p>

          </div>

        </div>

        <h2 className="text-3xl font-bold mt-20 mb-8">
          My Events
        </h2>
                {events.length === 0 ? (

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center">

            <FaCalendarAlt
              className="mx-auto text-violet-500"
              size={70}
            />

            <h2 className="text-3xl font-bold mt-6">
              No Events Yet
            </h2>

            <p className="text-slate-400 mt-3">
              You haven't created any events yet.
            </p>

            <Link
              to="/create-event"
              className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl mt-8"
            >
              <FaPlus />
              Create First Event
            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-8">

            {events.map((event) => (

              <div
                key={event._id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition"
              >

                {event.poster && (

                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-52 object-cover rounded-2xl mb-6"
                  />

                )}

                <h2 className="text-3xl font-bold">
                  {event.title}
                </h2>

                <p className="text-slate-400 mt-3">
                  {event.description}
                </p>

                <div className="space-y-3 mt-6">

                  <p>
                    📅{" "}
                    {new Date(
                      event.eventDate
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    📍 {event.venue}
                  </p>

                  <p>
                    🏢 {event.department}
                  </p>

                  <p>
                    👥 Capacity : {event.capacity}
                  </p>

                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">

                  <Link
  to={`/organizer/event/${event._id}`}
  className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl flex justify-center items-center gap-2"
>
                    <FaEye />
                    View
                  </Link>

                  
                  <Link
  to={`/edit-event/${event._id}`}
  className="bg-yellow-500 hover:bg-yellow-600 py-3 rounded-xl flex justify-center items-center gap-2"
>
  <FaEdit />
  Edit
</Link>

                  <button
                    onClick={() => handleDelete(event._id)}
                    className="bg-red-600 hover:bg-red-700 py-3 rounded-xl flex justify-center items-center gap-2"
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}
              </div>

    </div>
  );
}