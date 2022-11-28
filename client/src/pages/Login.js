import FormInput from "./components/FormInput"
import {useRef, useState} from "react";


export default function Login(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(username, email, fullname, password)
    }
    return (
        <div>
        <form onSubmit = {handleClick}>
            <h1> Login </h1>
            <FormInput placeholder = "Username" set = {setUsername}/>
            <FormInput placeholder = "Password" set = {setPassword}/>
            <button> <a href = "hello"> Submit</a> </button>
        </form>
    </div>
    )
}