import FormInput from "./components/FormInput"
import {useEffect, useState} from "react";
import Axios from "axios";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");

    const [ratingList, setratingList] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get2").then((response) => {
            setratingList(response.data)
        })
    })
    
    const handleClick = (e) => {
        
        let inList = false;
        ratingList.map((val) => {
        
            if (val.username == username && val.password == password){
                inList = true;
                
            }

        })
        if (inList){
            props.setUser("logged");
            
        }
        else{
            alert("Wrong credentials")
            e.preventDefault();
        }
    }
    return (
        
        <div>
            {props.user == "Not Logged in" ? 
            <div> 
                <h1> Login </h1>
                <FormInput placeholder = "Username" set = {setUsername}/>
                <FormInput placeholder = "Password" set = {setPassword}/>
                <button onClick = {handleClick}> Submit </button>
            </div>
            : <div>
                <h1> Logged in Successfully! </h1>
                </div> }

        
            
        </div>
    )
}

export default Login;