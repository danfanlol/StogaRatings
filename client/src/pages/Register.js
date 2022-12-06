import FormInput from "./components/FormInput"
import {useRef, useState} from "react";
import "./Register.css"
import Axios from "axios";
export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    
    const submitInformation = (e) => {
        if (username !== "" && email !== "" && fullname !== "" && password !== ""){
            Axios.post("http://localhost:3001/api/insert2", {username: username , email: email , fullname: fullname, password: password}).then(() => { alert("success")})
        }
        else{
            alert("You did not fill all of the required boxes")
            e.preventDefault();
        }
    
    }
    return (
    <div>
        <form>
            <h1> Register </h1>
            <FormInput placeholder = "Username" set = {setUsername}/>
            <FormInput placeholder = "Email" set = {setEmail}/>
            <FormInput placeholder = "Full Name" set = {setFullname}/>
            <FormInput placeholder = "Password" set = {setPassword}/>
            <button onClick = {submitInformation}> Submit </button>
        </form>
    </div>
    )
}