
import { Link } from "react-router-dom";
const navbar = (props) => {

    const handleClick = () =>{
        props.setUser("Not Logged in");
    }
    return (
    <nav className = "nav">
        <a href = "" className = ""> Conestoga Ratings </a>
        <ul>
            {props.user == "logged" ? <li> <Link to = "/submit" > Submit Course Review  </Link> </li>: <span></span> }
            <li> <Link to = "/view"> View Course Ratings </Link></li>
            {props.user == "Not Logged in" ? <li> <Link to = "/register" > Register  </Link> </li>: <div className = "breaks"> </div> }
            {props.user == "logged" ? <li> <Link onClick = {handleClick} to = "/login"> Logout </Link> </li>: <div className = "breaks"> </div> }
            {props.user == "Not Logged in" ? <li> <Link to = "/login" > Log in  </Link> </li>: <div className = "breaks"> </div> }
            
        </ul>
        </nav>
        )
}

export default navbar;