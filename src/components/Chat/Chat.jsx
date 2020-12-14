import React,{useState,useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useParams} from "react-router-dom";
import axios from "axios";
function Chat(){
    const {roomid} = useParams();
    
    const [room,updateroom] = useState({
        name: "",
        messages: []
    });
    useEffect(()=>
    {
        if(roomid)
        {
            axios.get("http://localhost:5000/rooms/"+roomid)
            .then((res)=> {
                console.log(res.data);
                updateroom({
                    name: res.data.name,
                    messages: res.data.messages
                });
            });
        }
    },[roomid]);
    return <div className="chat">
        <ChatHeader name={room.name} id={roomid} />
        <ChatBody array={room.messages} />
        <ChatFooter roomid={roomid} />
    </div>;
}
export default Chat;