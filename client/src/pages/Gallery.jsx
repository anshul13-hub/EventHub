import { useState } from "react";
import Navbar from "../components/Navbar";
// Real-looking high-energy campus life & events dataset
const memories = [
  {
    id: 1,
    title: "The Moment We Won! 🏆",
    category: "Winners",
    vibe: "Pure ecstasy, crying tears of joy, group hugs! 😭❤️",
    story: "Team Alpha lifting the Hackathon Trophy after surviving on 4 hours of sleep and 12 cans of energy drinks.",
    tag: "Tech Stage • Main Arena",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80",
  },
  {
    id: 2,
    title: "Front Row Chaos at BassNight 🎵",
    category: "Concerts",
    vibe: "Bass pumping in the chest, neon lights, absolute madness! 🔥",
    story: "The exact beat drop when 2,000 students jumped together. The ground was literally shaking!",
    tag: "Cultural • Open Air Theater",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80",
  },
  {
    id: 3,
    title: "Mid-Air Clutch Shot 🏀",
    category: "Sports",
    vibe: "Heartbeats stopped... and then the stadium roared! 😱",
    story: "0.2 seconds left on the clock. Final match against our biggest rivals. He shot, and it went clean through!",
    tag: "Sports • Indoor Stadium",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
  },
  {
    id: 4,
    title: "Backstage Group Hug Before the Play 🎭",
    category: "Stage",
    vibe: "Nervous giggles, heavy breathing, best friends forever 🥺",
    story: "Captured right before the curtains pulled up. Everyone was shaking, but we held hands and nailed it.",
    tag: "Cultural • Seminar Hall",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
  },
  {
    id: 5,
    title: "The Audience Wave 👋✨",
    category: "Audience",
    vibe: "A sea of phone flashlights and endless smiles! 🌌",
    story: "During the acoustic session, the entire crowd turned off the arena lights and lit up the night together.",
    tag: "Festival • Main Ground",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
  },
  {
    id: 6,
    title: "3 AM Pizza & Bad Code Jokes 🍕",
    category: "Enjoyment",
    vibe: "Delirious laughing at bugs that don't make sense 😂",
    story: "Nobody cared about the prize anymore. We were just dynamic students enjoying making broken apps together.",
    tag: "Tech • Lab 4",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  {
    id: 7,
    title: "Gold Medal Celebrations! 🥇",
    category: "Winners",
    vibe: "Proud smiles, flying high, absolute legends!",
    story: "Our girls' relay team breaking the campus speed record. Look at those priceless expressions!",
    tag: "Sports • Athletics Track",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
  },
  {
    id: 8,
    title: "Street Dance Face-Off Crew 🔥",
    category: "Stage",
    vibe: "Insane hype, dynamic energy, crowd losing their minds!",
    story: "The jaw-dropping moment the crew pulled off a synchronized flip right in front of the judges.",
    tag: "Cultural • Courtyard",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80",
  },
  {
    id: 9,
    title: "Cheering Till Our Throats Hurt 📣",
    category: "Audience",
    vibe: "Unfiltered campus pride & loud screaming!",
    story: "Candid shot of the hostel batch mates losing their minds after our team hit a boundary on the final ball.",
    tag: "Sports • Cricket Stand",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
  },
];

export default function MemoriesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMemory, setSelectedMemory] = useState(null);

  const categories = ["All", "Winners", "Concerts", "Sports", "Stage", "Audience", "Enjoyment"];

  const filteredMemories = memories.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.vibe.toLowerCase().includes(search.toLowerCase()) ||
      item.story.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
       <div className="bg-slate-950 min-h-screen text-white font-sans antialiased selection:bg-rose-500">
      {/* Scrapbook Dynamic Header */}
      <section className="relative pt-24 pb-12 max-w-7xl mx-auto px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-rose-500/10 to-violet-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6 tracking-wide uppercase">
            ✨ The Campus Scrapbook
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Captured Memories
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
            No boring data. No corporate poses. Just raw feelings, screaming fans, late-night wins, and the best days of our lives. 📸✨
          </p>
            <Navbar />
        </div>

        {/* Real-time Vibe Filter Bar */}
        <div className="mt-12 bg-slate-900/40 backdrop-blur-xl border border-slate-900 rounded-2xl p-4 grid lg:grid-cols-12 gap-4 items-center shadow-2xl">
          <div className="relative lg:col-span-4">
            {/* SVG Search Icon */}
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by vibe ('hugs', 'madness')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-3 pl-14 pr-5 text-slate-200 placeholder-slate-500 outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 lg:col-span-8 lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-rose-500 to-violet-600 text-white shadow-lg shadow-rose-500/20"
                    : "bg-slate-950/60 hover:bg-slate-800 text-slate-400 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scrapbook Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filteredMemories.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10">
            <p className="text-slate-500 text-lg">Aisa koi moment abhi capture nahi hua! Try another word.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMemories.map((memory) => (
              <div
                key={memory.id}
                onClick={() => setSelectedMemory(memory)}
                className="group relative h-[450px] w-full rounded-3xl overflow-hidden border border-slate-900 bg-slate-900/20 cursor-pointer shadow-lg hover:shadow-2xl hover:border-rose-500/30 transition-all duration-500 flex flex-col justify-end"
              >
                {/* Background Image */}
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Immersive Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-lg border border-white/10">
                    {memory.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-bold text-rose-400 flex items-center gap-1.5 drop-shadow">
                    ❤️ {memory.vibe}
                  </p>
                  
                  <h2 className="text-2xl font-black tracking-tight text-white mt-2 drop-shadow-md">
                    {memory.title}
                  </h2>

                  {/* Hidden Details showing smoothly on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-3">
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {memory.story}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-semibold tracking-wide">
                    <span>{memory.tag}</span>
                    <span className="text-rose-400 group-hover:underline flex items-center gap-1">
                      View Memory 📸
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* POPUP LIGHTBOX MODAL */}
      {selectedMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4">
          <div className="relative bg-slate-900 border border-slate-800/80 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl transition-all">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black text-white p-3 rounded-full transition-colors border border-white/10"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-12">
              {/* Media Frame */}
              <div className="md:col-span-7 bg-black flex items-center max-h-[400px] md:max-h-[600px]">
                <img 
                  src={selectedMemory.image} 
                  alt={selectedMemory.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Context Block */}
              <div className="md:col-span-5 p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950">
                <div>
                  <span className="inline-block bg-gradient-to-r from-rose-500 to-violet-600 text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-md mb-4">
                    Live Capture • {selectedMemory.category}
                  </span>
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {selectedMemory.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">{selectedMemory.tag}</p>
                  
                  <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-inner">
                    <span className="text-[10px] font-bold text-rose-400 tracking-widest uppercase block mb-1">
                      💓 The Vibe Check
                    </span>
                    <p className="text-sm text-slate-200 font-medium leading-relaxed">
                      {selectedMemory.vibe}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase block mb-1">
                      What was happening?
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {selectedMemory.story}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedMemory(null)}
                  className="mt-8 w-full bg-gradient-to-r from-rose-500 to-violet-600 hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg"
                >
                  Close & Keep Browsing
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}