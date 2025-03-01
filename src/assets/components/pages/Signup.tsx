import React, { useState } from "react";
import styles from "../../components/css/Signup.module.css";
import sidebarImage from "../../components/images/signup.png";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupSidebar} style={{ backgroundImage: `url(${sidebarImage})` }}>
        <div className={styles.signupLogo}></div>
      </div>
      <div className={styles.signupFormContainer}>
        <div className={styles.stepIndicator}>Step {step} of 3</div> {/* Step Indicator */}
        {step === 1 && <SignupStep1 setStep={setStep} setUserType={setUserType} />}
        {step === 2 && (
          <SignupStep2 setStep={setStep} userType={userType} handleBack={handleBack} />
        )}
        {step === 3 && <SignupStep3 handleBack={handleBack} />}
      </div>
    </div>
  );
};

const SignupStep1: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setStep, setUserType }) => (
  <div className={styles.stepContainer}>
    <h2>Join Us!</h2>
    <p>Choose your account type:</p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryBtn}
        onClick={() => {
          setUserType("student");
          setStep(2);
        }}
      >
        Student
      </button>
      <button
        className={styles.secondaryBtn}
        onClick={() => {
          setUserType("company");
          setStep(2);
        }}
      >
        Company
      </button>
    </div>
    <p className={styles.loginLink}>
      Already have an account? <a href="/login">Login</a>
    </p>
  </div>
);

const SignupStep2: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
  userType: string;
  handleBack: () => void;
}> = ({ setStep, userType, handleBack }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    universityId: "",
    companyName: "",
    registrationNumber: "",
    contactPerson: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.stepContainer}>
      <h2>Register {userType === "student" ? "Individual" : "Company"} Account</h2>
      <form>
        {userType === "student" ? (
          <>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
            <label>University ID</label>
            <input
              type="text"
              name="universityId"
              placeholder="Enter your university ID"
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              onChange={handleChange}
              required
            />
            <label>Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              placeholder="Enter your registration number"
              onChange={handleChange}
              required
            />
            <label>Contact Person</label>
            <input
              type="text"
              name="contactPerson"
              placeholder="Enter contact person"
              onChange={handleChange}
              required
            />
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="Enter website"
              onChange={handleChange}
              required
            />
          </>
        )}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          onChange={handleChange}
          required
        />
        <div className={styles.navigationButtons}>
          <button type="button" className={styles.secondaryBtn} onClick={handleBack}>
            Back
          </button>
          <button type="button" className={styles.primaryBtn} onClick={() => setStep(3)}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const SignupStep3: React.FC<{ handleBack: () => void }> = ({ handleBack }) => {
  return (
    <div className={styles.stepContainer}>
      <h2>Complete Your Profile</h2>
      <form>
        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" required />
        <label>Address</label>
        <input type="text" placeholder="Enter your address" required />
        <label>Country of Residence</label>
        <select title="Select your country" required>
          <option>Country</option>
        </select>
        <div className={styles.navigationButtons}>
          <button type="button" className={styles.secondaryBtn} onClick={handleBack}>
            Back
          </button>
          <button type="submit" className={styles.primaryBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;