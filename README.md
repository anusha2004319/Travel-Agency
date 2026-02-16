# 🌊 Voyazure — Curated Journeys Beyond the Horizon

A modern, fully responsive **Travel Agency Website** built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The website showcases tour packages, destinations, and travel services with a user-friendly interface optimized for both mobile and desktop devices.

![Voyazure Travel Agency](https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
- [Screenshots](#screenshots)
- [Contact](#contact)

---

## 📖 About the Project

**Voyazure** is a fully responsive travel agency website designed to showcase tour packages, popular destinations, and travel services. It provides an intuitive, modern user experience to help potential customers explore travel options and submit booking inquiries.

The website features:
- Dynamic tour package listings with category-based filtering
- A beautiful hero section with a search interface
- An interactive inquiry/booking form with validation and success feedback
- Smooth scroll navigation and animations
- A mobile-first responsive design

---

## ✨ Features

### 🧭 Navigation
- **Fixed Navbar** with transparent-to-white scroll transition effect
- **Mobile Hamburger Menu** with smooth open/close animation
- **Smooth Scroll** navigation to all sections
- **Phone number** display with click-to-call: `+91 9121368485`
- **"Book Now"** CTA button in the header

### 🏖️ Hero Section
- Full-screen hero with background image and gradient overlays
- Animated heading with gradient text effects
- **Search Box** with destination, date, and travelers inputs
- Key statistics display (50K+ Happy Travelers, 120+ Destinations, 300+ Packages, 15+ Years)
- Scroll-down indicator with bounce animation

### 🌍 Popular Destinations
- Grid of **6 curated destinations**: Santorini, Bali, Machu Picchu, Kyoto, Maldives, Swiss Alps
- Image hover zoom animation
- Star ratings and review counts
- Explore links to packages section

### 📦 Tour Packages
- **8 tour packages** across multiple categories
- **Dynamic category filtering**: All, Adventure, Wellness, Cultural, Luxury, Wildlife
- **Like/Favorite** functionality with heart toggle
- Featured badges for highlighted packages
- Package details including duration, group size, highlights, and pricing
- Discount pricing with strikethrough original price
- "Book Now" buttons linking to the contact form

### 🛎️ Services
- **6 service cards** with unique gradient icons:
  - Customized Itineraries
  - Flight & Hotel Booking
  - Guided Tours
  - Travel Insurance
  - Visa Assistance
  - 24/7 Support
- Hover animations with expanding background decoration
- CTA banner with "Get Free Quote" and "View All Packages" buttons

### 💬 Testimonials
- **Desktop**: 4-column grid layout with all reviews visible
- **Mobile**: Carousel with navigation controls and dot indicators
- Customer avatars, ratings, names, locations, and reviews
- Quote icon styling

### 📝 Inquiry / Booking Form
- Comprehensive form fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number
  - Preferred Destination (dropdown, required)
  - Number of Travelers (dropdown)
  - Travel Date (date picker)
  - Budget Range (dropdown)
  - Additional Details (textarea)
- **Form validation** with required fields
- **Loading state** with animated spinner during submission
- **Success confirmation** with checkmark animation
- Auto-reset after successful submission

### 📧 Footer
- **Newsletter subscription** with email input
- Organized link columns: Company, Support, Destinations, Legal
- Brand logo and tagline
- Social media icons (Instagram, Twitter, Facebook)
- **Back-to-top** button with smooth scroll
- Copyright notice

### 🎨 Design & UX
- **Teal/Emerald** gradient color scheme
- Glassmorphism effects on hero elements
- Smooth hover animations and transitions
- Custom scrollbar styling
- Fade-in-up, slide-in, and float animations
- Shadow effects with color-tinted shadows

---

## 🛠️ Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| **React 19**      | UI component library             |
| **TypeScript**    | Type-safe JavaScript             |
| **Vite 7**        | Build tool & dev server          |
| **Tailwind CSS 4**| Utility-first CSS framework      |
| **Lucide React**  | Modern icon library              |
| **clsx**          | Conditional class names          |
| **tailwind-merge**| Tailwind class conflict resolver |

---

## 📁 Project Structure

```
voyazure/
├── index.html                    # Entry HTML file
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
├── README.md                     # Project documentation
│
└── src/
    ├── main.tsx                  # React app entry point
    ├── App.tsx                   # Root App component
    ├── index.css                 # Global styles & animations
    │
    ├── components/
    │   ├── Navbar.tsx            # Fixed navigation bar
    │   ├── Hero.tsx              # Hero section with search
    │   ├── Destinations.tsx      # Popular destinations grid
    │   ├── Packages.tsx          # Tour packages with filtering
    │   ├── Services.tsx          # Travel services section
    │   ├── Testimonials.tsx      # Customer reviews
    │   ├── ContactForm.tsx       # Inquiry/booking form
    │   └── Footer.tsx            # Footer with newsletter
    │
    ├── data/
    │   └── data.ts               # Static data & TypeScript interfaces
    │
    └── utils/
        └── cn.ts                 # Utility for merging class names
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/voyazure.git
   cd voyazure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🧩 Components Overview

### `<Navbar />`
Fixed navigation bar that transitions from transparent (on hero) to white with shadow on scroll. Includes logo, nav links, phone number, and "Book Now" CTA. Features a responsive hamburger menu for mobile.

### `<Hero />`
Full-viewport hero section with a tropical beach background image, gradient overlays, animated text, a search box (destination/date/travelers), and four key statistics. Includes a bouncing scroll indicator.

### `<Destinations />`
Displays 6 popular travel destinations in a responsive grid (1/2/3 columns). Each card features a destination image with hover zoom, star rating, review count, description, and explore link.

### `<Packages />`
Dynamic tour package listing with 6 category filter buttons. Displays 8 packages with images, ratings, duration, group size, highlights, pricing with discounts, like/favorite toggle, and "Book Now" buttons.

### `<Services />`
Showcases 6 travel services in a grid layout. Each card has a unique gradient-colored icon, title, and description with hover animation. Includes a gradient CTA banner at the bottom.

### `<Testimonials />`
Customer reviews section with two layouts: a 4-column grid for desktop and a carousel with navigation for mobile. Features customer avatars, star ratings, quotes, and location info.

### `<ContactForm />`
Full inquiry/booking form with 8 fields, form validation, loading spinner during submission, and animated success confirmation. Includes a contact info sidebar with phone, email, working hours, and social links.

### `<Footer />`
Newsletter subscription section, organized footer links in 4 columns, brand information, social media buttons, copyright notice, and back-to-top button.

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Layout                          |
|------------|-------------|---------------------------------|
| `sm`       | ≥ 640px     | 2-column grids                  |
| `md`       | ≥ 768px     | Desktop testimonials grid       |
| `lg`       | ≥ 1024px    | 3-column grids, side-by-side    |
| `xl`       | ≥ 1280px    | 4-column package grid           |

---

## 📞 Contact

- **Phone**: +91 9121368485
- **Email**: hello@voyazure.com
- **Website**: Voyazure Travel Co.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by Voyazure Travel Co. — <em>Curated Journeys Beyond the Horizon</em>
</p>
