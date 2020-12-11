import React from "react";
import Message from "./Message";
function ChatBody(props){
    return <div className="chat-body">
        {props.array.map(function(message,index){
            return <Message body={message} />;
        })}
    </div>;
}
export default ChatBody;
