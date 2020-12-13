import React from "react";
import {Avatar} from "@material-ui/core";
import Axios from "axios";
import {useHistory} from "react-router-dom";
function AddRoom(){
    let history=useHistory();
    async function handleClick(){
        const name=prompt("Enter room name");
        if(name)
        {
            const res=await Axios.post("http://localhost:5000/rooms",{name: name});
            console.log(res);
            history.push("/");
        }
    }
    return <div onClick={handleClick} className="list-item">
    <Avatar src="https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Speech_bubblesvg-512.png" />
    <div className="chat-info">
        <h1 className="cr-room">Create Room</h1>
        
    </div>
</div>;
}
export default AddRoom;