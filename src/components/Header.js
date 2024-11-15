import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // For navigation and accessing the current route
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../images/logo.png'; // Logo image import
import '@fontsource/roboto-slab'; // Font import

// Header component definition
const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes
  const location = useLocation(); // Hook to get the current URL path

  // State to manage the label of the button; initially set based on the current path
  const [buttonLabel, setButtonLabel] = useState(
    location.pathname === '/about' ? 'Home' : 'About Us'
  );

  // Function to handle button click, toggling between "About Us" and "Home" pages
  const handleButtonClick = () => {
    if (location.pathname === '/about') {
      navigate('/'); // Navigate to the home page
      setButtonLabel('About Us'); // Set button label to "About Us"
    } else {
      navigate('/about'); // Navigate to the About Us page
      setButtonLabel('Home'); // Set button label to "Home"
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}> {/* Box container for the header with full width */}
      <AppBar position="static" sx={{ backgroundColor: 'black' }}> {/* AppBar with static position and black background */}
        <Toolbar>
          {/* Logo icon button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="logo" style={{ height: '40px' }} /> {/* Logo image */}
          </IconButton>
          
          {/* Title text */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1, // Fills available space to push button to the right
              display: { xs: 'none', sm: 'block' }, // Hides on extra-small screens
              fontFamily: 'Roboto Slab, serif', // Font family
              fontSize: '40px', // Font size
            }}
          >
            Task Master
          </Typography>
          
          {/* Conditionally render the button only if not on the /login or /signup page */}
          {location.pathname !== '/login' && location.pathname !== '/signup' && (
            <Button
              variant="contained"
              color="black"
              onClick={handleButtonClick} // Event handler for click
              sx={{
                position: 'relative', // Relative positioning for underline effect
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor', // Same color as the button text
                },
              }}
            >
              {buttonLabel} {/* Button label dynamically set based on state */}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
