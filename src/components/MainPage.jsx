import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Header from './Dashboard Components/Header';
import SideBar from './Dashboard Components/SideBar';
import '../Assets/js/scripts';
import './css/main.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Dashboard Components/Content';

const DashBoard = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="sb-nav-fixed">
            <Header/>
            <div id="layoutSidenav">
                <SideBar setActiveTab={setActiveTab}/>
                <Content activeTab={activeTab}/>
            </div>
        </div>
    );
};
export default DashBoard;