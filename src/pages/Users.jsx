import React, { useState, useEffect } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { BASE_URL } from './../config/constants';
import { getToken } from "./../utils";

function Users(props) {
    
    const [ users , setUsers] = useState([]);

    useEffect(() => {
        fetch(BASE_URL+'users',{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            }
        }).then(res=> res.json())
        .then((res)=>{
            if(res && res.users){
                setUsers(res.users);
                // dispatch(login(res))
            }
        })
    }, [])

    function scheduleCall() {



    }
    function connectUser() {



    }

    return (
        <div>
            {users.map((item)=>{
                return <div  className="users" >
                    <h1>{item.username} </h1>
                    <p>{props.email}</p>
                    <div className="call">
                        <AddIcCallIcon onCLick={scheduleCall} ></AddIcCallIcon>
                    </div>
                    <div className="connect">
                        <PersonAddIcon onClick={connectUser}></PersonAddIcon>
                    </div>
                </div>
            })}
        </div >
    );
}

export default Users;
