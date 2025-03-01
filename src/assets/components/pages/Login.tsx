import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/css/Login.module.scss";
import bgImage from "../../components/images/login1.png";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call (replace with your actual API call)
    try {
      const mockApiCall = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "user@example.com" && password === "password") {
            resolve("Login successful");
          } else {
            reject(new Error("Invalid credentials")); // Ensure error is instance of Error
          }
        }, 1000);
      });

      await mockApiCall;

      // Redirect to main page or dashboard
      console.log("Login successful"); // Replace with actual navigation
    } catch (error) {
      if (error instanceof Error) { // Type check
        setLoginError(error.toString());
      } else {
        setLoginError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginImage}>
          <img src={bgImage} alt="Background" className={styles.bgImage} />
        </div>
        <div className={styles.rightSection}>
          <h1>Welcome to</h1>
          <h1>PAL TrainingSystem</h1>
          <form onSubmit={handleLogin}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="email@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="at least 8 digit"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>

            {loginError && <p className={styles.error}>{loginError}</p>}

            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
          <p className={styles.signUpText}>
            Don't Have An Account? <Link to="/signup">Sign Up!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;