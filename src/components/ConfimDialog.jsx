import React, { useState } from "react";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


function ConfimDialog() {

    const [openSchedule, setOpenSchedule] = useState(false)
    const [deleteSchedule, setDeleteSchedule] = useState(false)

    return (
        <Dialog
            open={deleteSchedule}
            onClose={() => {
                setDeleteSchedule(false)
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{" Are you sure want to delete ?"}</DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                    setDeleteSchedule(false)
                }} color="primary">
                    Disagree
                </Button>
                <Button onClick={() => {
                    setDeleteSchedule(false)
                }} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfimDialog;
