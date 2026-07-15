import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventService";
import {
  Ticket,
  QrCode,
  Users,
  CalendarDays,
} from "lucide-react";

import FeatureCard from "../components/FeatureCard";
import Clubs from "../components/Clubs";
import Footer from "../components/Footer";

export default function Home() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#09090B] min-h-screen">

      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-white mb-12">
          Featured Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
            />
          ))}

        </div>

      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <p className="text-violet-400 uppercase tracking-[5px]">
      WHY EVENTHUB
    </p>

    <h2 className="text-5xl font-bold text-white mt-4">
      Everything You Need
    </h2>

    <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
      Manage registrations, discover events,
      receive QR tickets and organize campus
      activities effortlessly.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <FeatureCard
      icon={<Ticket />}
      title="Easy Registration"
      description="Register for any campus event in just one click."
    />

    <FeatureCard
      icon={<QrCode />}
      title="QR Tickets"
      description="Receive secure QR tickets instantly after registration."
    />

    <FeatureCard
      icon={<Users />}
      title="Campus Community"
      description="Join workshops, hackathons and cultural festivals."
    />

    <FeatureCard
      icon={<CalendarDays />}
      title="Organizer Tools"
      description="Create, manage and monitor events from one dashboard."
    />

  </div>

</section>
      <Clubs />
      <Footer />
    </div>

  );
}