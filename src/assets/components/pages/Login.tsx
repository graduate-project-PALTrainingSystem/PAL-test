import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/css/Login.module.scss";
// import logo from "../../components/images/PAL.png";
import bgImage from "../../components/images/login1.png";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginImage}>
          <img src={bgImage} alt="Background" className={styles.bgImage} />
        </div>
        <div className={styles.rightSection}>
          <h1>Welcome to</h1>
          <h1>PAL TrainingSystem</h1>
          <form>
            <label>Email Address</label>
            <input type="email" placeholder="email@email.com" required />
            
            <label>Password</label>
            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="at least 8 digit"
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
            
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>
          <p className={styles.signUpText}>
            Don’t Have An Account? <Link to="/signup">Sign Up!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
