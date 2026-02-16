import { useState, useEffect } from "react";
import { Menu, X, Compass, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`rounded-xl p-2 transition-colors ${isScrolled ? 'bg-gradient-to-br from-teal-500 to-emerald-600' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Voyazure
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  isScrolled
                    ? "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919121368485"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-600" : "text-white/90"
              }`}
            >
              <Phone className="h-4 w-4" />
              +91 9121368485
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

