import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    buttonGroup: {
        marginTop: theme.spacing(3),
    },
    buttonScd:{
        marginLeft: theme.spacing(1),
    }
}));

export default function ScheduleDialoge(props) {
    const classes = useStyles();

    const [ scheduleForm, setScheduleForm ] = useState({})

    const onValueChange = (event)=>{
        const { name, value } = event.target;
        setScheduleForm({
            ...scheduleForm,
            [name]: value
        })
    }

    useEffect(()=>{
        setScheduleForm({
            meetingTime:'',
            title:'',
            description:'',
        })
    },[]);

    return (
        <Dialog
            fullWidth={"md"}
            maxWidth={"md"}
            open={props.openDialog}
            onClose={props.closeDialog}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">Add Schedule</DialogTitle>
            <DialogContent >
                <form noValidate>
                    <div>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="datetime-local"
                                label="Schedule Date and Time"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="meetingTime"
                                onChange={onValueChange}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="title"
                                label="Title"
                                type="text"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="title"
                                onChange={onValueChange}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="Discription"
                                label="Discription"
                                type="text"
                                rows={2}
                                multiline
                                rowsMax={6}
                                name="description"
                                onChange={onValueChange}
                            />
                        </FormControl>
                    </div>
                </form>
                <div className={classes.buttonGroup} >
                    <Button onClick={()=>{
                        console.log(scheduleForm);
                        if(scheduleForm.meetingTime != '' && scheduleForm.title != '' && scheduleForm.description != ''){
                            props.saveDialog(scheduleForm)
                        }
                    }} className={classes.buttonScd} variant="contained" color="primary">
                        Save
                    </Button>
                    <Button onClick={props.closeDialog} className={classes.buttonScd}  variant="contained" color="primary">
                        Close
                    </Button>
                </div>
            </DialogContent>
            <DialogActions>
                
            </DialogActions>
        </Dialog>
    );
}
