import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from './../config/constants';
import { getToken } from "./../utils";
import ScheduleDialoge from  './../components/ScheduleDialoge';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
        marginTop: 5,
    },
    boldName:{
        fontWeight: 'bold'
    }
});


function Schedules() {
    const classes = useStyles();
    const auth = useSelector((state) => state.authReducer)
    const [sechduleEditData, setSechduleEditData] = useState({})
    const [openSchedule, setOpenSchedule] = useState(false)
    const [deleteSchedule, setDeleteSchedule] = useState(false)

    const [rows, setRows] = useState([])
    
    useEffect(()=>{

        // get all
        getSchedule()

    },[])

    const getSchedule = ()=>{
        fetch(BASE_URL+'schedule',{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            },
        }).then(res=> res.json())
        .then((response)=>{
            setRows(response.schedules)
        })
    }

    const onEdit = (scheduleData)=>{
        fetch(BASE_URL+'schedule/'+sechduleEditData.id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            },
            body:JSON.stringify({
                "friend_id": sechduleEditData.friend_id,
                "title": scheduleData.title,
                "meeting_time":scheduleData.meetingTime,
                "status":1,
                "description":scheduleData.description
            })
        }).then(res=> res.json())
        .then((response)=>{
            getSchedule()
        })
    }

    const onDelete = ()=>{
        fetch(BASE_URL+'schedule/'+sechduleEditData.id,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            },
        }).then(res=> res.json())
        .then((response)=>{
            getSchedule()
        })
    }


    return (
        <div>
            <Container className={classes.root} >
                <Typography variant="h5" component="h5" >Schedules</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.boldName} > Friend Name </TableCell>
                                <TableCell className={classes.boldName} > Title </TableCell>
                                <TableCell className={classes.boldName} > Time </TableCell>
                                <TableCell className={classes.boldName} > Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell >{row.frined_user[0].first_name} {row.frined_user[0].last_name}</TableCell>
                                    <TableCell >{row.title}</TableCell>
                                    <TableCell >{row.meeting_time}</TableCell>
                                    <TableCell ><Button variant="contained" color="primary" onClick={()=>{
                                        setOpenSchedule(true);
                                        setSechduleEditData(row)
                                    }} >Edit</Button> <Button variant="outlined" color="danger" onClick={()=>{
                                        setDeleteSchedule(true)
                                        setSechduleEditData(row)
                                    }} >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {openSchedule && <ScheduleDialoge isEidt={true} editData={sechduleEditData} openDialog={openSchedule} closeDialog={()=>{
                    setOpenSchedule(false)
                }} saveDialog={(scheduleData)=>{
                    onEdit(scheduleData)
                    setOpenSchedule(false)
                }} />}
                <Dialog
                    open={deleteSchedule}
                    onClose={()=>{
                        setDeleteSchedule(false)
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{" Are you sure want to delete ?"}</DialogTitle>
                    <DialogActions>
                    <Button onClick={()=>{
                        setDeleteSchedule(false)
                    }} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={()=>{
                        setDeleteSchedule(false)
                        onDelete()
                    }} color="primary">
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>


    )

}

export default Schedules;