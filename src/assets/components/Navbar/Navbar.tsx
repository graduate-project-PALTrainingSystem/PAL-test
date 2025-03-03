import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../components/images/PAL.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left section */}
        <div className={styles.leftSection}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.navbarLogo} />
          </Link>
          <Link to="/"> {/* Wrap the span in a Link component */}
            <span className={styles.navbarBrand}>PAL Training System</span>
          </Link>
        </div>

        {/* Center section */}
        <div className={styles.centerSection}>
          <ul className={styles.navbarNav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/StudentProfile">profile</Link></li>
          </ul>
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
          <Link to="/login" className={styles.button}>Login</Link>
          <Link to="/signup" className={styles.button}>Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;