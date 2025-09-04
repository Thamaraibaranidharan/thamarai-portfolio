// HelpPage.jsx
import React from "react";

const helpTopics = [
  {
    icon: "💼",
    title: "Portfolio Overview",
    description: "Understand how to navigate and explore different sections of my portfolio effectively.",
  },
  {
    icon: "📂",
    title: "Projects",
    description: "Learn about the projects I have built, including descriptions, technologies, and outcomes.",
  },
  {
    icon: "🛠️",
    title: "Skills",
    description: "Explore my technical and professional skills that I bring to problem-solving.",
  },
  {
    icon: "📬",
    title: "Contact",
    description: "Get guidance on how to reach me via email or through the contact form.",
  },
  {
    icon: "👤",
    title: "About Me",
    description: "Know more about my background, interests, and career aspirations.",
  },
  {
    icon: "❓",
    title: "FAQs",
    description: "Find answers to common questions about my portfolio and work.",
  },
];

const HelpPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Help Center</h1>
        <p style={styles.subtitle}>
          Need assistance navigating my portfolio? Explore the guide below to learn more about my work, skills, and how to get in touch.
        </p>
      </div>

      {/* Help Topics */}
      <div style={styles.topicsContainer}>
        {helpTopics.map((topic, index) => (
          <div key={index} style={styles.topicCard}>
            <div style={styles.iconCircle}>{topic.icon}</div>
            <h3 style={styles.topicTitle}>{topic.title}</h3>
            <p style={styles.topicDescription}>{topic.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Still Need Help?</h2>
        <p style={styles.contactText}>
          If you have more questions about me or my work, feel free to contact me directly.
        </p>
        <a href="mailto:yourmail@example.com" style={styles.contactButton}>
          Contact Me
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "40px 20px",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  topicsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto 60px",
  },
  topicCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  iconCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#2c3e50",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    margin: "0 auto 16px",
  },
  topicTitle: {
    fontSize: "1.25rem",
    color: "#030303ff",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  topicDescription: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.5",
  },
  contactSection: {
    textAlign: "center",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "50px 20px",
    borderRadius: "12px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  contactTitle: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  contactText: {
    fontSize: "1rem",
    marginBottom: "24px",
    lineHeight: "1.6",
  },
  contactButton: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#f4f6f8",
    color: "#2c3e50",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

export default HelpPage;
