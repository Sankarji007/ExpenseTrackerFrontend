import React from 'react';

const SideBar = (props) => {
    return (

        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="nav-link" onClick={() => props.setActiveTab("Dashboard")}>
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </div>
                            <div className="nav-link collapsed" onClick={() => props.setActiveTab("Expenses")}>
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Expenses
                            </div>
                            <div className="nav-link collapsed" onClick={() => props.setActiveTab("Reports")}>
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Reports
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Sankar
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default SideBar;

