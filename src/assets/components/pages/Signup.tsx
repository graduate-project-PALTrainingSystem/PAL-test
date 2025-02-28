import React, { useState } from "react";
import styles from "../../components/css/Signup.module.css";
import sidebarImage from "../../components/images/signup.png";
const Signup = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  return (
    <div className={styles["signup-container"]}>
      <div className={styles["signup-sidebar"]} style={{ backgroundImage: `url(${sidebarImage})` }}>
       
        <div className={styles["signup-logo"]}>
          
        </div>
      </div>
      <div className={styles["signup-form-container"]}>
        {step === 1 && <SignupStep1 setStep={setStep} setUserType={setUserType} />}
        {step === 2 && <SignupStep2 setStep={setStep} userType={userType} />}
        {step === 3 && <SignupStep3 />}
      </div>
    </div>
  );
};

const SignupStep1 = ({ setStep, setUserType }: { setStep: React.Dispatch<React.SetStateAction<number>>; setUserType: React.Dispatch<React.SetStateAction<string>> }) => (
  <div>
    <h2 className="text-2xl font-semibold">Join Us!</h2>
    <p className="text-gray-600">Choose your account type:</p>
    <div className={styles["step1-buttons"]}>
      <button className="w-full p-3 bg-blue-500 text-white rounded mb-2" onClick={() => { setUserType("student"); setStep(2); }}>Student</button>
      <button className="w-full p-3 bg-gray-300 rounded" onClick={() => { setUserType("company"); setStep(2); }}>Company</button>
    </div>
    <p className={styles["step1-login-link"]}>
      Already have an account? <span className="cursor-pointer">Login</span>
    </p>
  </div>
);

const SignupStep2 = ({ setStep, userType }: { setStep: React.Dispatch<React.SetStateAction<number>>; userType: string }) => {
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
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleNext = () => {
    if (validateEmail()) {
      setStep(3);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Register {userType === "student" ? "Individual" : "Company"} Account</h2>
      <form className="mt-4 space-y-3">
        {userType === "student" && (
          <>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
              <input type="text" placeholder="Full Name" name="fullName" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              University ID
              <input type="text" placeholder="University ID" name="universityId" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
          </>
        )}
        {userType === "company" && (
          <div className={styles["company-fields"]}>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
              <input type="text" placeholder="Company Name" name="companyName" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Registration Number
              <input type="text" placeholder="Registration Number" name="registrationNumber" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Contact Person
              <input type="text" placeholder="Contact Person" name="contactPerson" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Website
              <input type="text" placeholder="Website" name="website" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            </label>
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input type="email" placeholder="Email" name="email" className="mt-1 w-full p-2 border rounded" onChange={handleChange} onBlur={validateEmail} />
          {emailError && <p className={styles["email-error"]}>{emailError}</p>}
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Password
          <div className={styles["password-container"]}>
            <input type={showPassword ? "text" : "password"} placeholder="Create Password" name="password" className="mt-1 w-full p-2 border rounded" onChange={handleChange} />
            <button type="button" className={styles["password-toggle"]} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </label>
        <div className={styles["terms-container"]}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-sm">I agree to terms & conditions</label>
        </div>
        <button type="button" className="w-full p-3 bg-green-500 text-white rounded" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

const SignupStep3 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Complete Your Profile</h2>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
          <input type="tel" placeholder="Phone Number" className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Address
          <input type="text" placeholder="Your Address" className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Country of Residence
          <select className="mt-1 w-full p-2 border rounded">
            <option>Country of Residence</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full p-3 bg-green-600 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
};

export default Signup;