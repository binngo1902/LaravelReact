import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";

function DefaultLayout({children}) {

    return (
        <React.Fragment>
        <div className="wrapper">
            <HeaderComponent />
            <SidebarComponent />
            {children}
            <FooterComponent />
        </div>
    </React.Fragment>
    )
}

export default DefaultLayout;
