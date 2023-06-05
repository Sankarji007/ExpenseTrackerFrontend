import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Dashboard Components/Header';
import SideBar from './Dashboard Components/SideBar';
import '../Assets/js/scripts';
import './css/main.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Dashboard Components/Content';
const DashBoard = () => {

    const [activeTab, setActiveTab] = useState("home");
  
    return (
      <div>
        <Header/>
        <SideBar/>
        <Content/>
      </div>
    );
  };
export default DashBoard;