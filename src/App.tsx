import { Component, type ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

// Error Boundary to prevent blank page on errors
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f172a, #134e4a)",
          color: "white",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif"
        }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Voyazure
          </h1>
          <p style={{ opacity: 0.7, maxWidth: "400px" }}>
            Something went wrong while loading. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.75rem",
              border: "none",
              background: "linear-gradient(to right, #14b8a6, #059669)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "0.875rem"
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Destinations />
        <Packages />
        <Services />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

  );
}
