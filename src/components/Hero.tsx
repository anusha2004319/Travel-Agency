import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";
import { stats } from "@/data/data";

export function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-emerald-900">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
          alt="Beautiful tropical beach"
          className={`h-full w-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Explore 120+ Destinations Worldwide
            </span>
          </div>

          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ animationDelay: "0.15s" }}>
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
              Dream
            </span>{" "}
            <br />
            Destination
          </h1>

          <p className="animate-fade-in-up mt-6 max-w-xl text-lg text-white/80 leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Embark on unforgettable journeys with curated travel experiences.
            From serene beaches to majestic mountains, we craft the perfect
            adventure for you.
          </p>

          {/* Search Box */}
          <div className="animate-fade-in-up mt-10" style={{ animationDelay: "0.45s" }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0">
                <div className="flex items-center gap-3 px-4 py-3 md:border-r border-white/20">
                  <MapPin className="h-5 w-5 text-teal-300 shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium">Destination</p>
                    <p className="text-sm text-white font-semibold">Where to?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 md:border-r border-white/20">
                  <Calendar className="h-5 w-5 text-teal-300 shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium">Date</p>
                    <p className="text-sm text-white font-semibold">Pick a date</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <Users className="h-5 w-5 text-teal-300 shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium">Travelers</p>
                    <p className="text-sm text-white font-semibold">2 Adults</p>
                  </div>
                </div>
                <div className="px-2 py-2">
                  <a
                    href="#packages"
                    className="flex items-center justify-center h-full rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all hover:scale-[1.02]"
                  >
                    Explore Tours
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl" style={{ animationDelay: "0.6s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#destinations">
          <ChevronDown className="h-8 w-8 text-white/50" />
        </a>
      </div>
    </section>
  );
}
