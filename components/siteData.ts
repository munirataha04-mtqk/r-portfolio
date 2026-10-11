
export const SITE = {
  name: "RAJ GARCIA",
  fullName: "Raj Garcia",
  location: "Karachi, Pakistan",

  // Replace with your real contact details.
  email: "your-email@example.com",
  instagramUser: "@your.instagram",
  instagramUrl: "https://instagram.com/your.instagram",

  // Add your Formspree endpoint when ready.
  formEndpoint: "",
};

export const NAV = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "PORTFOLIO", id: "portfolio" },
  { label: "SERVICES", id: "services" },
  { label: "CONTACT", id: "contact" },
];

export const CATEGORIES = [
  "All",
  "Portraits",
  "Landscape",
  "Street",
  "Travel",
  "Nature",
];

export type Photo = {
  src: string;
  alt: string;
  categories: string[];
  wide?: boolean;
  area: string;
};

export const PHOTOS: Photo[] = [
  {
    src: "/images/portrait-1.jpg",
    alt: "Leopard peeking from behind a tree trunk in a dense green forest",
    categories: ["Portraits"],
    area: "lg:[grid-area:1/1/11/2]",
  },
  {
    src: "/images/landscape.jpg",
    alt: "Flowing waterfall rushing over moss-covered rocks in a lush green forest",
    categories: ["Forest waterfall"],
    wide: true,
    area: "lg:[grid-area:1/2/11/3]",
  },
  {
    src: "/images/street.jpg",
    alt: "City street at sunset with buildings and distant traffic",
    categories: ["Street"],
    area: "lg:[grid-area:1/3/10/4]",
  },
  {
    src: "/images/nature.jpg",
    alt: "Green leaves covered in water droplets",
    categories: ["Nature"],
    area: "lg:[grid-area:1/4/11/5]",
  },
  {
    src: "/images/travel.jpg",
    alt: "Sunset over the ocean with warm reflections on the water",
    categories: ["Travel", "Nature"],
    area: "lg:[grid-area:11/1/21/2]",
  },
  {
    src: "/images/urban.jpg",
    alt: "Black and white old-city alley with a person walking",
    categories: ["Street"],
    wide: true,
    area: "lg:[grid-area:11/2/21/3]",
  },
  {
    src: "/images/portrait-2.jpg",
    alt: "Silhouette against a warm sunset",
    categories: ["Portraits"],
    area: "lg:[grid-area:10/3/21/4]",
  },
  {
    src: "/images/mosque.jpg",
    alt: "Illuminated mosque at night against a dark sky",
    categories: ["Travel"],
    area: "lg:[grid-area:11/4/21/5]",
  },
];
