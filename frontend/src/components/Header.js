/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="#">LOGO</a>
            </div>
            <ul className="navbar__nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul className="navbar__nav">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
    );
}
