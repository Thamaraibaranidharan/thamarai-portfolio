// FAQPage.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "What is this portfolio about?",
    answer:
      "This portfolio showcases my projects, skills, and experiences in web development and product management.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "I work with modern web technologies like React, Node.js, Express, MongoDB, and also explore cloud and DevOps tools.",
  },
  {
    question: "Can I use your projects?",
    answer:
      "Yes, you can explore them for learning purposes. For professional use, please reach out to me for collaboration.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me directly through the Contact page or via email.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Frequently Asked Questions</h1>
      <div style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={styles.faqCard}
            onClick={() => toggleFAQ(index)}
          >
            <div style={styles.questionRow}>
              <h3 style={styles.question}>{faq.question}</h3>
              <span style={styles.icon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p style={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "40px 20px",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#2c3e50",
  },
  faqContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  questionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: 0,
  },
  icon: {
    fontSize: "1.5rem",
    color: "#2c3e50",
    fontWeight: "bold",
  },
  answer: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
    marginTop: "15px",
  },
};

export default FAQPage;
