import React from "react";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import {IconButton, Fab} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
function handleSubmit(event){
    event.preventDefault();
}
function ChatFooter(){
    return <div class="chat-footer">
    <IconButton><InsertEmoticonIcon /></IconButton>
    
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a message" />
        <Fab color="orange" type="submit" ><SendIcon /></Fab>
    </form>
    <IconButton><MicIcon /></IconButton>
    </div>;
}
export default ChatFooter;