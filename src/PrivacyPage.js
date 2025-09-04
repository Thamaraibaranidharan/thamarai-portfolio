// PrivacyPage.jsx
import React, { useState } from "react";

const PrivacyPage = () => {
  const [tocOpen, setTocOpen] = useState(false);

  const sections = [
    { id: "info", title: "Information I Collect" },
    { id: "usage", title: "How I Use Your Information" },
    { id: "security", title: "Data Security" },
    { id: "cookies", title: "Cookies & Analytics" },
    { id: "thirdparty", title: "Third-Party Services" },
    { id: "rights", title: "Your Rights" },
    { id: "updates", title: "Updates to This Policy" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setTocOpen(false);
  };

  return (
    <div style={styles.page}>
      {/* Mobile TOC */}
      <div style={styles.mobileTocButton}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          style={styles.tocToggleButton}
        >
          {tocOpen ? "Close Contents" : "Contents"}
        </button>
        {tocOpen && (
          <div style={styles.mobileToc}>
            {sections.map((section) => (
              <p
                key={section.id}
                style={styles.tocItem}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Desktop TOC */}
      <div style={styles.toc}>
        <h2 style={styles.tocTitle}>Contents</h2>
        {sections.map((section) => (
          <p
            key={section.id}
            style={styles.tocItem}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </p>
        ))}
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.mainTitle}>Privacy Policy</h1>
        <p style={styles.intro}>
          This Privacy Policy explains how I collect, use, and protect any
          information you share when you visit my portfolio website.
        </p>

        <section id="info" style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Information I Collect</h2>
          <ul style={styles.list}>
            <li>Basic contact information (name, email) if you use my contact form.</li>
            <li>Messages or project inquiries you submit.</li>
            <li>Technical details like browser type and device (via analytics).</li>
          </ul>
        </section>

        <section id="usage" style={styles.section}>
          <h2 style={styles.sectionTitle}>2. How I Use Your Information</h2>
          <ul style={styles.list}>
            <li>To respond to your messages and inquiries.</li>
            <li>To improve the design and performance of this website.</li>
            <li>To showcase my projects and portfolio securely.</li>
          </ul>
        </section>

        <section id="security" style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Data Security</h2>
          <p>
            I take appropriate steps to protect any personal data shared through the
            website. No sensitive information is stored permanently.
          </p>
        </section>

        <section id="cookies" style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Cookies & Analytics</h2>
          <p>
            This website may use cookies or simple analytics tools to understand how
            visitors interact with my portfolio. You can disable cookies in your
            browser at any time.
          </p>
        </section>

        <section id="thirdparty" style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Third-Party Services</h2>
          <p>
            If I integrate third-party tools (like GitHub repos, LinkedIn embeds, or
            email services), those services may collect limited data according to
            their own policies.
          </p>
        </section>

        <section id="rights" style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Your Rights</h2>
          <ul style={styles.list}>
            <li>You can request deletion of any data you’ve shared via the contact form.</li>
            <li>You may opt out of cookies or analytics tracking.</li>
          </ul>
        </section>

        <section id="updates" style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Updates to This Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will be
            reflected on this page with a new “last updated” date.
          </p>
        </section>

        <p style={styles.footerNote}>Last updated: August 29, 2025</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  toc: {
    display: "block",
    position: "sticky",
    top: "20px",
    minWidth: "220px",
    padding: "40px 20px",
    height: "100vh",
    backgroundColor: "#0d1b2a", // dark blue
    color: "#fff",
    borderRight: "1px solid #1b263b",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
  },
  tocTitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#e0e1dd",
  },
  tocItem: {
    cursor: "pointer",
    margin: "10px 0",
    color: "#cfd8dc",
    fontSize: "1rem",
  },
  content: {
    flex: 1,
    maxWidth: "900px",
    margin: "0 auto",
    padding: "50px 40px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    lineHeight: "1.7",
  },
  mainTitle: {
    fontSize: "2.5rem",
    color: "#0d1b2a",
    marginBottom: "20px",
    textAlign: "center",
  },
  intro: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "30px",
    textAlign: "justify",
  },
  section: {
    marginBottom: "25px",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#0d1b2a",
    marginBottom: "12px",
    borderBottom: "2px solid #0d1b2a33",
    paddingBottom: "5px",
  },
  list: {
    marginLeft: "20px",
    listStyleType: "disc",
  },
  footerNote: {
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#888",
    textAlign: "center",
  },
  mobileTocButton: {
    display: "none",
    position: "fixed",
    top: "10px",
    left: "10px",
    zIndex: 1000,
  },
  tocToggleButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#0d1b2a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  mobileToc: {
    position: "fixed",
    top: "50px",
    left: "10px",
    width: "90vw",
    maxWidth: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    zIndex: 999,
  },
};

export default PrivacyPage;
