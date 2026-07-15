import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAllEvents } from "../services/eventService";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data.events || data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events
    .filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((event) =>
      category === "All"
        ? true
        : event.category === category
    )
    .filter((event) =>
      department === "All"
        ? true
        : event.department === department
    )
    .sort((a, b) => {
      if (sortBy === "latest")
        return new Date(b.eventDate) - new Date(a.eventDate);

      if (sortBy === "oldest")
        return new Date(a.eventDate) - new Date(b.eventDate);

      if (sortBy === "capacityHigh")
        return b.capacity - a.capacity;

      if (sortBy === "capacityLow")
        return a.capacity - b.capacity;

      return 0;
    });

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <h1 className="text-5xl font-bold">
          Explore Events
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Discover workshops, hackathons, seminars,
          cultural and sports events.
        </p>

        {/* Search & Filters */}

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <input
            type="text"
            placeholder="Search Event..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none"
          >
            <option>All</option>
            <option>Workshop</option>
            <option>Hackathon</option>
            <option>Bootcamp</option>
            <option>Design</option>
            <option>Music</option>
            <option>Dance</option>
            <option>Cricket</option>
            <option>Basketball</option>
            <option>Startup</option>
          </select>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
            className="bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none"
          >
            <option>All</option>
            <option>
              Computer Science Engineering
            </option>
            <option>
              Mechanical Engineering
            </option>
            <option>
              Civil Engineering
            </option>
            <option>
              Electrical Engineering
            </option>
            <option>
              Electronics Engineering
            </option>
            <option>All Departments</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none"
          >
            <option value="latest">
              Latest Events
            </option>

            <option value="oldest">
              Oldest Events
            </option>

            <option value="capacityHigh">
              Capacity High → Low
            </option>

            <option value="capacityLow">
              Capacity Low → High
            </option>

          </select>

        </div>

        {/* Loading */}

        {loading ? (

          <div className="text-center mt-24 text-3xl">
            Loading...
          </div>

        ) : filteredEvents.length === 0 ? (

          <div className="text-center mt-24">

            <h2 className="text-4xl font-bold">
              No Events Found
            </h2>

            <p className="text-slate-400 mt-4">
              Try another search or filter.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {filteredEvents.map((event) => (

              <div
                key={event._id}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-violet-500 transition duration-300"
              >

                <div className="h-56">

                  {event.poster ? (

                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="w-full h-full bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 flex items-center justify-center">

                      <h2 className="text-4xl font-bold">
                        {event.category}
                      </h2>

                    </div>

                  )}

                </div>

                <div className="p-6">

                  <span className="bg-violet-700 px-3 py-1 rounded-full text-sm">

                    {event.category}

                  </span>

                  <h2 className="text-2xl font-bold mt-5">

                    {event.title}

                  </h2>

                  <p className="text-slate-400 mt-3 line-clamp-3">

                    {event.description}

                  </p>

                  <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-3">

                      <FaCalendarAlt className="text-violet-400" />

                      {new Date(
                        event.eventDate
                      ).toLocaleDateString()}

                    </div>

                    <div className="flex items-center gap-3">

                      <FaMapMarkerAlt className="text-violet-400" />

                      {event.venue}

                    </div>

                    <div className="flex items-center gap-3">

                      <FaUsers className="text-violet-400" />

                      {event.capacity} Seats

                    </div>

                  </div>

                  <Link
                    to={`/event/${event._id}`}
                    className="mt-8 flex justify-center items-center gap-3 bg-violet-600 hover:bg-violet-700 transition py-3 rounded-xl font-semibold"
                  >

                    View Details

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}