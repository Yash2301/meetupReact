import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Home() {

    const auth = useSelector((state) => state.authReducer)


    function editProfile() {


    }
    function usersPage() {


    }

    return (
        <div className="home">
            <h1>Welcom {auth.user.username}</h1>
            <h3 onClick={editProfile}><Link to="/editprofile" >Edit Profile</Link></h3>

            <h3 onClick={usersPage}><Link to="/users" >Users</Link></h3>


        </div>


    )

}

export default Home;