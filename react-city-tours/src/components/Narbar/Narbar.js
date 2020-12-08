import React from 'react';
import "./Narbar.scss";
import logo from "../../logo.png";

export default function Narbar() {
    return <nav className="narbar">
        <img src={logo} alt="City Tours Logo"/>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    about
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                    tours
                </a>
            </li>

        </ul>
    </nav>
}