import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./components/StateProvider";
ReactDOM.render(
<StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider>,document.getElementById("root"));