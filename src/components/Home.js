import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and navigate to login page
  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login route
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ marginTop: '70px' }}>Welcome to Our App!</h1>
      <p style={{ fontSize: '35px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ab voluptatibus sequi, laudantium cumque necessitatibus ad similique asperiores vero,
        eligendi illo nihil, officiis neque beatae molestiae minus optio earum atque ipsam.
      </p>

      {/* "GET STARTED" button to navigate to login page */}
      <button
        onClick={handleGetStarted}
        style={{
          marginTop: '20px',
          padding: '20px 50px',
          fontSize: '20px',
          backgroundColor: 'white',   // White background
          color: 'black',             // Black text color
          border: '2px solid black',   // Black border with 2px thickness
          borderRadius: '40px',       // Rounded corners
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default Home;
