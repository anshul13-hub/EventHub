import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* Tag */}
        <p className="text-violet-400 uppercase tracking-[6px] mb-6">
          EVENTHUB
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">
          Discover Amazing
          <span className="text-violet-500"> Events </span>
          Around Your Campus
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-8">
          Register for workshops, hackathons, seminars,
          cultural festivals and technical events happening
          across your university with just one click.
        </p>

        {/* Category Badges */}
        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-zinc-800 hover:bg-violet-600 transition px-5 py-2 rounded-full">
            🎓 Workshops
          </span>

          <span className="bg-zinc-800 hover:bg-violet-600 transition px-5 py-2 rounded-full">
            💻 Hackathons
          </span>

          <span className="bg-zinc-800 hover:bg-violet-600 transition px-5 py-2 rounded-full">
            🎭 Cultural
          </span>

          <span className="bg-zinc-800 hover:bg-violet-600 transition px-5 py-2 rounded-full">
            ⚽ Sports
          </span>

          <span className="bg-zinc-800 hover:bg-violet-600 transition px-5 py-2 rounded-full">
            🤖 AI
          </span>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-12">

          <Link
            to="/events"
            className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
          >
            Explore Events
          </Link>

          <Link
            to="/signup"
            className="border border-zinc-700 hover:border-violet-500 hover:bg-zinc-900 px-8 py-4 rounded-xl transition duration-300"
          >
            Create Event
          </Link>

        </div>

        {/* Search */}
        <div className="mt-16 bg-[#18181B] border border-zinc-800 rounded-2xl p-3 flex items-center shadow-lg">

          <Search className="text-zinc-500 ml-3" />

          <input
            type="text"
            placeholder="Search workshops, hackathons, seminars..."
            className="flex-1 bg-transparent outline-none px-4 text-white"
          />

          <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl transition">
            Search
          </button>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-violet-500 transition">

            <h2 className="text-4xl font-bold text-violet-500">
              120+
            </h2>

            <p className="text-zinc-400 mt-2">
              Events
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-violet-500 transition">

            <h2 className="text-4xl font-bold text-violet-500">
              500+
            </h2>

            <p className="text-zinc-400 mt-2">
              Students
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-violet-500 transition">

            <h2 className="text-4xl font-bold text-violet-500">
              15+
            </h2>

            <p className="text-zinc-400 mt-2">
              Clubs
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-violet-500 transition">

            <h2 className="text-4xl font-bold text-violet-500">
              30+
            </h2>

            <p className="text-zinc-400 mt-2">
              Organizers
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}