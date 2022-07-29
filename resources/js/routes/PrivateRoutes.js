import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import { isLogin } from "../helpers";
import Cookies from 'js-cookie';
export default function PrivateRoute({ ...rest }) {
    let is_login = isLogin();
    let body = $("body");
    if (is_login) {
        body.attr("class", "");
        body.addClass("hold-transition sidebar-mini layout-fixed");
    }
    return is_login? <Route {...rest} /> : <Redirect to="/login" />;
}
