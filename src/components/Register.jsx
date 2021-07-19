import React, { useState } from "react";



function Register(props) {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
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
    function submitForm(event) {
        props.onSub(contact);
        setContact({
            fName: "",
            lName: "",
            email: "",
            password: ""
        });
        event.preventDefault();
    }

    return (
        < div className="container" >
            <h1>
                Register
            </h1>

            <form onSubmit={submitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lName"
                    type="text"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="email"
                    type="text"
                    value={contact.email}
                    placeholder="Email"
                />
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={contact.password}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div >
    );

}

export default Register;
