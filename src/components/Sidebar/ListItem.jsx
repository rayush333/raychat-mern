import React from "react";
import {Avatar} from "@material-ui/core"
function ListItem(){
    return <div className="list-item">
        <Avatar />
        <div className="chat-info">
            <h2>Room Name</h2>
            <p>Last message</p>
        </div>
    </div>;
}
export default ListItem;