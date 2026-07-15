import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getTicket } from "../services/ticketService";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaIdCard,
  FaArrowLeft,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function Ticket() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const data = await getTicket(id);
      setTicket(data.ticket);
    } catch (error) {
      toast.error("Failed to load ticket");
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        <div className="pt-40 text-center text-2xl">
          Loading Ticket...
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        <div className="pt-40 text-center text-2xl">
          Ticket Not Found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6">

        <Link
          to="/my-tickets"
          className="inline-flex items-center gap-2 text-violet-400 mb-8"
        >
          <FaArrowLeft />
          Back
        </Link>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

          <h1 className="text-4xl font-bold text-center">
            Event Ticket
          </h1>

          <p className="text-center text-slate-400 mt-3">
            Show this ticket at the event entrance
          </p>

          <div className="flex justify-center mt-10">
            <img
              src={ticket.qrCode}
              alt="QR Code"
              className="w-64 h-64 bg-white rounded-xl p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div>
              <h2 className="text-3xl font-bold">
                {ticket.event.title}
              </h2>

              <p className="text-slate-400 mt-3">
                {ticket.event.description}
              </p>

              <div className="space-y-4 mt-8">

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-violet-400" />
                  {new Date(ticket.event.eventDate).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-violet-400" />
                  {ticket.event.venue}
                </div>

              </div>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaUser className="text-violet-400" />
                {ticket.student.name}
              </div>

              <div className="flex items-center gap-3">
                <FaBuilding className="text-violet-400" />
                {ticket.student.department}
              </div>

              <div className="flex items-center gap-3">
                <FaIdCard className="text-violet-400" />
                {ticket.student.rollNumber}
              </div>

              <div>
                <span className="bg-green-600 px-4 py-2 rounded-full">
                  Registered
                </span>
              </div>

            </div>

          </div>

          <button
            onClick={() => window.print()}
            className="w-full mt-12 bg-violet-600 hover:bg-violet-700 py-4 rounded-xl text-lg font-semibold"
          >
            Print Ticket
          </button>

        </div>

      </div>
    </div>
  );
}