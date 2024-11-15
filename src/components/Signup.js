import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import signupImage from '../images/background.png'; // Import your signup image
import '../Style/Signup.css'; // Import the CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // You can add more validations like email format check here
    
    // Here, you would usually send the data to your backend
    console.log('Signing up with:', { username, email, password });

    // Navigate to the login page after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      {/* Left Section: Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h1>Sign Up</h1>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>

          <p>
            Already have an account?{' '}
            <span onClick={() => navigate('/login')}>Login</span>
          </p>
        </form>
      </div>

      {/* Right Section: Image and Title/Description */}
      <div className="image-container">
        <h2>Your personal productivity</h2>
        <h2 style={{marginTop:'-20px'}}>companion.</h2>

        <img
          src={signupImage}
          alt="Sign Up"
        />
      </div>
    </div>
  );
};

export default Signup;
