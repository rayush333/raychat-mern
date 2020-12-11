import React,{useState} from "react";
import axios from "axios";
function Login(){
    const [cred,update] = useState({
     
        username: "",
        password: ""
        
    });
    function handleChange(event){
        const {name,value} = event.target;
        update((prev)=>{
            return {
                ...prev,
                [name]: value
            };
        });
    }
    async function handleSubmit(event){
        event.preventDefault();
        await axios({
            method: "POST",
            data: cred,
            withCredentials: true,
            url: "http://localhost:5000/login"
        })
        .then((res)=>{
            console.log(res);
        });
    }
    return <form onSubmit={handleSubmit}>
        
        <input type="text" name="username" placeholder="Username" value={cred.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={cred.password} onChange={handleChange} />
        <button type="submit">Login</button>
     </form>
}
export default Login;