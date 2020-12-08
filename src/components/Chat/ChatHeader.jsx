import React from "react";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function ChatHeader(){
    return <div className="chat-header">
        <Avatar className="contact-photo" />
        <div className="chat-header-info">
            <h3>Room Name</h3>
            <p>last seen</p>
        </div>
        <div class="chat-header-right">
        <IconButton><SearchOutlinedIcon /></IconButton>
        <IconButton><AttachFileIcon /></IconButton>
        <IconButton><MoreVertIcon /></IconButton>
        </div>
    </div>;
}
export default ChatHeader;