import { Map, Plane, Users, Shield, FileText, Headphones } from "lucide-react";
import { services } from "@/data/data";

const iconMap: Record<string, React.ReactNode> = {
  map: <Map className="h-7 w-7" />,
  plane: <Plane className="h-7 w-7" />,
  users: <Users className="h-7 w-7" />,
  shield: <Shield className="h-7 w-7" />,
  "file-text": <FileText className="h-7 w-7" />,
  headphones: <Headphones className="h-7 w-7" />,
};

const gradients = [
  "from-teal-500 to-emerald-600",
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
  "from-cyan-500 to-teal-600",
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Travel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              With Us
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We go above and beyond to ensure your travel experience is seamless, memorable, and worry-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[idx]} opacity-5 rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48 group-hover:opacity-10`} />

              <div
                className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[idx]} p-4 text-white shadow-lg mb-6`}
              >
                {iconMap[service.icon]}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Let our expert travel consultants create the perfect itinerary for your dream vacation. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-teal-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href="#packages"
                className="rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
              >
                View All Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
}
