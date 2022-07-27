import React from "react";

export default function FooterComponent() {
    return (
        <footer className="main-footer">
            <strong>
                Copyright &copy; 2020-2021{" "}
                <a href="https://www.race.co.jp/">race.co.jp</a>.
            </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b>
            </div>
        </footer>
    );
}
