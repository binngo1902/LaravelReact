
import React, { useState, useEffect } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
function Home() {
    useEffect(()=>{
        const a = axiosClient.get('/api/user');
    })
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card">
                    <div className="login-logo">
                        <b>Zoo</b>System
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="input-group mb-3">
                                    <input
                                        id="account"
                                        className="form-control"
                                        placeholder="ユーザー名"

                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <FaUserAlt />
                                        </div>
                                    </div>
                                    <div
                                        className="invalid-feedback d-block text-danger"
                                        id="accountError"
                                    ></div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
