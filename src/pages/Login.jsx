
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';


function Login() {

    const [contact, setContact] = useState({
        uName: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitForm() {

        console.log(contact);
    }

    return (

        < div className="container" >
            <h1>
                Login
            </h1>

            <form onSubmit={submitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="uName"
                    value={contact.uName}
                    placeholder="User Name"
                />
                {/* <input
                    onChange={handleChange}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name"
                /> */}
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={contact.password}
                    placeholder="Password"
                />
                {/* <div>
                    <p>"" </p>
                </div> */}
                <button type="submit">Login</button>
                <div>
                    <p> ""</p>
                </div>
                <Link to="/register" >Register</Link>
            </form>
        </div >
    );


}

export default Login;