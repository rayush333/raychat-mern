import React from "react";
import ListItem from "./ListItem";
import AddRoom from "./AddRoom";
import {useStateValue} from "../StateProvider";
function List(){
    const [{user},dispatch] = useStateValue();
    return <div className="list">
    <AddRoom />
        {user.rooms.map((roomid,index)=>{
            return <ListItem roomid={roomid} key={index} />;
        })}
    </div>;
}
export default List;
