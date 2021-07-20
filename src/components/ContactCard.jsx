import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ContactCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.friendConnect && <div className="call">
            <AddIcCallIcon onClick={()=>{
              props.connectUser(props.user.id)
            }} ></AddIcCallIcon>
        </div>}
        {props.makeSchedule && <div className="connect">
            <PersonAddIcon onClick={props.scheduleCall} ></PersonAddIcon>
        </div>}
      </CardActions>
    </Card>
  );
}
