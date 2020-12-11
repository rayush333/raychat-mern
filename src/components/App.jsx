import React,{useEffect,useState} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Pusher from "pusher-js";
import axios from "axios";
Pusher.logToConsole = true;
function App(){
    const [chats,updatechats] = useState([]);
    useEffect(()=>{
        loadChats();
        const pusher = new Pusher('39426f4afe4886d52f52', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', function(data) {
            updatechats(function(prev){
              return [...prev,data];
            });
          });
          channel.bind('deleted',function(data){
            updatechats(function(prev){
              return prev.filter(function(message){
                return message._id !== data._id;
              });
            });
          });
          channel.bind('updated',function(data){
            updatechats(function(prev){
              return prev.map(function(message){
                if(message._id === data._id){
                  message.message = "This message was deleted";
                  message.time='';
                }
                
                return message;
              });
            });
          });
        },[]);
    async function loadChats(){
      const res=await axios.get("http://localhost:5000/messages");
      updatechats(res.data);
    }
    return <div className="app">
       <div className="app-body">
        <Sidebar />
        <Chat array={chats} />
        </div>
    </div>;
}
export default App;