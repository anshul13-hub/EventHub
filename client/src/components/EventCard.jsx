import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-violet-500 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">

      {/* Event Image */}
      <div className="h-48 overflow-hidden">

        {event.poster ? (
          <img
            src={event.poster}
            alt={event.title}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">
              {event.category}
            </h2>
          </div>
        )}

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {event.title}
        </h2>

        <p className="text-slate-400 mt-3 line-clamp-2">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 text-slate-300">

          <p className="flex items-center gap-3">
            <FaCalendarAlt className="text-violet-400" />
            {new Date(event.eventDate).toLocaleDateString()}
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-violet-400" />
            {event.venue}
          </p>

          <p className="flex items-center gap-3">
            <FaUsers className="text-violet-400" />
            {event.capacity} Seats
          </p>

        </div>

        {/* ✅ Correct Route */}
        <Link to={`/event/${event._id}`}>

          <button className="mt-8 w-full bg-violet-600 hover:bg-violet-700 rounded-xl py-3 flex justify-center items-center gap-3 text-white font-semibold transition">

            View Details

            <FaArrowRight />

          </button>

        </Link>

      </div>

    </div>
  );
}