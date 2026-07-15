import { Link, useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-violet-500"
      : "text-slate-300 hover:text-violet-400";

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-bold text-white"
        >
          <FaCalendarAlt className="text-violet-500 text-4xl" />

          <span>
            Event<span className="text-violet-500">Hub</span>
          </span>
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link
            to="/"
            className={`${isActive("/")} transition`}
          >
            Home
          </Link>

          <Link
            to="/events"
            className={`${isActive("/events")} transition`}
          >
            Events
          </Link>
          <Link
  to="/gallery"
  className={`${isActive("/gallery")} transition`}
>
  Gallery
</Link>

          <Link
            to="/about"
            className={`${isActive("/about")} transition`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`${isActive("/contact")} transition`}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className={`${isActive("/login")} transition`}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl text-white transition"
          >
            Signup
          </Link>

        </div>

      </div>

    </nav>
  );
}