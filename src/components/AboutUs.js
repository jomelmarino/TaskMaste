import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import team1 from '../images/About.png';
import team2 from '../images/About2.webp';
import team3 from '../images/About3.jpg';
import team4 from '../images/About4.webp';
import team5 from '../images/About5.png';
import extraImage1 from '../images/avila.jpg';
import extraImage2 from '../images/About2.webp';
import extraImage3 from '../images/About3.jpg';
import extraImage4 from '../images/regie.jpg';
import extraImage5 from '../images/mel.jpg';
import extraImage6 from '../images/lee.jpg';
import extraImage7 from '../images/About5.png';
import extraImage8 from '../images/About5.png';
import extraImage9 from '../images/About5.png';
import extraImage10 from '../images/About5.png';

const AboutUs = () => {
  const images = [team1, team2, team3, team4, team5];
  const extraImages = [
    extraImage1, extraImage2, extraImage3, extraImage4, extraImage5,
    extraImage6, extraImage7, extraImage8, extraImage9 , extraImage10
  ];
  const imageNames = [
    'Avila', 'Mimay', 'Bravo', 'Regilisa', 'Mariño', 
    'Arcilla', 'Sevial', 'Hormillosa', 'Tibay', 'Noronio'
  ];
  const imageSkills = [
    ' Front-End, Figma, Back-End ', 'DataBase , Back-End', 'Front-End , Back-End', 
    'Documentation', 'Front-End , Back-End',
    'Documentation , Back-End', 'Documentation', 'Documentation', 
    'Documentation','Documentation',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [visibleImage, setVisibleImage] = useState(null);
  const [visibleImageName, setVisibleImageName] = useState('');
  const [visibleImageSkills, setVisibleImageSkills] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleMouseEnter = (index) => {
    setVisibleImage(extraImages[index]);
    setVisibleImageName(imageNames[index]);
    setVisibleImageSkills(imageSkills[index]);
  };

  const handleMouseLeave = () => {
    setVisibleImage(null);
    setVisibleImageName('');
    setVisibleImageSkills('');
  };

  return (
    <div>
      <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        
        {/* Left side: Description and title */}
        <div style={{flex: 1, textAlign: 'center', marginLeft: '50px', marginTop: '50px' }}>
          <h1 style={{ marginBottom: '20px' }}>About Us</h1>
          <p style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%' }}>
            Welcome to our app! Our team is dedicated to providing the best experience possible. With a focus on innovation and quality, we are here to serve you and make your journey memorable.
          </p>

          {/* Buttons to show images */}
          <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
            {/* Centered "single" button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: '30%', 
                  padding: '10px 20px', 
                  fontSize: '16px', 
                  borderRadius: '0px', 
                  backgroundColor: 'white', 
                  color: 'black', 
                  border: '2px solid black', 
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                {imageNames[0]}
              </button>
            </div>

            {/* Remaining buttons in rows of 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {imageNames.slice(1).map((name, index) => (
                <button
                  key={index + 1}
                  onMouseEnter={() => handleMouseEnter(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    padding: '10px 10px', 
                    fontSize: '16px', 
                    borderRadius: '0px', 
                    backgroundColor: 'white', 
                    color: 'black', 
                    border: '2px solid black', 
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Conditionally rendered image with text and skills on the right */}
          <div style={{ marginTop: '20px', minHeight: '320px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            {visibleImage && (
              <>
                <img 
                  src={visibleImage} 
                  alt="Selected" 
                  style={{width: '20%', height: '30%', borderRadius: '10%', transition: 'opacity 0.5s ease-in-out' }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#f0f0f0',  height: 'auto', padding: '10px', borderRadius: '10px' }}>
                  <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>{visibleImageName}</p>
                  <p style={{ fontSize: '16px', color: '#666', margin: '0' }}>Role:</p>
                  <p style={{ fontSize: '16px', color: '#666', marginTop: '5px', marginLeft: '20px' }}>{visibleImageSkills}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right side: Image Slider */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img 
            src={images[currentImage]} 
            alt="Our Team" 
            style={{  marginTop: '-5%', width: '70%', height: '80%', borderRadius: '10%' }} 
          />
        </div>
      </div>

      {/* Social media icons at the bottom left */}
      <div style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        fontSize: '40px', 
        color: '#333', 
        display: 'flex', 
        gap: '30px'
      }}>
        <FaFacebook style={{ cursor: 'pointer' }} />
        <FaGithub style={{ cursor: 'pointer' }} />
        <FaGoogle style={{ cursor: 'pointer' }} />
        <FaTwitter style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default AboutUs;
