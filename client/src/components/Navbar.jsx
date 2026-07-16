import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/events" className={isActive("/events")}>
            Events
          </Link>

          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>

          <Link to="/about" className={isActive("/about")}>
            About
          </Link>

          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>

          <Link to="/login" className={isActive("/login")}>
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl text-white"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-5">

          <Link
            to="/"
            className={isActive("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/events"
            className={isActive("/events")}
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>

          <Link
            to="/gallery"
            className={isActive("/gallery")}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            to="/about"
            className={isActive("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={isActive("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className={isActive("/login")}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-violet-600 hover:bg-violet-700 py-3 rounded-xl text-white text-center"
          >
            Signup
          </Link>

        </div>
      )}
    </nav>
  );
}