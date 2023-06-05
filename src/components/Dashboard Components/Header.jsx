import React from 'react'


const Header = () => {
    return (
        <div className="sb-nav-fixed">
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" >Expense tracker</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                <ul className="navbar-nav ms-auto me-0 me-md-3 my-2 my-md-0">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                        >
                            <i className="fas fa-user fa-fw"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Activity Log
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header