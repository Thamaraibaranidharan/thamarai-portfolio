import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="intro">
          <h1 className="title">About Me</h1>
          <p className="description">
            I am <b>Thamarai</b>, an aspiring <b>Software Engineer</b> with a
            strong interest in <b>Frontend Development</b>, <b>Cloud
            Technologies</b>, and <b>Artificial Intelligence</b>. Currently in my
            3<sup>rd</sup> year pursuing a <b>Bachelor of Engineering in Computer
            Science and Engineering</b> at <b>Sri Krishna College of Engineering
            and Technology (SKCET), Coimbatore</b>, I am actively exploring
            opportunities to grow and contribute in the tech industry.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <p className="section-content">
            I completed my schooling at <b>Bharathi Matriculation Higher
            Secondary School, Coimbatore</b>.  
            Presently, I am pursuing my undergraduate studies at <b>SKCET,
            Coimbatore</b>, where I have maintained a <b>CGPA of 7.94</b> with
            <b> no backlogs</b>. My academic journey has provided me with strong
            foundations in programming, problem-solving, and collaborative
            project work.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Certifications & Achievements</h2>
          <ul className="achievement-list">
            <li>
              Successfully completed <b>Google Cloud Certification</b>, gaining
              hands-on exposure to cloud computing fundamentals and deployment
              models.
            </li>
            <li>
              Actively participated in the <b>Uyir Hackathon</b>, where I
              collaborated with peers to design innovative and impactful digital
              solutions under time constraints.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Professional Interests</h2>
          <p className="section-content">
            I am deeply passionate about crafting seamless user experiences
            through <b>Frontend Development</b> and constantly enhancing my
            knowledge in <b>Web Technologies</b>, <b>Cloud Platforms</b>, and
            <b> Artificial Intelligence</b>. My long-term vision is to evolve
            into a full-fledged software engineer capable of building scalable,
            user-centric applications and contributing to transformative
            technology solutions.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Experience & Training</h2>
          <p className="section-content">
            I have gained practical exposure at <b>Nxtlogic</b>, an organization
            offering <b>Web Design, PhD Assistance, and Internship Training</b>.
            This experience has sharpened my technical and problem-solving skills
            while giving me a taste of real-world project environments.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-content">
            I am proficient in core web technologies including:
          </p>
          <ul className="skill-list">
            <li>HTML & CSS</li>
            <li>JavaScript </li>
            <li>React.js</li>
            <li>Java</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Career Aspiration</h2>
          <p className="section-content">
            As an <b>aspiring Software Engineer</b>, I am eager to take on
            opportunities that allow me to innovate, learn, and contribute to
            impactful projects. I strive to continuously upskill myself, explore
            emerging technologies, and actively seek internships and roles where
            I can add value while advancing my career path.
          </p>
        </section>
      </div>
    </div>
  );
}
