import Navbar from "../components/Navbar";
import {
  FaTicketAlt,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        {/* Header */}

        <div className="flex justify-between items-center flex-wrap gap-4">

          <div>

            <h1 className="text-5xl font-bold">
              Student Dashboard
            </h1>

            <p className="text-slate-400 mt-3">
              Welcome back,{" "}
              <span className="text-violet-400 font-semibold">
                {user?.name}
              </span>
            </p>

          </div>

          <Link
            to="/events"
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            Explore Events
            <FaArrowRight />
          </Link>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition">

            <FaTicketAlt className="text-4xl text-violet-500" />

            <h2 className="text-4xl font-bold mt-5">
              --
            </h2>

            <p className="text-slate-400 mt-2">
              My Tickets
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition">

            <FaCalendarAlt className="text-4xl text-violet-500" />

            <h2 className="text-4xl font-bold mt-5">
              --
            </h2>

            <p className="text-slate-400 mt-2">
              Upcoming Events
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition">

            <FaClipboardList className="text-4xl text-violet-500" />

            <h2 className="text-4xl font-bold mt-5">
              Active
            </h2>

            <p className="text-slate-400 mt-2">
              Account Status
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition">

            <FaUser className="text-4xl text-violet-500" />

            <h2 className="text-4xl font-bold mt-5">
              {user?.department || "CSE"}
            </h2>

            <p className="text-slate-400 mt-2">
              Department
            </p>

          </div>

        </div>

        {/* Quick Actions */}

        <h2 className="text-3xl font-bold mt-16 mb-8">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            to="/my-tickets"
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition hover:-translate-y-2"
          >
            <FaTicketAlt className="text-5xl text-violet-500" />

            <h2 className="text-2xl font-bold mt-6">
              My Tickets
            </h2>

            <p className="text-slate-400 mt-3">
              View your registered event tickets and QR codes.
            </p>

          </Link>

          <Link
            to="/events"
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition hover:-translate-y-2"
          >
            <FaCalendarAlt className="text-5xl text-violet-500" />

            <h2 className="text-2xl font-bold mt-6">
              Browse Events
            </h2>

            <p className="text-slate-400 mt-3">
              Discover upcoming workshops, hackathons and festivals.
            </p>

          </Link>

          <Link
            to="/profile"
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition hover:-translate-y-2"
          >
            <FaUser className="text-5xl text-violet-500" />

            <h2 className="text-2xl font-bold mt-6">
              My Profile
            </h2>

            <p className="text-slate-400 mt-3">
              Update your personal details and account information.
            </p>

          </Link>

        </div>

        {/* Dashboard Note */}

        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-10">

          <h2 className="text-3xl font-bold">
            🎉 Stay Updated
          </h2>

          <p className="mt-4 text-lg text-violet-100">
            Participate in campus events, collect your QR tickets,
            and never miss exciting workshops, hackathons,
            sports tournaments and cultural festivals.
          </p>

        </div>

      </div>

    </div>
  );
}