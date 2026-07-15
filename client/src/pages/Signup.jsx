import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { registerUser } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    rollNumber: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Account Created Successfully");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup Failed"
      );
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4 flex justify-center">

        <div className="w-full max-w-xl bg-slate-900 rounded-3xl border border-slate-800 p-10">

          <h1 className="text-5xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-slate-400 text-center mt-3">
            Join EventHub and explore amazing events.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            {/* Name */}

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            {/* Department */}

            <div>
              <label className="block mb-2 font-medium">
                Department
              </label>

              <input
                type="text"
                name="department"
                placeholder="Computer Science Engineering"
                value={formData.department}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            {/* Roll Number */}

            <div>
              <label className="block mb-2 font-medium">
                Roll Number
              </label>

              <input
                type="text"
                name="rollNumber"
                placeholder="2210990000"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              />
            </div>

            {/* Role */}

            <div>
              <label className="block mb-2 font-medium">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
              >
                <option value="student">
                  Student
                </option>

                <option value="organizer">
                  Organizer
                </option>
              </select>
            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition py-4 rounded-xl font-semibold text-lg"
            >
              Create Account
            </button>

            <p className="text-center text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-violet-400 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>

        </div>

      </div>
    </div>
  );
}