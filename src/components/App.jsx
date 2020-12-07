import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat";
function App(){
    return <div className="app">
       <div className="app-body">
        <Sidebar />
        <Chat />
        </div>
    </div>;
}
export default App;