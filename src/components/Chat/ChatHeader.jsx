import React from "react";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
function ChatHeader(props){
    let len = 0,msg = {};
    if(props.msg)
    {
     len=props.msg.length;
     msg=props.msg[len-1];
    }
    function addmenu(){
        alert("Your room id is: "+props.id+"\nShare this id with your friends to add them to your private room!\nAttention: Do not share your room id with third parties.");
    }
    return <div className="chat-header">
        <Avatar className="contact-photo" src= {"https://avatars.dicebear.com/api/human/"+props.id+".svg"} />
        <div className="chat-header-info">
            <h3>{props.name}</h3>
            <p className="room-id"> [Room Id: {props.id}] </p>
            <p>last seen at {msg?.time}</p>
        </div>
        <div class="chat-header-right">
        <IconButton className="chat-header-icons"><SearchOutlinedIcon /></IconButton>
        <IconButton className="chat-header-icons"><AttachFileIcon /></IconButton>
        <IconButton className="chat-header-icons"><AddIcon onClick = {addmenu} /></IconButton>
        </div>
    </div>;
}
export default ChatHeader;