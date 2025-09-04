import React from "react";
import { motion } from "framer-motion";
import "./SkillsPage.css";

const sections = [
  {
    title: "Core Web",
    items: [
      {
        name: "HTML5",
        level: 85,
        tags: ["Semantic HTML", "Forms", "Accessibility", "SEO"],
        notes: [
          "Builds semantic, accessible UI structures",
          "SEO-friendly markup & form validation best practices",
          "Uses ARIA roles for screen-reader support",
        ],
      },
      {
        name: "CSS",
        level: 80,
        tags: ["Flexbox", "Grid", "Responsive", "Animations"],
        notes: [
          "Responsive layouts with Flexbox & Grid",
          "Reusable utility classes; consistent spacing & typography",
          "Transitions & keyframe animations for smooth UI",
        ],
      },
      {
        name: "JavaScript ",
        level: 78,
        tags: ["Modules", "Async/Await", "DOM", "ESNext"],
        notes: [
          "Clean modular code, async flows, APIs (fetch/Axios)",
          "Array/object patterns, immutability, event handling",
          "Familiar with modern ES proposals (optional chaining, nullish coalescing)",
        ],
      },
      {
        name: "TypeScript (Familiar)",
        level: 60,
        tags: ["Types", "Interfaces", "Generics"],
        notes: [
          "Adds type safety to JavaScript projects",
          "Interfaces & generics for cleaner, scalable code",
        ],
      },
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      {
        name: "React.js",
        level: 75,
        tags: ["Hooks", "Router", "State Mgmt", "Framer Motion"],
        notes: [
          "Component-driven UIs with Hooks & Context",
          "Clean routing, guarded routes, reusable UI patterns",
          "UI animations using Framer Motion",
        ],
      },
      {
        name: "Tailwind CSS",
        level: 70,
        tags: ["Utility-first", "Responsive", "Theming"],
        notes: [
          "Builds rapid, consistent, and responsive UI designs",
          "Follows design tokens for scalable UI",
        ],
      },
    ],
  },
  {
    title: "Programming & Backend",
    items: [
      {
        name: "Java",
        level: 72,
        tags: ["OOP", "Collections", "Streams", "Exception Handling"],
        notes: [
          "Solid OOP design and clean code practices",
          "Comfortable with collections, streams & error handling",
          "Strong grasp of abstraction & modular design",
        ],
      },
      {
        name: "Spring Boot",
        level: 65,
        tags: ["REST APIs", "Validation", "Security (JWT)", "JPA"],
        notes: [
          "Builds RESTful APIs with validation & layered architecture",
          "JWT auth, DTO mapping, exception handling",
          "Database integration with Spring Data JPA",
        ],
      },
      {
        name: "MySQL",
        level: 65,
        tags: ["Schemas", "Joins", "Indexes", "Optimization"],
        notes: [
          "Relational schema design & query optimization",
          "Comfortable with CRUD, joins, constraints & indexes",
          "Understands transactions and stored procedures",
        ],
      },
      {
        name: "Node.js (Learning)",
        level: 50,
        tags: ["APIs", "NPM", "Express"],
        notes: [
          "Building simple REST APIs using Express",
          "Familiar with NPM ecosystem and package management",
        ],
      },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      {
        name: "Git & GitHub",
        level: 78,
        tags: ["Branching", "PRs", "Issues", "CI/CD"],
        notes: [
          "Feature branching, code reviews & clean commit history",
          "Issues & project boards for lightweight PM",
          "Familiar with GitHub Actions for CI/CD",
        ],
      },
      {
        name: "Postman",
        level: 72,
        tags: ["Collections", "Envs", "Testing"],
        notes: [
          "API testing with environments & collections",
          "Automates common flows; documents endpoints",
          "Tests auth flows (JWT, OAuth)",
        ],
      },
      {
        name: "Google Cloud (Certified)",
        level: 55,
        tags: ["Compute", "Storage", "Deployment"],
        notes: [
          "Foundational knowledge from Google Cloud certification",
          "Comfortable with Compute Engine, Storage & deployment basics",
          "Exploring Kubernetes & CI/CD pipelines",
        ],
      },
      {
        name: "VS Code",
        level: 80,
        tags: ["Extensions", "Debugging", "Shortcuts"],
        notes: [
          "Optimized workflow with extensions",
          "Built-in debugging for frontend/backend",
        ],
      },
    ],
  },
  {
    title: "Testing & Deployment",
    items: [
      {
        name: "Jest & React Testing Library (Familiar)",
        level: 55,
        tags: ["Unit Testing", "Integration", "Snapshots"],
        notes: [
          "Writes basic unit & integration tests",
          "Snapshot testing for React components",
        ],
      },
      {
        name: "Deployment",
        level: 60,
        tags: ["Netlify", "Vercel", "Docker (Basic)"],
        notes: [
          "Deploying React apps on Netlify/Vercel",
          "Exploring Docker for containerized applications",
        ],
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        name: "Collaboration",
        level: 80,
        tags: ["Teamwork", "Agile", "Code Reviews"],
        notes: [
          "Experience working in Agile environments (Scrum/Kanban)",
          "Regularly engages in pair programming & code reviews",
        ],
      },
      {
        name: "Problem Solving",
        level: 85,
        tags: ["DSA", "Debugging", "Optimization"],
        notes: [
          "Applies algorithms & data structures effectively",
          "Debugs efficiently and optimizes performance",
        ],
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <motion.div
      className="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-heading">Skills</h2>
      {sections.map((section, i) => (
        <motion.div
          key={i}
          className="skills-category"
          initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>{section.title}</h3>
          <div className="skills-items">
            {section.items.map((item, j) => (
              <motion.div
                key={j}
                className="skill-box"
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{item.name}</span>
                  <span className="skill-level">{item.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
                <div className="skill-tags">
                  {item.tags.map((tag, k) => (
                    <span key={k} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="skill-notes">
                  {item.notes.map((note, l) => (
                    <li key={l}>{note}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
