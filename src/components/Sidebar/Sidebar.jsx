import React from "react";
import SidebarHeader from "./SidebarHeader";
import Search from "./Search";
import List from "./List";
function Sidebar(){
    return <div className="sidebar">
        <SidebarHeader />
    <Search />
    <List />
    </div>;
}
export default Sidebar;