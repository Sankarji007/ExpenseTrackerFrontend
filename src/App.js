import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/app" element={<MainPage/>}/>
        </Routes>
      
    </Router>
  );
};

export default App;
