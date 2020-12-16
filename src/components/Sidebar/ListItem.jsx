import React,{useEffect, useState} from "react";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
import axios from "axios";
import Pusher from "pusher-js";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {Fab} from "@material-ui/core";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
function ListItem(props){
    const [{user},dispatch] = useStateValue();
    const [room,updateroom] = useState({
        name: "",
        messages: []
    });
    useEffect(()=>{
        axios.get("http://localhost:5000/rooms/"+props.roomid)
        .then((res)=>{
            updateroom({
                name: res.data.name,
                messages: res.data.messages
            });
        });
        const pusher = new Pusher('39426f4afe4886d52f52', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('updated',function(data){
            if(data.room_id === props.roomid)
            {
                axios.get("http://localhost:5000/rooms/"+props.roomid)
                .then((res)=> {
                    
                    updateroom({
                        name: res.data.name,
                        messages: res.data.messages
                    });
                });
            }
                });
    },[props.roomid]);
    // async function handleClick(){
    //     const res = axios.post("http://localhost:5000/exit/"+props.roomid,{user: user._id});
    //     dispatch({
    //         type: actionTypes.SET_USER,
    //         user: res.data
    //     });
    // }
    return (<Link to={"/"+props.roomid}><div className="list-item">
        <Avatar src={"https://avatars.dicebear.com/api/human/"+props.roomid+".svg"} />
        {/* <Fab onClick={handleClick}><MeetingRoomIcon /></Fab> */}
        <div className="chat-info">
            <h2>{room.name}</h2>
            <p>{room.messages[room.messages.length-1]?.message}</p>
        </div>
    </div>
    </Link>);
}
export default ListItem;