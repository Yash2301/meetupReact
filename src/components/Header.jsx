/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import { setLogout } from '../utils';
import { useSelector } from 'react-redux'


function Header() {
    const auth = useSelector((state) => state.authReducer)

    return (
        <header>
            <h1>MeetUp</h1>
            <nav >
                <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', listStyle: 'none' }}>
                    <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/home">Home</Link>
                    </li>
                    {auth.isLogin === false && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/login">Login</Link>
                    </li>}
                    {auth.isLogin === false && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/register">Register</Link>
                    </li>}
                    
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/schedules">Schedules</Link>
                    </li>}
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <a onClick={()=>{
                            setLogout()
                            window.location.reload()
                        }} >Logout</a>
                    </li>}
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;
