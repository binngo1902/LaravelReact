/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from "./pages/admin/login/Login.js";
import store from "./redux/store.js";
import Home from "./pages/admin/home.js";
import routes from "./routes";
function App() {
    return (
        <Provider store={store}>
            <Router>
               {routes}
            </Router>
        </Provider>
    );
}
export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
