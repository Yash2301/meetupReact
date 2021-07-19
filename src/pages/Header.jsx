import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>MeetUp</h1>
            <nav >
                <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', listStyle: 'none' }}>
                    <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
