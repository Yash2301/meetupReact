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
    const [rows, setRows] = useState([])
    
    useEffect(()=>{

        // get all
        fetch(BASE_URL+'schedule',{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+getToken()
            }
        }).then(res=> res.json())
        .then((response)=>{
            setRows(response.schedules)
        })
        
    },[])

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
                                    <TableCell ><Button variant="contained" color="primary"  >Edit</Button> <Button variant="outlined" color="danger" >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>


    )

}

export default Schedules;