import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
function Chat(props){
    return <div className="chat">
        <ChatHeader />
        <ChatBody array={props.array} />
        <ChatFooter />
    </div>;
}
export default Chat;