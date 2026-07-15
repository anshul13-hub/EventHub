import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    toast.success(data.message);

    if (data.user.role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/organizer/dashboard");
    }

  } catch (error) {

    toast.error(
      error.response?.data?.message || "Login Failed"
    );

  }
};
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex justify-center items-center pt-36 pb-20">

        <div className="w-full max-w-md bg-slate-900 rounded-3xl p-10 border border-slate-800">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-slate-400 text-center mt-3">
            Login to continue to EventHub
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            <div>

              <label className="block mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-violet-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div>

              <label className="block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-violet-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
              className="w-full bg-violet-600 hover:bg-violet-700 py-4 rounded-xl font-semibold transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-slate-400 mt-8">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-violet-400 hover:underline"
            >
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}