import React, { useState } from "react";


function Edit() {

    const [n, newName] = useState(
        {
            fname: "",
            lname: ""

        }
    );

    function handleChange(event) {
        // console.log(event.target.value);
        const { name, value } = event.target;
        newName(preValue => {
            return {
                ...preValue,
                [name]: value
            };
        });


    }

    function updateInfo() {



    }

    return (


        <div className="container">
            <h1>Edit Profile</h1>
            <form onSubmit={updateInfo}>
                <input onChange={handleChange} type="text" name="fname" value={n.fname} placeHolder="New FName" ></input>
                <input onChange={handleChange} type="text" name="lname" value={n.lname} placeHolder="New LName" ></input>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit;