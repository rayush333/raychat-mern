import React from "react";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

function SidebarHeader(){
    return <div className="sidebar-header">
        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="face" />
       <div class="sidebar-header-right">
         <IconButton className="butt"> <DonutLargeIcon /> </IconButton>
        <IconButton className="butt"> <ChatIcon /> </IconButton>
           <IconButton className="butt"> <MoreVertIcon /> </IconButton> 
        </div>
    </div>;

}
export default SidebarHeader;