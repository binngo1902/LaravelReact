import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout } from "../components/layouts";
import PrivateRoute from "./PrivateRoutes";
import Home from "../pages/admin/home";
export default (
    <Switch>
        {publicRoutes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                />
            );
        })}
        {privateRoutes.map((route, index) => {

            let Layout = DefaultLayout;
            let Component = Home;
            if (route.component) {
                Component = route.component;
            } else if (route.component === null) {
                Component = Fragment;
            }

            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }
            return (
                <PrivateRoute
                    key={index}
                    path={route.path}
                    render={ ()=>
                        <Layout>
                            <Component/>
                        </Layout>
                    }
                />
            );
        })}
        <Redirect to= '/login' />
    </Switch>
);
