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
} from "../assets";

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

const projects = [
  {
    name: "Ethereal Guardians",
    description:
      "A series of mystical character designs featuring elemental guardians, each with unique personalities and backstories. Created for an indie fantasy game with detailed character lore and world-building elements.",
    tags: [
      {
        name: "fantasy",
        color: "blue-text-gradient",
      },
      {
        name: "characterdesign",
        color: "green-text-gradient",
      },
      {
        name: "digitalart",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://artstation.com/",
  },
  {
    name: "Urban Legends",
    description:
      "Modern reimagining of classic mythological characters in contemporary settings. Each illustration tells a story of ancient beings adapting to modern life while maintaining their mystical essence.",
    tags: [
      {
        name: "mythology",
        color: "blue-text-gradient",
      },
      {
        name: "conceptart",
        color: "green-text-gradient",
      },
      {
        name: "storytelling",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://artstation.com/",
  },
  {
    name: "Dreamscape Chronicles",
    description:
      "A collection of original characters living in surreal dreamlike worlds. Each piece explores themes of imagination, identity, and the subconscious mind through vibrant character illustrations.",
    tags: [
      {
        name: "surreal",
        color: "blue-text-gradient",
      },
      {
        name: "originalcharacter",
        color: "green-text-gradient",
      },
      {
        name: "illustration",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://artstation.com/",
  },
  {
    name: "Lost Souls - Reynay Smirov",
    description:
      "The story of Reynay, a 12-year-old mortal girl lost in a magical realm. Displaced by dark magic and adopted by caring wizards, she navigates a world where her mortal nature is both her weakness and her strength. Her curiosity and determination drive her to explore forbidden places as she searches for her true destiny.",
    tags: [
      {
        name: "fantasy",
        color: "blue-text-gradient",
      },
      {
        name: "originalcharacter",
        color: "green-text-gradient",
      },
      {
        name: "digitalart",
        color: "pink-text-gradient",
      },
    ],
    image: reinay01,
    source_code_link: "https://artstation.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
