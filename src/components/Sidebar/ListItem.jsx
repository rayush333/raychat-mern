import React,{useState,useEffect} from "react";
import {Avatar} from "@material-ui/core"
function ListItem(){
    const [seed,setseed] = useState(0);
    useEffect(()=>
    {
        setseed(Math.floor(Math.random()*5000));
    },[]);
    return <div className="list-item">
        <Avatar src={"https://avatars.dicebear.com/api/human/"+seed+".svg"} />
        <div className="chat-info">
            <h2>Room Name</h2>
            <p>Last message</p>
        </div>
    </div>;
}
export default ListItem;