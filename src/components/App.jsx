import React,{useEffect,useState} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

import axios from "axios";
import Login from "./Login";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {useStateValue} from "./StateProvider";
function App(){
  const [{user},dispatch] = useStateValue();
    // const [chats,updatechats] = useState([]);
    // useEffect(()=>{
    //     loadChats();
    //     const pusher = new Pusher('39426f4afe4886d52f52', {
    //         cluster: 'ap2'
    //       });
      
    //       const channel = pusher.subscribe('messages');
    //       channel.bind('inserted', function(data) {
    //         updatechats(function(prev){
    //           return [...prev,data];
    //         });
    //       });
    //       channel.bind('deleted',function(data){
    //         updatechats(function(prev){
    //           return prev.filter(function(message){
    //             return message._id !== data._id;
    //           });
    //         });
    //       });
    //       channel.bind('updated',function(data){
    //         updatechats(function(prev){
    //           return prev.map(function(message){
    //             if(message._id === data._id){
    //               message.message = "This message was deleted";
    //               message.time='';
    //             }
                
    //             return message;
    //           });
    //         });
    //       });
    //     },[]);
    // async function loadChats(){
    //   const res=await axios.get("http://localhost:5000/messages");
    //   updatechats(res.data);
    // }
    return <div className="app">
       
       {user?
        <div className="app-body">
        <Router>
        <Sidebar />
        <Switch>
          <Route path="/:roomid">
          <Chat />
          </Route>
        </Switch>
        </Router></div>:<Login />}
        
    </div>;
    
}
export default App;