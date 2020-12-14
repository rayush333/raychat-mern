import React,{useEffect, useState} from "react";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
import axios from "axios";
function ListItem(props){
    const [room,updateroom] = useState({
        name: "",
        messages: []
    });
    useEffect(()=>{
        axios.get("http://localhost:5000/rooms/"+props.roomid)
        .then((res)=>{
            console.log(res.data);
            updateroom({
                name: res.data.name,
                messages: res.data.messages
            });
        });
    },[props.roomid]);
    return (<Link to={"/"+props.roomid}><div className="list-item">
        <Avatar src={"https://avatars.dicebear.com/api/human/"+props.roomid+".svg"} />
        <div className="chat-info">
            <h2>{room.name}</h2>
            <p>Last message</p>
        </div>
    </div>
    </Link>);
}
export default ListItem;