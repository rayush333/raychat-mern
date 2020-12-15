import React,{useState,useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useParams} from "react-router-dom";
import Pusher from "pusher-js";
import axios from "axios";
function Chat(){
    let i=0;
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
                updateroom({
                    name: res.data.name,
                    messages: res.data.messages
                });
            });
        }
        // const pusher = new Pusher('39426f4afe4886d52f52', {
        //     cluster: 'ap2'
        //   });
      
        //   const channel = pusher.subscribe('messages');
    //       channel.bind('inserted', function(data) {
    //         updatechats(function(prev){
    //           return [...prev,data];
    //         });
    //       });
    //       channel.bind('deleted',function(data){
    //         updatechats(function(prev){
    //           return prev.filter(function(message){
    //             return message._id !== data._id;
    //           });
    //         });
    //       });
        //   channel.bind('updated',function(data){
        //       console.log(i);
        //       i++;
            // if(data.room_id === roomid)
            // {
            //     axios.get("http://localhost:5000/rooms/"+roomid)
            //     .then((res)=> {
            //         console.log(res.data);
            //         updateroom({
            //             name: res.data.name,
            //             messages: res.data.messages
            //         });
            //     });
            // }
                // });
                
    //             return message;
    //           });
    //         });
    //       });
    //     },[]);
    }
    ,[roomid]);
    return <div className="chat">
        <ChatHeader name={room.name} id={roomid} msg={room.messages}/>
        <ChatBody array={room.messages} />
        <ChatFooter roomid={roomid} />
    </div>;
}
export default Chat;