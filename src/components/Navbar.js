import React from "react";
import MyImage from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={MyImage} className="nav--logo"/>
        </nav>
    )
}