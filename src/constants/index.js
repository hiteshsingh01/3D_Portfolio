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
  weatherapp,
  iotaccident,
  ecommerceProfessional,
  faceAttendancesystem,
  filesystem,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Salesforce Application Architect",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Supabase", icon: mongodb }, // using mongodb icon for supabase
  { name: "Photoshop", icon: figma }, // using figma icon for photoshop
  { name: "Git", icon: git },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Windows", icon: web }, // using web icon for Windows
  { name: "RHEL/CENTOS", icon: backend }, // using backend icon for Linux
];

const experiences = [
  {
    title: "Salesforce Application Architect",
    company_name: "Techforce Academy",
    icon: backend,
    iconBg: "#383E56",
    date: "July 2024 – Aug 2024",
    points: [
      "Gained hands-on experience with Salesforce Lightning for building responsive user interfaces.",
      "Experienced in using Salesforce CRM for managing customer data and automating workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Internpe",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2024 – June 2024",
    points: [
      "Designed and implemented responsive front-end components for a calculator and a to-do list application, showcasing expertise in HTML and CSS.",
      "Created and maintained the front-end of an e-commerce website, utilizing HTML and CSS to deliver a user-friendly interface.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IOT based Accident Detection System",
    description:
      "A system that detects accidents using IoT sensors and sends alerts for quick response.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "hardware", color: "green-text-gradient" },
    ],
    image: iotaccident,
  },
  {
    name: "E-commerce Website Frontend",
    description:
      "A user-friendly e-commerce website frontend built with HTML and CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: ecommerceProfessional, // placeholder
    source_code_link: "https://github.com/hiteshsingh01/ecommerce-website",
    live_preview_link: "https://hiteshsingh01.github.io/ecommerce-website/",
  },
  {
    name: "Windows File Manager App",
    description:
      "A modern Streamlit app to browse, search, edit, move, and manage files and folders visually on Windows.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "tkinter", color: "pink-text-gradient" },
    ],
    image: filesystem, // You can replace this with a relevant image if available
    source_code_link: "https://github.com/hiteshsingh01/File_Manager_App",
  },
  {
    name: "Weather Web App",
    description:
      "A weather web app using weather API to display real-time weather information.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "weather-api", color: "pink-text-gradient" },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/hiteshsingh01/Weather",
    live_preview_link: "https://hiteshsingh01.github.io/Weather/",
  },
  {
    name: "Face Recognition Attendance System",
    description:
      "A real-time attendance system using OpenCV and DeepFace. Detects faces via webcam and marks attendance in a CSV file.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "deepface", color: "pink-text-gradient" },
    ],
    image: faceAttendancesystem, // professional image
    source_code_link: "https://github.com/hiteshsingh01/AttendanceSystem",
  },
];

export { services, technologies, experiences, testimonials, projects };
