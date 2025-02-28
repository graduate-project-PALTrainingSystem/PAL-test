import React from "react";
import styles from "../../components/css/Contact.module.scss";
import contactImage from "../../components/images/contact.png"; // Ensure correct path

const Contact = () => {
  return (
    <main className={styles.mainContent}>
      <section className={styles.contactSection}>
        <div className={styles.contactForm}>
          <h2>Get in touch</h2>
          <p>We are here for you! How can we help?
            Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
          <input type="text" placeholder="Nour" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send Message</button>
        </div>
        <div className={styles.rightSection}>
          <img src={contactImage} alt="Contact Us" />
        </div>
      </section>
    </main>
  );
};

export default Contact;
