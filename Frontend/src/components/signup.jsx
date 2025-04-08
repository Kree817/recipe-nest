import { useState } from "react";
import axios from "axios";
import "../styles/signup.css";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before making request

    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send POST request to the backend for registration
      const response = await axios.post("http://localhost:5188/api/auth/register", {
        fullName,
        email,
        password,
      });

      // After successful registration, you can handle the response here.
      if (response.status === 200) {
        alert("Registration successful!");
        // Redirect to login page or show success message
        window.location.href = "/login";
      } else {
        // Handle unexpected responses
        setLoading(false);
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      // Catch and handle any errors (network issues, etc.)
      setLoading(false);
      setError(err.response?.data || "Failed to register. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-btn" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
