import React from "react";
import {Avatar} from "@material-ui/core"
function ListItem(props){
    return <div className="list-item">
        <Avatar src={"https://avatars.dicebear.com/api/human/"+props.room._id+".svg"} />
        <div className="chat-info">
            <h2>{props.room.name}</h2>
            <p>Last message</p>
        </div>
    </div>;
}
export default ListItem;