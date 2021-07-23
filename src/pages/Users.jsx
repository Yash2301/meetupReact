import React, { useState, useEffect } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { BASE_URL } from './../config/constants';
import { getToken } from "./../utils";
import ContactCard from "./../components/ContactCard";
import { Container,Typography,Grid } from '@material-ui/core';
import ScheduleDialoge from './../components/ScheduleDialoge';
import { useHistory } from "react-router";

function Users(props) {
    
    const [ users, setUsers] = useState([]);
    const [ frineds, setFrineds] = useState([]);
    const [ openDialog, setOpenDialog] = useState(false);
    const [ scheduleFriendId, setScheduleFriendId] = useState(null);
    
    const history = useHistory();

    useEffect(() => {
        getUsers()
    }, [])


    function getUsers() {
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
                setFrineds(res.frineds);
                // dispatch(login(res))
            }
        })
    }

    function connectUser(id) {
        fetch(BASE_URL+'getConnect',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            },
            body:JSON.stringify({
                friendId:id,
                "description":"test"
            })
        }).then(res=> res.json())
        .then(()=>{
            getUsers()
        })
    }

    function scheduleAdd(scheduleData) {
        fetch(BASE_URL+'schedule',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            },
            body:JSON.stringify({
                "friend_id": scheduleFriendId,
                "title": scheduleData.title,
                "meeting_time":scheduleData.meetingTime,
                "status":1,
                "description":scheduleData.description
            })
        }).then(res=> res.json())
        .then(()=>{
            history.push('/schedules')
        })
    }

    return (
        <Container>
            <Typography gutterBottom variant="h3" style={{color:'black',marginTop:"1em"}} component="h2">
                Friends
            </Typography>
            <Grid container spacing={4} >
                    {frineds.map((item)=>{
                        return <Grid item xs={12} md={3} >
                                <ContactCard name={item.username} user={item} friendConnect={true}  makeSchedule={false} scheduleCall={()=>{
                                    setScheduleFriendId(item.friend_id)
                                    setOpenDialog(true)
                                }} />
                            </Grid>
                    })}
            </Grid>
            <Typography gutterBottom variant="h3" style={{color:'black',marginTop:"1em"}} component="h2">
                Users
            </Typography>
            <ScheduleDialoge openDialog={openDialog} closeDialog={()=>{
                setOpenDialog(false)
            }} saveDialog={(scheduleData)=>{
                console.log('aaa');
                scheduleAdd(scheduleData)
                setOpenDialog(false)
            }} />
            <Grid container spacing={4} >
                    {users.map((item)=>{
                    return <Grid item xs={12} md={3} >
                            <ContactCard name={item.username} user={item} friendConnect={false} makeSchedule={true} connectUser={connectUser} />
                        </Grid>
                    })}
            </Grid>
        </Container>
    );
}

export default Users;
