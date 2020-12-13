import React from "react";
import ListItem from "./ListItem";
import AddRoom from "./AddRoom";
function List(props){
    return <div className="list">
    <AddRoom />
        {props.rooms.map((room,index)=>{
            return <ListItem room={room} key={index} />;
        })}
    </div>;
}
export default List;
