import React,{useState} from "react";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import {IconButton, Fab} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import axios from "axios";
function ChatFooter(){
    const [msg,updatemsg] = useState({
        name: "",
        message: "",
        time: "",
        received: false
    });
        async function handleSubmit(event){
        event.preventDefault();
        console.log(msg);
        await axios.post("http://localhost:5000/messages",msg);
        updatemsg({
            name: "",
            message: "",
            time: "",
            received: false
        })
    }
    function handleChange(event){
        const {name,value} = event.target;
        updatemsg(function(prev){
            return {
                ...prev,
                [name]: value,
                time: new Date().getHours()+":"+new Date().getMinutes()
                };
        });
    }
    return <div class="chat-footer">
    <IconButton><InsertEmoticonIcon /></IconButton>
    
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a message" name="message" value={msg.message} onChange={handleChange} autoComplete="off" spellCheck="false" />
        <Fab color="orange" type="submit" ><SendIcon /></Fab>
    </form>
    <IconButton><MicIcon /></IconButton>
    </div>;
}
export default ChatFooter;