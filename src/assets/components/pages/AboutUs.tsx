import React, { useEffect, useRef } from "react";
import styles from "../../components/css/AboutUs.module.css";

const AboutUs: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Function to handle adding refs correctly
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            section.classList.add(styles.visible);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on first load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.parallax}></div> {/* Parallax background */}

      <h1>About PalTrainingSystem (PLS)</h1>
      <p>
        PalTrainingSystem (PLS) is an innovative platform designed to bridge the gap between students, 
        training managers, and companies by streamlining the internship management process.
      </p>

      {/* Our Mission - Slide-in Effect */}
      <div ref={addToRefs} className={`${styles.section} ${styles.missionSection}`}>
        <h2>Our Mission</h2>
        <p>
          Our goal is to provide students with an easy way to find internships, 
          companies with a structured way to manage applicants, and training managers with efficient tracking tools.
        </p>
      </div>

      {/* Key Features - Flip Animation & Hover Effects */}
      <div ref={addToRefs} className={styles.section}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          {[
            "🔎 Internship search and applications",
            "📨 Secure communication between students, managers, and companies",
            "📊 Progress tracking and reporting",
            "✅ Internship approval and feedback system",
            "📅 Notifications for deadlines and status updates",
          ].map((feature, index) => (
            <div key={index} ref={addToRefs} className={styles.featureCard}>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div ref={addToRefs} className={`${styles.section} ${styles.teamSection}`}>
        <h2>Meet Our Team</h2>
        <ul>
          <li>👨‍💻 <strong>Mohammad Issa</strong> - Developer</li>
          <li>👩‍💻 <strong>Nour Zayed</strong> - Developer</li>
          <li>👨‍💻 <strong>Furat Madi</strong> - Developer</li>
          <li>🎓 <strong>Supervisor:</strong> Dr. Murad Njoum</li>
        </ul>
      </div>

      {/* Contact */}
      <div ref={addToRefs} className={`${styles.section} ${styles.contactSection}`}>
        <h2>Get in Touch</h2>
        <p>Email: support@paltrainingsystem.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default AboutUs;
