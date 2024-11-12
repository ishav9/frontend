



import React from 'react';
import {Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import ArchNavbar from './Components/ArchNavbar';
import Home from './Components/Home';
import Project from './Components/Project';
import SignUpPage from './Components/SignUpPage';
// import Blueprints from './Blueprints'; // Your blueprints component
import Blueprints from './Components/Blueprints';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Components/LoginPage';
const App = () => {
  return (
    <Router>
      <ArchNavbar />
      <Routes>
      
      {/* Define your routes here */}
      <Route path="/"  element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/blueprints" element={<Blueprints/>} />
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>

  );
};

export default App;
