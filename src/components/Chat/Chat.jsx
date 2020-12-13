import React,{useState,useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useParams} from "react-router-dom";
import axios from "axios";
function Chat(){
    const {roomid} = useParams();
    const [roomname,updatename] = useState("");
    useEffect(()=>
    {
        if(roomid)
        {
            axios.get("http://localhost:5000/rooms/"+roomid)
            .then((res)=> {
                console.log(res);
                updatename(res.data.name);
            });
        }
    },[roomid]);
    return <div className="chat">
        <ChatHeader name={roomname} id={roomid}/>
        {/* <ChatBody />
        <ChatFooter /> */}
    </div>;
}
export default Chat;