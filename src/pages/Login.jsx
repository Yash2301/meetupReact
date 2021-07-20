
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from './../config/constants';
import { useDispatch } from 'react-redux'
import { login } from "../actions/auth.action";

function Login() {

    const [contact, setContact] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch()


    const [formSubmit, setFormSubmit] = useState(false);
    const history = useHistory();
    function handleChange(event) {
        const { name, value } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitForm(e) {
        setFormSubmit(true);
        // call api
        fetch(BASE_URL+'login',{
            method:"POST",
            body:JSON.stringify({
                email: contact.username,
                password: contact.password
            }),
            headers:{
                "Content-Type": "application/json",
            }
        }).then(res=> res.json())
        .then((res)=>{
            console.log(res);
            if(res && res.token){
                dispatch(login(res))
                history.push('/home');
            }
        })
        // if true then login with token 

        e.preventDefault();
    }

    return (

        < div className="container" >
            <h1>
                Login
            </h1>

            <form onSubmit={submitForm}>
                <div className="FormControl">
                    <TextField
                    onChange={handleChange}
                    type="text"
                    name="username"
                    value={contact.username}
                    className="form-invalid"
                    placeholder="User Name"
                    variant="outlined"
                    error={formSubmit && contact.username === ''?true:false}
                    helperText={formSubmit && contact.username === ''?"username is required":''}
                    />
                </div>
                <div className="FormControl" >
                    <TextField
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={contact.password}
                    placeholder="Password"
                    variant="outlined"
                    error={formSubmit && contact.password === ''?true:false}
                    helperText={formSubmit && contact.password === ''?"password is required":''}
                    />
                </div>
                <button type="submit">Login</button>
                <div>
                    <Link to="/register" >Register</Link>
                </div>
            </form>
        </div >
    );


}

export default Login;