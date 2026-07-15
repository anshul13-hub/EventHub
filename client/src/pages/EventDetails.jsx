import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getEventById } from "../services/eventService";
import { registerForEvent } from "../services/ticketService";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      const data = await getEventById(id);
      setEvent(data.event || data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      const data = await registerForEvent(event._id);

      toast.success(data.message);

      navigate("/profile");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

 if (!event) {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <LoadingSpinner />
    </div>
  );
}

  const isRegistrationOpen =
    new Date(event.registrationDeadline) > new Date();

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <div className="h-96 rounded-3xl overflow-hidden">

              {event.poster ? (

                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

              ) : (

                <div className="w-full h-full bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 flex items-center justify-center">

                  <h1 className="text-5xl font-bold">

                    {event.category}

                  </h1>

                </div>

              )}

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="bg-violet-700 px-4 py-2 rounded-full text-sm">

              {event.category}

            </span>

            <h1 className="text-5xl font-bold mt-6">

              {event.title}

            </h1>

            <p className="text-slate-400 mt-6 text-lg leading-8">

              {event.description}

            </p>

            <div className="mt-10 space-y-5 text-lg">

              <div className="flex items-center gap-4">

                <FaCalendarAlt className="text-violet-400" />

                {new Date(event.eventDate).toLocaleDateString()}

              </div>

              <div className="flex items-center gap-4">

                <FaClock className="text-violet-400" />

                Registration Ends :
                {" "}
                {new Date(
                  event.registrationDeadline
                ).toLocaleDateString()}

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-violet-400" />

                {event.venue}

              </div>

              <div className="flex items-center gap-4">

                <FaBuilding className="text-violet-400" />

                {event.department}

              </div>

              <div className="flex items-center gap-4">

                <FaUsers className="text-violet-400" />

                Capacity :
                {" "}
                {event.capacity}

              </div>

            </div>

            {/* Registration Card */}

            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-5">

                Registration Status

              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-slate-400">

                    Registration

                  </span>

                  <span
                    className={`font-bold ${
                      isRegistrationOpen
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {isRegistrationOpen
                      ? "🟢 Open"
                      : "🔴 Closed"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">

                    Capacity

                  </span>

                  <span>

                    {event.capacity} Students

                  </span>

                </div>

              </div>

            </div>

            <button
              disabled={!isRegistrationOpen}
              onClick={handleRegister}
              className={`mt-8 w-full py-4 rounded-xl text-lg font-semibold transition ${
                isRegistrationOpen
                  ? "bg-violet-600 hover:bg-violet-700"
                  : "bg-slate-700 cursor-not-allowed"
              }`}
            >

              {isRegistrationOpen
                ? "Register Now"
                : "Registration Closed"}

            </button>

          </div>

        </div>

        {/* Organizer */}

        <div className="mt-20 bg-slate-900 rounded-3xl border border-slate-800 p-8">

          <h2 className="text-3xl font-bold mb-8">

            Organizer Details

          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <FaUser className="text-violet-400" />

              <span>{event.organizer?.name}</span>

            </div>

            <div className="flex items-center gap-4">

              <FaEnvelope className="text-violet-400" />

              <span>{event.organizer?.email}</span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}