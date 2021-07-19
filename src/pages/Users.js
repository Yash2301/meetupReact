import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

function Users(props) {
    function deleteNote() {
        props.onDelete(props.id);
    }

    function scheduleCall() {



    }
    function connectUser() {



    }

    return (
        <div className="users" aria-rowspan>
            <h1>{props.fname} {props.lname} </h1>
            <p>{props.email}</p>

            <DeleteIcon color="action" onClick={deleteNote}>DELETE</DeleteIcon>
            <div className="call">
                <AddIcCallIcon onCLick={scheduleCall} ></AddIcCallIcon>
            </div>
            <div className="connect">
                <PersonAddIcon onClick={connectUser}></PersonAddIcon>
            </div>

        </div >
    );
}

export default Users;
