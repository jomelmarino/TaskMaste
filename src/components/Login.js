import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.png'; // Import the background image
import googleLogo from '../images/googleee.webp'; // Google logo
import githubLogo from '../images/github_logo_icon_229278.webp'; // GitHub logo
import '../Style/Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', username, password);
    // Redirect to TaskManager page after successful login
    navigate('/taskmanager');
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Redirect to TaskManager page after successful Google login
    navigate('/taskmanager');
  };

  const handleGitHubLogin = () => {
    console.log('Logging in with GitHub');
    // Redirect to TaskManager page after successful GitHub login
    navigate('/taskmanager');
  };

  const handleCreateAccount = () => {
    // Navigate to the sign-up page
    navigate('/signup'); 
  };

  return (
    <div className="login-container">
      {/* Left Side Section: Title, Text, and Background Image */}
      <div className="left-side">
        <h1>Your personal productivity</h1>
        <h1>companion.</h1>
        
        <img
          src={backgroundImage}
          alt="Background"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="right-side">
        <form onSubmit={handleSubmit} className="form">
          <h1>Login</h1>

          <h3>Email</h3>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <h3>Password</h3>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            style={{
                borderRadius: '40px' // Only adding border-radius
            }}
            >
            Log In
          </button>


          <div className="divider">
            <div className="hr-wrapper">
              <hr />
              <span>or sign in with</span>
              <hr />
            </div>
          </div>

          {/* Google Login Button with Logo */}
          <div className="social-buttons">
            <button
                type="button"
                onClick={handleGoogleLogin}
                style={{
                backgroundColor: 'gray', // Change the background color to gray
                color: 'white', // Set text color to white
                border: 'none',
                borderRadius: '40px',
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '93%',
                cursor: 'pointer',
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
                }}
            >
                <img
                src={googleLogo}
                alt="Google Logo"
                style={{
                    width: '30px',
                    height: '25px',
                    marginRight: '10px',
                    borderRadius: '50%',
                }}
                />
                Continue with Google
            </button>

            {/* GitHub Login Button with Logo */}
            <button
                type="button"
                onClick={handleGitHubLogin}
                style={{
                backgroundColor: '#333', // Keep the GitHub button as it is
                color: 'white',
                border: 'none',
                borderRadius: '40px',
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '93%',
                cursor: 'pointer',
                marginLeft: 'auto',
                marginRight: 'auto',
                }}
            >
                <img
                src={githubLogo}
                alt="GitHub Logo"
                style={{
                    width: '30px',
                    height: '25px',
                    marginRight: '10px',
                    borderRadius: '50%',
                }}
                />
                Continue with GitHub
            </button>
            </div>


          {/* Create New Account Link */}
          <p className="create-account" onClick={handleCreateAccount}>
            Create New Account
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
