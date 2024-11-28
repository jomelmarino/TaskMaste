import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login'; // Import the Login component
import Signup from './components/Signup';
import TaskManager from './components/TaskManager';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/TaskManager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;
