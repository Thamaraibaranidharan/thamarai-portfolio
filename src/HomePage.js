import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div 
      className="homepage"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Website Info */}
      <motion.section 
        className="website-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>
          This website is more than just a collection of pages — it’s a digital 
          representation of my journey in the world of technology. Here, you’ll 
          discover my skills, the projects I’ve built, and the ideas I’m 
          passionate about. My goal with this portfolio is to provide you with 
          a clear picture of my abilities, my creative thought process, and my 
          commitment to building meaningful digital solutions.  
        </p>
        <p>
          Whether you’re a potential employer, collaborator, or simply curious 
          about my work, this platform has been carefully designed to give you 
          insight into who I am as a developer and a person.  
        </p>
      </motion.section>

      {/* About Me */}
      <motion.section 
        className="about-me"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Who Am I?</h2>
        <p>
          My name is <span className="highlight">Thamarai</span>, and I am an 
          aspiring <span className="highlight">Web Developer</span> with a passion 
          for turning ideas into reality through code. I enjoy working at the 
          intersection of creativity and technology, where design meets 
          functionality. From crafting user-friendly interfaces to solving 
          backend challenges, I thrive on learning and applying new skills that 
          make a real impact.  
        </p>
        <p>
          What excites me the most about technology is its ability to connect 
          people, solve real-world problems, and create experiences that last.  
          With every project, I aim to not just write clean and efficient code, 
          but to also build applications that are intuitive, engaging, and 
          impactful. My vision is to grow as a developer who contributes to 
          innovative solutions while continuing to learn and adapt in this 
          ever-evolving digital landscape.  
        </p>
      </motion.section>
    </div>
  );
}

export default HomePage;
