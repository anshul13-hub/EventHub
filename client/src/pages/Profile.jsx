import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProfile, updateProfile } from "../services/userService";
import toast from "react-hot-toast";
import { FaUserCircle, FaEnvelope, FaBuilding, FaIdCard } from "react-icons/fa";

export default function Profile() {
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    rollNumber: "",
    role: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      setFormData({
        name: data.user.name,
        email: data.user.email,
        department: data.user.department || "",
        rollNumber: data.user.rollNumber || "",
        role: data.user.role,
      });

      setLoading(false);
    } catch (error) {
      toast.error("Failed to load profile");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile({
        name: formData.name,
        department: formData.department,
        rollNumber: formData.rollNumber,
      });

      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />

        <div className="pt-40 text-center text-2xl">
          Loading Profile...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">

          <div className="flex flex-col items-center">

            <FaUserCircle
              className="text-violet-500"
              size={110}
            />

            <h1 className="text-4xl font-bold mt-5">
              {formData.name}
            </h1>

            <p className="text-slate-400 mt-2">
              {formData.role.toUpperCase()}
            </p>

          </div>

          <form
            onSubmit={handleUpdate}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >

            <div>

              <label className="text-slate-400">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full bg-slate-800 rounded-xl p-4 border border-slate-700 outline-none"
              />

            </div>

            <div>

              <label className="text-slate-400">
                Email
              </label>

              <div className="mt-2 flex items-center gap-3 bg-slate-800 rounded-xl p-4 border border-slate-700">

                <FaEnvelope />

                <input
                  value={formData.email}
                  disabled
                  className="bg-transparent outline-none w-full"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Department
              </label>

              <div className="mt-2 flex items-center gap-3 bg-slate-800 rounded-xl p-4 border border-slate-700">

                <FaBuilding />

                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Roll Number
              </label>

              <div className="mt-2 flex items-center gap-3 bg-slate-800 rounded-xl p-4 border border-slate-700">

                <FaIdCard />

                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full"
                />

              </div>

            </div>

            <div className="md:col-span-2 flex gap-5 mt-4">

              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold"
              >
                Logout
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}