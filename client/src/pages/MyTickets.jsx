import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import { getMyRegistrations, cancelRegistration } from "../services/ticketService";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const data = await getMyRegistrations();
      setTickets(data);
    } catch (error) {
      toast.error("Failed to load tickets");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (eventId) => {
    // 6. Better Cancel Confirmation
    const ok = window.confirm("Cancel Registration?");
    if (!ok) return;

    try {
      await cancelRegistration(eventId);
      toast.success("Registration Cancelled");
      fetchTickets();
    } catch (error) {
      toast.error("Cancellation Failed");
    }
  };

  // 1. Loading Spinner Integration
  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-5xl font-bold">My Tickets</h1>
        <p className="text-slate-400 mt-3">All your registered events.</p>

        {tickets.length === 0 ? (
          <div className="text-center mt-20">
            <FaTicketAlt className="mx-auto text-violet-500" size={80} />
            <h2 className="text-3xl font-bold mt-6">No Tickets Yet</h2>
            <p className="text-slate-400 mt-3">
              Register for an event to see your tickets.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                // 7. Better Card Hover/Transition Classes
                className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-violet-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 2. Event Poster (At the very top of the card) */}
                  <div className="h-56 rounded-2xl overflow-hidden mb-6">
                    {ticket.event.poster ? (
                      <img
                        src={ticket.event.poster}
                        alt={ticket.event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <h2 className="text-4xl font-bold">{ticket.event.category}</h2>
                      </div>
                    )}
                  </div>

                  {/* 3. Category & Registered Badges Container */}
                  <div className="flex justify-between items-center">
                    <span className="bg-violet-600 px-4 py-2 rounded-full text-sm">
                      {ticket.event.category}
                    </span>
                    <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
                      Registered
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold mt-6">{ticket.event.title}</h2>
                  <p className="text-slate-400 mt-3">{ticket.event.description}</p>

                  <div className="space-y-4 mt-8">
                    <div className="flex gap-3 items-center">
                      <FaCalendarAlt className="text-violet-400" />
                      {new Date(ticket.event.eventDate).toLocaleDateString()}
                    </div>

                    {/* 4. Department Details */}
                    <p className="flex items-center gap-3">
                      🏢 {ticket.event.department}
                    </p>

                    {/* 5. Registration Date Details */}
                    <p className="flex items-center gap-3">
                      📅 Registered : {new Date(ticket.createdAt).toLocaleDateString()}
                    </p>

                    <div className="flex gap-3 items-center">
                      <FaMapMarkerAlt className="text-violet-400" />
                      {ticket.event.venue}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <Link
                    to={`/ticket/${ticket._id}`}
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-center py-3 rounded-xl transition duration-200"
                  >
                    View Ticket
                  </Link>

                  <button
                    onClick={() => handleCancel(ticket.event._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 rounded-xl transition duration-200"
                  >
                    Cancel
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