import React from "react";
import { motion } from "framer-motion";
import "./ProjectPage.css";

export default function ProjectPage() {
  const projects = [
    {
      title: "Digital Fitness Marketplace",
      date: "Jan 2025",
      overview:
        "A full-stack web platform designed to connect fitness enthusiasts with professional trainers, nutritionists, and wellness experts. The system enables seamless booking, personalized fitness plans, and secure handling of user data, ensuring a smooth and engaging digital experience.",
      problem:
        "Before this project, users found it difficult to discover verified trainers and book sessions online. Most available platforms lacked trust, authentication, and ease of use.",
      solution:
        "I developed a scalable application with Spring Boot as the backend and React.js as the frontend. JWT authentication was implemented for secure user login and authorization, while REST APIs managed seamless communication between services. The application features a responsive design that ensures compatibility across mobile and desktop devices.",
      highlights:
        "The platform includes trainer and service listings with detailed profiles, user authentication with secure login, API-driven data flow for scalability, and a clean responsive interface optimized for all screen sizes.",
      role:
        "As the Full-Stack Developer, I implemented the Spring Boot backend, built and integrated the React frontend, and designed the database schema using MySQL. Additionally, I worked on API documentation and testing using Postman.",
      tech: ["Spring Boot", "React.js", "MySQL", "Postman", "GitHub","CSS"],
      link: "https://github.com/Thamaraibaranidharan/rest-api",
    },
    {
      title: "Library Management System",
      date: "July 2024",
      overview:
        "A responsive React.js-based web application created to modernize library workflows. It allows librarians to manage catalogs, track borrowed books, and handle returns while giving students access to search and view book availability online.",
      problem:
        "Traditional library operations were largely manual, resulting in time-consuming processes and lack of accessibility for students outside the library.",
      solution:
        "I built a dynamic library management system that provides catalog browsing, borrowing and returning management, and real-time tracking. The use of React Hooks made the components reusable and efficient, while CSS Grid and Flexbox ensured a modern responsive layout.",
      highlights:
        "The project focuses on providing a search bar for quick lookups, an easy borrow-return workflow, reusable UI components for consistency, and a mobile-friendly design.",
      role:
        "As the Frontend Developer, I designed and built the entire UI, managed component-based state handling, and styled layouts with CSS Grid and Flexbox to achieve a clean and modern interface.",
      tech: ["React.js", "CSS (Flexbox & Grid)", "React Hooks", "GitHub"],
      link: "https://github.com/Thamaraibaranidharan/React",
    },
    {
      title: "Product Management System",
      date: "Aug 2025",
      overview:
        "A dashboard-based full-stack system developed for businesses to manage product catalogs, categories, and stock updates in real time. The goal is to simplify inventory management with a centralized, interactive dashboard UI.",
      problem:
        "Small and medium businesses often lack an integrated system to manage products, categories, and stock, resulting in inefficiencies and scattered records.",
      solution:
        "This system introduces CRUD-based product and category management with REST APIs in Spring Boot and a React.js dashboard frontend. It supports role-based access control for Admin and Users, ensuring secure and structured access. The platform provides live dashboards for monitoring stock levels, along with automated notification triggers for low inventory or updates, improving operational efficiency.",
      highlights:
        "Includes role-based access (Admin/User), CRUD for product and category management, live dashboards for real-time visibility, inventory tracking with alerts, and persistence with MySQL. Designed for usability and decision-making efficiency.",
      role:
        "As a Full-Stack Developer, I designed and implemented secure backend APIs with Spring Boot, created an interactive dashboard UI in React.js, integrated MySQL for data storage, and built real-time notifications and role-based access control.",
      tech: ["Spring Boot", "React.js", "MySQL", "Postman", "GitHub","CSS"],
      link: "https://github.com/iamneo-production/48831891-f7f2-4296-8d44-751907141c73-892b8b5a-df8f-4932-9e1b-346b9b7bf5be",
    },
  ];

  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">My Projects</h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="project-content">
            <h3 className="project-title">
              {project.title} <span>({project.date})</span>
            </h3>

            <p><strong>Overview:</strong> {project.overview}</p>
            <p><strong>Challenge:</strong> {project.problem}</p>
            <p><strong>Solution:</strong> {project.solution}</p>
            <p><strong>Highlights:</strong> {project.highlights}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>

            {/* Blue GitHub Box */}
            <div className="github-box">
              <a href={project.link} target="_blank" rel="noreferrer">
                🔗 View Project on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
