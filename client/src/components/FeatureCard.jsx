import { ArrowRight } from "lucide-react";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-[#151515] border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">

      <div className="w-14 h-14 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 text-3xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-zinc-400 leading-7">
        {description}
      </p>

      <button className="flex items-center gap-2 mt-8 text-violet-400 hover:text-violet-300">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
}