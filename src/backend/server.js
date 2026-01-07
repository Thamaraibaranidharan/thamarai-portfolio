// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_GMAIL@gmail.com", // replace with your Gmail
        pass: "YOUR_APP_PASSWORD",   // use App Password, not your real password
      },
    });

    const mailOptions = {
      from: email,
      to: "YOUR_GMAIL@gmail.com", // your receiving email
      subject: `Portfolio Contact from ${name}`,
      text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}\nRating: ${rating || "N/A"}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
