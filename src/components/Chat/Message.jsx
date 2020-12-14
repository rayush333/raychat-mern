import React from "react";
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import {Fab} from "@material-ui/core";
import {useStateValue} from "../StateProvider";
function Message(props){
    const [{user},dispatch] = useStateValue();
const ec=(props.body.sender_id===user._id)?"message-sent":null;
    // async function handleClick(){
    //     await axios.patch("http://localhost:5000/rooms/"+props.body.room_id+"/messages",props.body);
    // }
return <p className={"message "+ec}>
        <span className="sender">{(props.body.sender_id===user._id)?null:props.body.sender_name}</span>
        {props.body.message}
            <span className="time">{props.body.time}</span>
        {/* {props.body.time && <Fab onClick={handleClick}><DeleteIcon /></Fab>} */}
    </p>;
}
export default Message;