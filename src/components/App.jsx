import React,{useEffect} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Pusher from "pusher-js";
Pusher.logToConsole = true;
function App(){
    useEffect(()=>{
        const pusher = new Pusher('39426f4afe4886d52f52', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', function(data) {
            alert(JSON.stringify(data)); 
          });
    },[]);
    return <div className="app">
       <div className="app-body">
        <Sidebar />
        <Chat />
        </div>
    </div>;
}
export default App;