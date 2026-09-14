// index.js
export const servicesData = [
  {
    title: "Java Full-Stack Engineering",
    description:
      "I build secure and scalable applications using Java, Spring Boot, React, and modern databases. Every solution is designed with clean architecture, performance, and maintainability in mind, while continuously exploring better ways to engineer reliable software.",
    items: [
      {
        title: "Backend & API Engineering",
        description: "(Spring Boot, REST APIs, Business Logic)",
      },
      {
        title: "Database Engineering",
        description: "(MySQL, MongoDB, JPA, Hibernate)",
      },
      {
        title: "Authentication & Security",
        description: "(JWT, Spring Security, Role-Based Access Control)",
      },
    ],
  },
  {
    title: "System Architecture",
    description:
      "I focus on designing maintainable and scalable systems where backend services, databases, and user interfaces work together seamlessly to deliver reliable applications.",
    items: [
      {
        title: "Layered Architecture",
        description: "(Controller, Service, Repository Pattern)",
      },
      {
        title: "Database Design",
        description: "(ER Models, Relationships, Query Optimization)",
      },
      {
        title: "API Integration",
        description: "(Frontend-Backend Communication)",
      },
    ],
  },
  {
    title: "Application Security",
    description:
      "Security is an essential part of every application. I implement authentication and authorization mechanisms that protect users and ensure reliable access control.",
    items: [
      {
        title: "Spring Security",
        description: "(Authentication, Authorization, Role-Based Access Control)",
      },
      {
        title: "JWT Authentication",
        description: "(Secure Stateless APIs)",
      },
      {
        title: "Role-Based Access",
        description: "(Admin and User Permissions)",
      },
    ],
  },
  {
    title: "Performance & Scalability",
    description:
      "I strive to build applications that remain reliable, maintainable, and efficient as requirements evolve and systems grow.",
    items: [
      {
        title: "Code Optimization",
        description: "(Clean Code, Refactoring)",
      },
      {
        title: "Scalable Design",
        description: "(Modular and Maintainable Systems)",
      },
      {
        title: "Deployment & Monitoring",
        description: "(Production-Ready Applications)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Browser-Based Operating System",
    description:
      "A fully interactive desktop-style OS built entirely with Vanilla JavaScript. Features include a camera app, gallery, music player, weather app, draggable windows, and multi-app environment built using pure DOM manipulation.",
    href: "https://apna-os.vercel.app/",
    image: "/assets/projects/os-project.png",
    bgImage: "/assets/background/blanket.jpg",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "SCSS" },
      { id: 3, name: "HTML" },
      { id: 4, name: "DOM APIs" },
    ],
  },

  {
    id: 2,
    name: "K72 Agency Website",
    description:
      "A modern, animation-heavy portfolio built with React and GSAP. Includes smooth section transitions, parallax layers, interactive UI components, and mobile-first responsive design.",
    href: "https://k72-web-site.vercel.app/",
    image: "/assets/projects/k72.png",
    bgImage: "/assets/background/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "SCSS" },
    ],
  },

  {
    id: 3,
    name: "YouTube Clone",
    description:
      "A high-performance YouTube clone using the YouTube Data API with live chat, category filters, debounced search, infinite scrolling, and clean state management for seamless UX.",
    href: "https://youtube-web-site.vercel.app/",
    image: "/assets/projects/youtube.png",
    bgImage: "/assets/background/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Redux" },
      { id: 3, name: "YouTube API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },

  {
    id: 4,
    name: "E-Commerce Web App",
    description:
      "A fully responsive e-commerce platform built with React featuring infinite scrolling product feed, add-to-cart system, category filtering, detailed product pages, client-side routing, and optimized performance for a smooth shopping experience.",
    href: "https://aapki-dukkan.vercel.app/",
    image: "/assets/projects/E-comerce.png",
    bgImage: "/assets/background/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "React Router" },
      { id: 3, name: "Redux" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-yadav8/" },
  { name: "GitHub", href: "https://github.com/Abhishek7y2" },
];