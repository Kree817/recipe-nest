import { useState } from "react";
import authService from "../services/AuthService"; // Import the authService
import "../styles/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before making the request

    try {
      // Call the login method from authService
      await authService.login(email, password);
      
      // Redirect user to the home/dashboard after successful login
      window.location.href = "/dashboard"; // Change to the appropriate page
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>

        {error && <p className="error">{error}</p>}

        <div className="login-links">
          <a href="/signup">Dont have an account? Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
