import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getEventRegistrations,
  getRegistrationStats,
} from "../services/registrationService";
import { FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";

export default function EventRegistrations() {
  const { id } = useParams();

  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const registrations = await getEventRegistrations(id);
      const statistics = await getRegistrationStats(id);

      setStudents(registrations);
      setStats(statistics);
    } catch (error) {
      toast.error("Failed to load registrations");
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        <div className="pt-40 text-center text-3xl">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold">
          {stats?.eventTitle}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6">

            <FaUsers className="text-violet-500 text-3xl"/>

            <h2 className="text-3xl font-bold mt-4">
              {stats?.registered}
            </h2>

            <p className="text-slate-400">
              Registered Students
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">
              {stats?.capacity}
            </h2>

            <p className="text-slate-400">
              Total Capacity
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-3xl font-bold">
              {stats?.seatsLeft}
            </h2>

            <p className="text-slate-400">
              Seats Left
            </p>

          </div>

        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8">
          Registered Students
        </h2>

        {students.length === 0 ? (

          <div className="bg-slate-900 rounded-2xl p-10 text-center">

            No students have registered yet.

          </div>

        ) : (

          <div className="space-y-5">

            {students.map((registration) => (

              <div
                key={registration._id}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
              >

                <h2 className="text-2xl font-bold">
                  {registration.student.name}
                </h2>

                <p className="text-slate-400 mt-2">
                  📧 {registration.student.email}
                </p>

                <p className="text-slate-400">
                  🏢 {registration.student.department}
                </p>

                <p className="text-slate-400">
                  🆔 {registration.student.rollNumber}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}