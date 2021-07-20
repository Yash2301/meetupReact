import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from './../config/constants';
import { useDispatch } from 'react-redux'
import { login } from "../actions/auth.action";
import TextField from '@material-ui/core/TextField';

function Register(props) {

    const [contact, setContact] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        email: "",
        password: ""
    });
    const dispatch = useDispatch()
    const history = useHistory();
    const [formSubmit, setFormSubmit] = useState(false);

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
        setFormSubmit(true);
        event.preventDefault();
        fetch(BASE_URL+'register',{
            method:"POST",
            body:JSON.stringify({
                email: contact.email,
                password: contact.password,
                first_name:contact.firstName,
                username:contact.userName,
                last_name:contact.lastName,
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

        event.preventDefault();
    }

    return (
        < div className="container" >
            <h1>
                Register
            </h1>

            <form onSubmit={submitForm}>
                <div className="FormControl" >
                    <TextField
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        value={contact.firstName}
                        className="form-invalid"
                        placeholder="First Name"
                        variant="outlined"
                        error={formSubmit && contact.firstName === ''?true:false}
                        helperText={formSubmit && contact.firstName === ''?"First Name is required":''}
                    />
                </div>
                <div className="FormControl" >
                    <TextField
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        value={contact.lastName}
                        className="form-invalid"
                        placeholder="Last Name"
                        variant="outlined"
                        error={formSubmit && contact.lastName === ''?true:false}
                        helperText={formSubmit && contact.lastName === ''?"Last Name is required":''}
                    />
                </div>
                <div className="FormControl" >
                    <TextField
                        onChange={handleChange}
                        type="text"
                        name="userName"
                        value={contact.userName}
                        className="form-invalid"
                        placeholder="User Name"
                        variant="outlined"
                        error={formSubmit && contact.userName === ''?true:false}
                        helperText={formSubmit && contact.userName === ''?"User Name is required":''}
                    />
                </div>
                <div className="FormControl" >
                    <TextField
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={contact.email}
                        className="form-invalid"
                        placeholder="Email"
                        variant="outlined"
                        error={formSubmit && contact.email === ''?true:false}
                        helperText={formSubmit && contact.email === ''?"Email is required":''}
                    />
                </div>
                <div className="FormControl" >
                    <TextField
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={contact.password}
                        className="form-invalid"
                        variant="outlined"
                        error={formSubmit && contact.password === ''?true:false}
                        helperText={formSubmit && contact.password === ''?"Password is required":''}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div >
    );

}

export default Register;
