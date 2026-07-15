import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold">

            Contact Us

          </h1>

          <p className="text-slate-400 mt-4 text-lg">

            We'd love to hear from you. Feel free to contact us.

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

            <h2 className="text-3xl font-bold mb-8">

              Send Message

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800 p-4 rounded-xl outline-none resize-none"
              />

              <button
                className="w-full bg-violet-600 hover:bg-violet-700 py-4 rounded-xl text-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center gap-5">

              <FaPhoneAlt
                className="text-violet-500"
                size={35}
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Phone
                </h3>

                <p className="text-slate-400 mt-2">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center gap-5">

              <FaEnvelope
                className="text-violet-500"
                size={35}
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Email
                </h3>

                <p className="text-slate-400 mt-2">
                  support@eventhub.com
                </p>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center gap-5">

              <FaMapMarkerAlt
                className="text-violet-500"
                size={35}
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Address
                </h3>

                <p className="text-slate-400 mt-2">
                  Chandigarh, India
                </p>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center gap-5">

              <FaClock
                className="text-violet-500"
                size={35}
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Working Hours
                </h3>

                <p className="text-slate-400 mt-2">
                  Monday - Friday
                </p>

                <p className="text-slate-400">
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}