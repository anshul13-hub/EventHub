import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaQrcode,
  FaLaptopCode,
  FaTrophy,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-32">

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            About
            <span className="text-violet-500">
              {" "}EventHub
            </span>
          </h1>

          <p className="text-slate-400 mt-6 text-xl max-w-3xl mx-auto leading-9">

            EventHub is a smart campus event management platform
            designed to simplify event discovery, online
            registration, QR ticket generation and organizer
            management.

          </p>

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="text-slate-400 mt-6 leading-8">

              Our mission is to connect students with exciting
              technical, cultural and sports events through one
              modern platform.

            </p>

            <p className="text-slate-400 mt-6 leading-8">

              EventHub helps organizers create and manage
              events while giving students a smooth registration
              experience with digital QR tickets.

            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

            <h3 className="text-3xl font-bold mb-8">

              Why EventHub?

            </h3>

            <div className="space-y-5 text-slate-300">

              <p>✔ Easy Event Registration</p>

              <p>✔ QR Based Digital Tickets</p>

              <p>✔ Secure Authentication</p>

              <p>✔ Student & Organizer Dashboard</p>

              <p>✔ Professional UI</p>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">

          Features

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <FaCalendarAlt />,
              title: "Create Events",
              desc: "Create workshops, hackathons, seminars, sports and cultural events."
            },
            {
              icon: <FaUsers />,
              title: "Student Registration",
              desc: "Students can register instantly for upcoming events."
            },
            {
              icon: <FaTicketAlt />,
              title: "Digital Tickets",
              desc: "Instant QR ticket generation after registration."
            },
            {
              icon: <FaQrcode />,
              title: "QR Verification",
              desc: "Fast and secure event entry using QR codes."
            },
            {
              icon: <FaLaptopCode />,
              title: "Organizer Dashboard",
              desc: "Manage events, registrations and statistics."
            },
            {
              icon: <FaTrophy />,
              title: "Campus Activities",
              desc: "Technical, cultural and sports events in one place."
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition"
            >

              <div className="text-5xl text-violet-500">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="text-slate-400 mt-4 leading-7">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-4 gap-8">

          {[
            ["100+", "Events"],
            ["5000+", "Students"],
            ["25+", "Clubs"],
            ["98%", "Satisfaction"],
          ].map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-10 text-center border border-slate-800"
            >

              <h2 className="text-5xl font-bold text-violet-500">

                {item[0]}

              </h2>

              <p className="text-slate-400 mt-4">

                {item[1]}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-14 text-center">

          <h2 className="text-5xl font-bold">

            Join EventHub Today

          </h2>

          <p className="mt-6 text-lg">

            Discover exciting campus events and become part of
            an active student community.

          </p>

          <button className="mt-10 bg-white text-violet-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition">

            Explore Events

          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}