import React from "react";
import axios from "axios";
import {Button} from "@material-ui/core";
import {auth,provider,fb} from "../firebase";
import {useStateValue} from "./StateProvider";
import { actionTypes } from "./reducer";

function Login(){
    const [{ user },dispatch] = useStateValue();
        function handleSubmitGoogle(event){
        // event.preventDefault();
        auth.signInWithPopup(provider).then(async function(res){
            const result=await axios.post("http://localhost:5000/users",res.user);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.data
            });
        }).catch(function(err){
            if(err)
            alert(err.message);
        });
    }
    function handleSubmitFB(event){
        // event.preventDefault();
        auth.signInWithPopup(fb).then(async function(res){
            
            const result=await axios.post("http://localhost:5000/users",res.user);
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.data
            });
        }).catch(function(err){
            if(err)
            alert(err.message);
        });
    }
    return <div className="login">
        <div class="login-container">
            <img src="https://icon-library.com/images/message-icon-android/message-icon-android-17.jpg" alt="raychat logo" />
            <div class="login-next">
                <h1>Sign in to RayChat</h1>
            </div>
            
            <button className ="btn btn-block btn-social btn-google" onClick={handleSubmitGoogle}>
  <span className ="fa fa-google"></span>
  CONTINUE WITH GOOGLE
</button>
             <button className ="btn btn-block btn-social btn-facebook" onClick={handleSubmitFB}>
  <span className ="fa fa-facebook"></span>
  CONTINUE WITH FACEBOOK
</button>
            
        </div>
    </div>;
}
export default Login;