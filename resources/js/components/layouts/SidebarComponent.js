import React from "react";
import { FaAngleLeft, FaAngleRight, FaFolder } from "react-icons/fa";
import logoImage from "../../../images/gheader_logo_race_01.gif";

export default function SidebarComponent(props) {
    return (
        <React.Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="{{ route('home') }}" className="brand-link">
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: 0.8 }}
                    />
                    <span className="brand-text font-weight-bold">
                        ZOOSYSTEM
                    </span>
                </a>
                <div className="sidebar sidebar-dark-info">
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar nav-child-indent flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">
                                <a className="nav-link">
                                    <FaFolder className="nav-icon" />
                                    <p>
                                        システム管理
                                        <FaAngleLeft className="right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="{{ url('authority_user') }}"
                                            className="nav-link"
                                        >
                                            <FaAngleRight className="nav-icon" />
                                            <p>アカウント管理</p>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="{{ url('zoom_account_management') }}"
                                            className="nav-link"
                                        >
                                            <FaAngleRight className="nav-icon" />
                                            <p>Zoomアカウント管理</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item menu-open">
                                <a className="nav-link">
                                    <FaFolder className="nav-icon" />

                                    <p>
                                        BPO用
                                        <FaAngleLeft className="right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="{{ url('member_confirm_meeting_management') }}"
                                            className="nav-link"
                                        >
                                            <FaAngleRight className="nav-icon" />
                                            <p>
                                                zoomに参加している人を取得したいMTG管理
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item menu-open">
                                <a className="nav-link">
                                    <FaFolder className="nav-icon" />

                                    <p>
                                        人材開発部用
                                        <FaAngleLeft className="right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="{{ url('Jinzaikaihatu/csv') }}"
                                            className="nav-link"
                                        >
                                            <FaAngleRight className="nav-icon" />
                                            <p>
                                                日程をダウンロード、アップロード
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </React.Fragment>
    );
}