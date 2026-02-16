import { useState } from "react";
import { Star, Clock, Users, Check, Heart } from "lucide-react";
import { tourPackages } from "@/data/data";
import { FallbackImage } from "./FallbackImage";

const categories = ["All", "Adventure", "Wellness", "Cultural", "Luxury", "Wildlife"];

export function Packages() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedPackages, setLikedPackages] = useState<number[]>([]);

  const filteredPackages =
    activeCategory === "All"
      ? tourPackages
      : tourPackages.filter((pkg) => pkg.category === activeCategory);

  const toggleLike = (id: number) => {
    setLikedPackages((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
            Tour Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Curated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Travel Packages
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Choose from our handcrafted tour packages designed to give you the best travel experiences at unbeatable prices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-teal-400 to-emerald-500">
                <FallbackImage
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fallbackText={pkg.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {pkg.featured && (
                  <span className="absolute top-3 left-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    ✨ Featured
                  </span>
                )}

                <button
                  onClick={() => toggleLike(pkg.id)}
                  className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-4 w-4 transition-colors ${
                      likedPackages.includes(pkg.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 shadow-lg">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-gray-800">{pkg.rating}</span>
                  <span className="text-xs text-gray-500">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-1">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{pkg.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {pkg.title}
                </h3>

                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {pkg.groupSize}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4 flex-1">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-xs text-gray-600">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">/person</span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No packages found for this category. Try another filter!</p>
          </div>
        )}
      </div>
    </section>
  );
}
