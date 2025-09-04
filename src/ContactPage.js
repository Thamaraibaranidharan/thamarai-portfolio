import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ⭐ Handle rating
  const handleRating = (star) => {
    setFormData((prev) => ({
      ...prev,
      rating: prev.rating === star ? 0 : star,
    }));
  };

  // 📧 Handle form submit (calls Spring Boot backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent! You’ll also get a confirmation email.");
        setFormData({ name: "", email: "", message: "", rating: 0 });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            I’d love to connect with you! Whether it's about collaborations,
            project discussions, or just feedback, feel free to reach out.
          </p>
          <p>📧 mbthamarai2904@gmail.com</p>
          <p>📞 +91 7010467469</p>
          <p>📍 Coimbatore, India</p>

          {/* Socials */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} color="black" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "12px" }}
            >
              <FaGithub size={32} color="black" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>

          <label>Rate My Portfolio:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={28}
                className="star"
                color={star <= formData.rating ? "#FFD700" : "#ddd"}
                onClick={() => handleRating(star)}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
              />
            ))}
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
