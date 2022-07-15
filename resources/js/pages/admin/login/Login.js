import React, { useState,useEffect } from "react";
import "../../../components/style_login.css";
import "../../../../../node_modules/icheck-bootstrap/icheck-bootstrap.min.css";
import { FaUserAlt,FaLock } from "react-icons/fa";
import axios from "axios";
function Login() {

    useEffect(() => {
        document.title = "Login";
        console.log(1);
    },[]);
    const [loginInput, setLogin] = useState({
        account: '',
        password: '',
        remember: false,
    });

    const handleCheckBox = (e)=> {
        e.persist()
        setLogin({
            ...loginInput,
            remember: !loginInput.remember
        })
    }
    const handleInput = (e)=> {
        e.persist()
        setLogin({
            ...loginInput,
            [e.target.id]: e.target.value
        });
    };

    const loginSubmit = (e)=> {
        e.preventDefault();
        const data = {
            account: loginInput.account,
            password: loginInput.password,
            remember: loginInput.remember
        }

        axios.post('api/login',data).then(res)
    }




    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card">
                    <div className="login-logo">
                        <b>Zoo</b>System
                    </div>
                    <div className="card-body">
                        <form onSubmit={loginSubmit}>
                            <div className="row">
                                <div className="input-group mb-3">
                                    <input
                                        id="account"
                                        className="form-control"
                                        placeholder="ユーザー名"
                                        onChange={handleInput}
                                        value={loginInput.account}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                           <FaUserAlt/>
                                        </div>
                                    </div>
                                    <div
                                        className="invalid-feedback d-block text-danger"
                                        id="accountError"
                                    ></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mb-3">
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="パスワード"
                                        onChange={handleInput}
                                        value={loginInput.password}
                                        autoComplete="on"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <FaLock/>
                                        </div>
                                    </div>
                                    <div
                                        className="invalid-feedback d-block text-danger"
                                        id="passwordError"
                                    ></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" value="true" onChange={handleCheckBox}/>
                                        <label
                                            htmlFor="remember"
                                            className="font-weight-normal"
                                        >
                                            ログイン状態を保持する
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        ログイン
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
