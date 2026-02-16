export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface TourPackage {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  highlights: string[];
  category: string;
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  tour: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    description: "Iconic white-washed buildings with blue domes overlooking the Aegean Sea.",
    rating: 4.9,
    reviews: 2340,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Tropical paradise with ancient temples, lush rice terraces, and pristine beaches.",
    rating: 4.8,
    reviews: 3120,
  },
  {
    id: 3,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    description: "Ancient Incan citadel set high in the Andes Mountains, a world wonder.",
    rating: 4.9,
    reviews: 1890,
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Traditional temples, stunning gardens, and the beauty of Japanese culture.",
    rating: 4.7,
    reviews: 2650,
  },
  {
    id: 5,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Crystal-clear waters, overwater villas, and world-class marine life.",
    rating: 4.9,
    reviews: 1970,
  },
  {
    id: 6,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    description: "Majestic mountain peaks, scenic train rides, and charming alpine villages.",
    rating: 4.8,
    reviews: 2210,
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Greek Island Hopping Adventure",
    destination: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    duration: "10 Days / 9 Nights",
    groupSize: "Max 15 people",
    price: 2499,
    originalPrice: 3199,
    rating: 4.9,
    reviews: 186,
    highlights: ["Santorini Sunset", "Athens Acropolis", "Mykonos Beaches", "Local Cuisine Tour"],
    category: "Adventure",
    featured: true,
  },
  {
    id: 2,
    title: "Bali Spiritual Retreat",
    destination: "Indonesia",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 people",
    price: 1899,
    originalPrice: 2399,
    rating: 4.8,
    reviews: 234,
    highlights: ["Temple Visits", "Rice Terrace Trek", "Yoga & Meditation", "Waterfall Excursion"],
    category: "Wellness",
    featured: true,
  },
  {
    id: 3,
    title: "Peru: Inca Trail to Machu Picchu",
    destination: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    duration: "12 Days / 11 Nights",
    groupSize: "Max 10 people",
    price: 3299,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 142,
    highlights: ["Inca Trail Hike", "Machu Picchu", "Sacred Valley", "Cusco City Tour"],
    category: "Adventure",
    featured: true,
  },
  {
    id: 4,
    title: "Japanese Culture & Cuisine",
    destination: "Japan",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    duration: "14 Days / 13 Nights",
    groupSize: "Max 16 people",
    price: 4199,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 198,
    highlights: ["Tokyo Exploration", "Kyoto Temples", "Sushi Making Class", "Mt. Fuji Day Trip"],
    category: "Cultural",
    featured: false,
  },
  {
    id: 5,
    title: "Maldives Luxury Escape",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "Private",
    price: 3599,
    originalPrice: 4299,
    rating: 4.9,
    reviews: 312,
    highlights: ["Overwater Villa", "Snorkeling Safari", "Spa Treatment", "Sunset Cruise"],
    category: "Luxury",
    featured: true,
  },
  {
    id: 6,
    title: "Swiss Alps Winter Wonderland",
    destination: "Switzerland",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
    duration: "8 Days / 7 Nights",
    groupSize: "Max 14 people",
    price: 3899,
    originalPrice: 4599,
    rating: 4.8,
    reviews: 167,
    highlights: ["Skiing & Snowboarding", "Glacier Express", "Chocolate Factory", "Alpine Village Tour"],
    category: "Adventure",
    featured: false,
  },
  {
    id: 7,
    title: "African Safari Experience",
    destination: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    duration: "9 Days / 8 Nights",
    groupSize: "Max 8 people",
    price: 4599,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 289,
    highlights: ["Big Five Safari", "Masai Mara", "Hot Air Balloon", "Cultural Village Visit"],
    category: "Wildlife",
    featured: false,
  },
  {
    id: 8,
    title: "Mediterranean Cruise & Relax",
    destination: "Italy & Croatia",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
    duration: "11 Days / 10 Nights",
    groupSize: "Max 20 people",
    price: 2999,
    originalPrice: 3799,
    rating: 4.7,
    reviews: 213,
    highlights: ["Venice Gondola Ride", "Dubrovnik Old Town", "Island Hopping", "Wine Tasting"],
    category: "Luxury",
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Customized Itineraries",
    description: "Tailored travel plans designed around your preferences, interests, and budget for the perfect getaway.",
    icon: "map",
  },
  {
    id: 2,
    title: "Flight & Hotel Booking",
    description: "Hassle-free booking with exclusive deals on flights, hotels, and resorts worldwide.",
    icon: "plane",
  },
  {
    id: 3,
    title: "Guided Tours",
    description: "Expert local guides who bring destinations to life with insider knowledge and cultural insights.",
    icon: "users",
  },
  {
    id: 4,
    title: "Travel Insurance",
    description: "Comprehensive coverage for peace of mind, including trip cancellation and medical emergencies.",
    icon: "shield",
  },
  {
    id: 5,
    title: "Visa Assistance",
    description: "End-to-end visa processing support for a smooth and stress-free travel experience.",
    icon: "file-text",
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you before, during, and after your trip.",
    icon: "headphones",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    avatar: "SM",
    location: "New York, USA",
    rating: 5,
    text: "The Greek Island Hopping trip was absolutely magical! Every detail was perfectly planned. The sunsets in Santorini were breathtaking. Can't wait to book my next adventure!",
    tour: "Greek Island Hopping Adventure",
  },
  {
    id: 2,
    name: "James Chen",
    avatar: "JC",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Bali retreat exceeded all expectations. The yoga sessions, temple visits, and the incredible food made it a life-changing experience. Highly recommend Wanderlust!",
    tour: "Bali Spiritual Retreat",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "ER",
    location: "Madrid, Spain",
    rating: 5,
    text: "Hiking the Inca Trail was a dream come true. Our guide was incredibly knowledgeable and the group was fantastic. Machu Picchu at sunrise is something I'll never forget.",
    tour: "Peru: Inca Trail to Machu Picchu",
  },
  {
    id: 4,
    name: "David Park",
    avatar: "DP",
    location: "Seoul, South Korea",
    rating: 5,
    text: "The Maldives luxury escape was pure paradise. The overwater villa was stunning, and the snorkeling was world-class. Perfect honeymoon destination!",
    tour: "Maldives Luxury Escape",
  },
];

export const stats = [
  { label: "Happy Travelers", value: "50K+" },
  { label: "Destinations", value: "120+" },
  { label: "Tour Packages", value: "300+" },
  { label: "Years Experience", value: "15+" },
];
