import React, { useState, useEffect } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
import "../../components/style.css";

import FooterComponent from "../../components/layouts/FooterComponent";
import HeaderComponent from "../../components/layouts/HeaderComponent";
import SidebarComponent from "../../components/layouts/SidebarComponent";
function Home(props) {
    useEffect(() => {
        const a = axiosClient.get("/api/user");
    });
    let body = $("body");
    body.addClass("hold-transition sidebar-mini");

    return (
        <React.Fragment>
            <div className="wrapper">
                <HeaderComponent />
                <SidebarComponent />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>ZooSystemへよこそう</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <FooterComponent />
            </div>
        </React.Fragment>
    );
}

export default Home;
