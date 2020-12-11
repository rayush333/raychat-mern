import React from "react";
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import {Fab} from "@material-ui/core";
function Message(props){
const ec=props.body.received?null:"message-sent";
    async function handleClick(){
        await axios.patch("http://localhost:5000/messages/"+props.body._id);
    }
return <p className={"message "+ec}>
        <span className="sender">{props.body.name}</span>
        {props.body.message}
            <span className="time">{props.body.time}</span>
        {props.body.message==="This message was deleted"?null:<Fab onClick={handleClick}><DeleteIcon /></Fab>}
    </p>;
}
export default Message;