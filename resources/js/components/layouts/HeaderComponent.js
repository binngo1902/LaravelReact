import React from "react";
import {
    FaBars,
    FaChalkboardTeacher,
    FaPowerOff,
    FaUserCircle,
} from "react-icons/fa";

export default function HeaderComponent(props) {
    const handleClick = (e) => {
        e.preventDefault();
    };
    return (
        <React.Fragment>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="pushmenu"
                            href="#"
                            role="button"
                        >
                            <FaBars />
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a className="nav-link">@yield('page_name')</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-link-custom"
                            data-toggle="dropdown"
                            onClick={handleClick}
                            href="#"
                            id="my-toggle-button"
                        >
                            <FaUserCircle className="nav-link-icon-custom mr-2" />
                            <span className="d-none d-sm-block">binh</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <div className="dropdown-divider"></div>
                            <a
                                href="{{ url('create_zoom_url').'?user_id='.Auth::user()->account}}"
                                target="_blank"
                                className="dropdown-item"
                            >
                                <FaChalkboardTeacher className="fsub-nav-link-icon-custom mr-1" />
                                <span>緊急MTG発行</span>
                            </a>
                            <a
                                href="{{ route('logout') }}"
                                className="dropdown-item"
                            >
                                <FaPowerOff className="sub-nav-link-icon-custom mr-1" />
                                <span> ログアウト</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}
