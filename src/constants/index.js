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
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  java,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  dvc,
  aspirenex,
  bf,
  bsnl,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Vocational Training",
    company_name: "Mejia Thermal Power Station",
    icon: dvc,
    iconBg: "#383E56",
    date: "Jul 2024 - Jul 2024",
    points: [
      "Gaining practical knowledge about the working of transformers in power stations.",
      "Visiting all operating units of the power station .",
      "Developing real-life experience on the working of boilers,generators,condensors and so on.",
      "Submitting a report on the experience gathered regarding the working of various units of the power station.",
    ],
  },
  {
    title: "Web Developer intern",
    company_name: "Aspirenex",
    icon: aspirenex,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Developing user-friendly frontend interface.",
      "Debugging the frontend code.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer intern",
    company_name: "Bluestock Fintech",
    icon: bf,
    iconBg: "#383E56",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vocational Training",
    company_name: "BSNL Training Centre",
    icon: bsnl,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Gaining in-depth theoretical knowledge on broadband network and telecommunication systems.",
      "Visualizing the transfer of data through optical fibres.",
      "Developing an idea on 2G/3G/4G mobile communication.",
      "Gaining hands-on experience with transmission systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It makes use of GSAP from React library to showcase colourful cursor movements making it attractive for the viewers.",
    name: "Motion-art",
    designation: "Source code",
    company: "https://github.com/indraxi/Motion-Art.git",
    
  },
  {
    testimonial:
      "It will notify the users regarding job and internship openings that matches their profile and keep them updated regarding the same .",
    name: "Career-ease",
    designation: "Source code",
    company: "https://github.com/indraxi/CAREER_EASE.git",
    
  },
  {
    testimonial:
      "It scrapes the sample data from the web and analyses the quality of coffee at various parts of the world and generates graphs for better understanding.",
    name: "Coffee quality data analysis",
    designation: "Source code ",
    company: "https://github.com/indraxi/COFFEE-QUALITY-DATA-ANALYSIS.git",
    
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };