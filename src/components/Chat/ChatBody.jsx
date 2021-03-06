import React from "react";
import Message from "./Message";
function ChatBody(props){
    
    return <div className="chat-body">
        {props.array?props.array.map(function(message,index){
            return <Message body={message} key={index} />;
        }):null}
    </div>;
}
export default ChatBody;
