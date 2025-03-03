import React from 'react';
import styles from '../css/StudentProfile.module.css';

const StudentProfile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarItem}>Dashboard</div>
        <div className={styles.sidebarItem}>Request</div>
        <div className={styles.sidebarItem}>Search</div>
        <div className={styles.sidebarItem}>Report</div>
        <div className={styles.sidebarItem + ' ' + styles.active}>Profile</div>
        <div className={styles.sidebarItem}>Students</div>
        <div className={styles.sidebarItem}>Save list</div>
        <div className={styles.sidebarItem}>Logout</div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Profile header */}
        <header className={styles.profileHeader}>
          <div className={styles.profilePicture}>
            <img src="path/to/profile-pic.jpg" alt="Profile" /> {/* Replace with actual image path */}
          </div>
          <div className={styles.profileInfo}>
            <h2>Noor Zayed</h2> {/* Replace with actual student name */}
            <p>3-year Computer Science undergraduate</p>
            <p>Student at Birzeit University</p>
            <p>Palestinian Authority</p>
            <div className={styles.profileButtons}>
              <button>Add Skill</button>
              <button>Edit profile</button>
              <button>More</button>
            </div>
          </div>
        </header>

        {/* Profile details */}
        <section className={styles.profileDetails}>
          <h3>About</h3>
          <p>
            Noor Zayed, a passionate third-year Computer Science undergraduate at Birzeit
            University, Palestine. With a keen interest in Frontend Development and UX/UI
            design, Noor is eager to contribute to innovative projects and expand her skillset
            in the ever-evolving world of technology.
          </p>
        </section>

        {/* Interests */}
        <section className={styles.interests}>
          <h3>Interests</h3>
          <div className={styles.interestTag}>FrontEnd Development</div>
          <div className={styles.interestTag}>UX/UI design</div>
        </section>

        {/* Skills */}
        <section className={styles.skills}>
          <h3>Skills</h3>
          <div>Data Science</div>
          <div>Python (Programming Language)</div>
          <div>Android Development</div>
          <div className={styles.showMore}>Show all skills -&gt;</div>
        </section>

        {/* Internship Requests */}
        <section className={styles.internshipRequests}>
          <h3>Request internship</h3>
          <div className={styles.requestItem}>
            <h4>Front End summer Internship</h4>
            <p>ASAL 5 students</p>
            <div className={styles.pendingStatus}>Pending</div>
          </div>
          <div className={styles.requestItem}>
            <h4>FootHill fullstack internship</h4>
            <p>FOOTHILL 10 students</p>
            <div className={styles.pendingStatus}>Pending</div>
          </div>
          <div className={styles.showMore}>Show all requests</div>
        </section>

      </main>
    </div>
  );
};

export default StudentProfile;