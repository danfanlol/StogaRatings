import FormInput from "./components/FormInput"
import {useRef, useState} from "react";
import "./Register.css"
export default function Pricing(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    
    const submitInformation = (e) => {
        e.preventDefault();
        console.log(username, email, fullname, password)
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