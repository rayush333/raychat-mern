import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
function Chat(){
    return <div className="chat">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>;
}
export default Chat;