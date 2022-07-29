import axios from "axios";
import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import "../../components/style.css";


function Home(props) {
    document.title = "Home";
    axiosClient.get('/api/test');
    return (
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
    );
}

export default Home;
