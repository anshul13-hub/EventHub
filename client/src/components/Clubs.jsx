import {
  FaCode,
  FaRobot,
  FaMusic,
  FaCamera,
  FaLaptopCode,
  FaPaintBrush,
} from "react-icons/fa";

const clubs = [
  {
    name: "Coding Club",
    icon: <FaCode size={42} />,
    description: "Competitive programming, DSA and coding contests.",
  },
  {
    name: "AI Club",
    icon: <FaRobot size={42} />,
    description: "Artificial Intelligence, ML and Generative AI workshops.",
  },
  {
    name: "Music Club",
    icon: <FaMusic size={42} />,
    description: "Music nights, concerts and jam sessions.",
  },
  {
    name: "Photography Club",
    icon: <FaCamera size={42} />,
    description: "Photography contests and editing workshops.",
  },
  {
    name: "Developer Club",
    icon: <FaLaptopCode size={42} />,
    description: "Web, App and Open Source development.",
  },
  {
    name: "Creative Club",
    icon: <FaPaintBrush size={42} />,
    description: "Design, UI/UX, posters and creative competitions.",
  },
];

export default function Clubs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <p className="text-violet-400 tracking-[5px] uppercase">
          Campus Clubs
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Popular Student Clubs
        </h2>

        <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
          Join communities, participate in activities and
          connect with students who share your interests.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {clubs.map((club) => (

          <div
            key={club.name}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition duration-300 hover:-translate-y-2"
          >

            <div className="text-violet-500">
              {club.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              {club.name}
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              {club.description}
            </p>

            <button className="mt-8 bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl">
              View Activities
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}