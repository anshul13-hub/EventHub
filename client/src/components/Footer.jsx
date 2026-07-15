import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-3 text-3xl font-bold">

            <FaCalendarAlt className="text-violet-500" />

            <span>
              Event<span className="text-violet-500">Hub</span>
            </span>

          </div>

          <p className="text-slate-400 mt-6 leading-8">

            EventHub is a modern campus event management platform
            where students can discover events, register online,
            receive QR tickets and participate in technical,
            cultural and sports activities.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">

            Quick Links

          </h3>

          <div className="flex flex-col gap-4">

            <Link
              to="/"
               className="text-slate-400 hover:text-violet-500 hover:translate-x-1 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/events"
              className="text-slate-400 hover:text-violet-500 transition"
            >
              Events
            </Link>

            <Link
              to="/gallery"
              className="text-slate-400 hover:text-violet-500 transition"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="text-slate-400 hover:text-violet-500 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-slate-400 hover:text-violet-500 transition"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">

            Contact Us

          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3 text-slate-400">

              <FaMapMarkerAlt className="text-violet-500" />

              Chandigarh, India

            </div>

            <div className="flex items-center gap-3 text-slate-400">

              <FaEnvelope className="text-violet-500" />

              support@eventhub.com

            </div>

            <div className="flex items-center gap-3 text-slate-400">

              <FaPhone className="text-violet-500" />

              +91 98765 43210

            </div>

          </div>

        </div>

        {/* Newsletter */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">

            Stay Connected

          </h3>

          <p className="text-slate-400 mb-5">

            Subscribe to receive updates about upcoming
            events and workshops.

          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 p-3 rounded-xl outline-none focus:border-violet-500"
          />

          <button
            className="w-full mt-5 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition"
          >

            Subscribe

          </button>

          <div className="flex gap-5 mt-7">

            <FaGithub className="cursor-pointer hover:text-violet-500 transition" />

            <FaLinkedin className="cursor-pointer hover:text-violet-500 transition" />

            <FaInstagram className="cursor-pointer hover:text-violet-500 transition" />

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500">

        © {new Date().getFullYear()} EventHub. All Rights Reserved.

      </div>

    </footer>
  );
}