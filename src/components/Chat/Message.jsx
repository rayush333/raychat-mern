import React from "react";
function Message(props){
    return <p className="message message-sent">
        <span class="sender">Ayush</span>
        Message 
            <span class="time">{new Date().toUTCString()}</span>
        
    </p>
}
export default Message;