import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../components/style_login.css";
import "../../../../../node_modules/icheck-bootstrap/icheck-bootstrap.min.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { login } from "../../../redux/authSlice";
import { Swal } from "sweetalert2";
import { useHistory } from "react-router-dom";
function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, current, error } = useSelector((state) => state.auth);
    useEffect(() => {
        document.title = "Login";
    }, []);

    useEffect(() => {
        const a = localStorage.getItem("logged_in");
        if (a == 1) {
            history.push("/home");
        }
    }, [localStorage.getItem("logged_in")]);

    const [loginInput, setLogin] = useState({
        account: "",
        password: "",
        remember: false,
    });

    const handleCheckBox = (e) => {
        e.persist();
        setLogin({
            ...loginInput,
            remember: !loginInput.remember,
        });
    };
    const handleInput = (e) => {
        e.persist();
        setLogin({
            ...loginInput,
            [e.target.id]: e.target.value,
        });
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            account: loginInput.account,
            password: loginInput.password,
            remember: loginInput.remember,
        };
        dispatch(login(data));
    };

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
                                            <FaUserAlt />
                                        </div>
                                    </div>
                                    <div
                                        className="invalid-feedback d-block text-danger"
                                        id="accountError"
                                    >
                                        {error.account}
                                    </div>
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
                                            <FaLock />
                                        </div>
                                    </div>
                                    <div
                                        className="invalid-feedback d-block text-danger"
                                        id="passwordError"
                                    >
                                        {error.password}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            value="true"
                                            onChange={handleCheckBox}
                                        />
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
