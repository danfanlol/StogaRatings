import Navbar from './navbar'
import './styles.css'
import Register from './pages/Register';
import View from './pages/View';
import Submit from './pages/Submit';
import Login from "./pages/Login";
import {useState} from "react"
import {Route, Routes} from "react-router-dom";




function App(){
  const [user,setUser]  = useState("Not Logged in");
  return (
    <>
      <Navbar setUser = {setUser} user = {user} />
      <div className = "container" > 
        <Routes>
          <Route path = "/register" element={<Register/>} />
          <Route path = "/submit" element={<Submit/>} />
          <Route path = "/view" element={<View course = "Biology"/>} />
          <Route path = "/login" element={<Login user = {user} setUser = {setUser}/>} />
        </Routes>
        </div>
    </>
  )
}

export default App
