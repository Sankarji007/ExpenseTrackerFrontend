import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import DashBoard from './components/DashBoard';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      
    </Router>
  );
};

export default App;
