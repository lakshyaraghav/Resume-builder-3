import React from 'react';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';

import UserForm from './components/UserForm';



function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<UserForm/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
