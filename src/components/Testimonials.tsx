import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Travelers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Say
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real stories from real travelers who experienced the magic of our curated journeys.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="h-8 w-8 text-teal-200 mb-4" />

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 p-6 shadow-sm">
            <Quote className="h-8 w-8 text-teal-200 mb-4" />

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-gray-500">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-6 bg-teal-500"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={next}
                  className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
