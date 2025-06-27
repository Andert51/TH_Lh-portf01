import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  reinay01,
  moon01,
  coffee01,
  lilith01,
} from "../assets";

import { charactersDatabase } from "./characters";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Journey",
  },
  {
    id: "work",
    title: "Gallery",
  },
  {
    id: "characters",
    title: "Characters",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "login",
    title: "Log In",
  },
];

const services = [
  {
    title: "Character Design",
    icon: creator,
  },
  {
    title: "Digital Illustration",
    icon: web,
  },
  {
    title: "Concept Art",
    icon: mobile,
  },
  {
    title: "Story Creation",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Photoshop",
    icon: css,
  },
  {
    name: "Procreate",
    icon: html,
  },
  {
    name: "Clip Studio",
    icon: javascript,
  },
  {
    name: "Illustrator",
    icon: typescript,
  },
  {
    name: "Blender",
    icon: reactjs,
  },
  {
    name: "After Effects",
    icon: redux,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Substance Painter",
    icon: nodejs,
  },
  {
    name: "ZBrush",
    icon: mongodb,
  },
  {
    name: "Maya",
    icon: threejs,
  },
  {
    name: "Krita",
    icon: git,
  },
  {
    name: "Aseprite",
    icon: tailwind,
  },
  {
    name: "Marmoset",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Character Artist",
    company_name: "Independent",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Created original character designs for indie game developers and content creators.",
      "Developed character backstories and visual narratives that resonated with target audiences.",
      "Collaborated with writers and game designers to bring fictional worlds to life.",
      "Specialized in anime and fantasy art styles with focus on emotional storytelling.",
    ],
  },
  {
    title: "Digital Illustrator",
    company_name: "Art Community",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Built a strong social media presence showcasing original character illustrations.",
      "Participated in art challenges and collaborated with fellow artists on joint projects.",
      "Developed signature art style blending traditional and digital techniques.",
      "Created character concept sheets and visual development for personal IP projects.",
    ],
  },
  {
    title: "Commission Artist",
    company_name: "Online Platforms",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Fulfilled custom character commissions for clients worldwide through various platforms.",
      "Specialized in creating detailed character portraits with rich backstories and lore.",
      "Maintained high client satisfaction through clear communication and revision processes.",
      "Expanded skill set to include character turnarounds and expression sheets.",
    ],
  },
  {
    title: "Professional Character Designer",
    company_name: "Creative Studio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Leading character design projects for original intellectual properties and client work.",
      "Creating comprehensive character documentation including personality profiles and world-building.",
      "Mentoring emerging artists in character design principles and storytelling through art.",
      "Continuously evolving artistic style while maintaining consistent quality and vision.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lhyann brought my original character vision to life in ways I never imagined. The attention to detail and emotional depth is incredible.",
    name: "Maya Chen",
    designation: "Game Developer",
    company: "Indie Studio",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Lhyann was a dream. She understood my character's personality perfectly and created art that tells a complete story.",
    name: "Alex Rivera",
    designation: "Writer",
    company: "Creative Collective",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The character designs Lhyann created for our project exceeded all expectations. Her storytelling through art is phenomenal!",
    name: "Emma Watson",
    designation: "Creative Director",
    company: "Digital Arts Inc",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Function to get 3 random characters for the gallery
const getRandomCharactersForGallery = () => {
  const shuffled = [...charactersDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((character, index) => ({
    name: character.name,
    description: character.backstory,
    tags: [
      {
        name: character.element.toLowerCase(),
        color: "blue-text-gradient",
      },
      {
        name: character.category.toLowerCase().replace(/\s+/g, ''),
        color: "green-text-gradient",
      },
      {
        name: "digitalart",
        color: "pink-text-gradient",
      },
    ],
    image: character.image,
    source_code_link: "https://artstation.com/",
  }));
};

const projects = getRandomCharactersForGallery();

export { services, technologies, experiences, testimonials, projects };
