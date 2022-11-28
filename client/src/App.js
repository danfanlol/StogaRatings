import Navbar from './navbar'
import './styles.css'
import Register from './pages/Register';
import View from './pages/View';
import Submit from './pages/Submit';
import Login from "./pages/Login";
function App(){
  let component
  console.log(window.location.pathname);
  switch (window.location.pathname){
    case "/register":
      component = <Register/>
      break
    case "/view":
      component = <View/>
      break
    case "/submit":
      component = <Submit/>
      break
    case "/login":
      component = <Login/>
  }
  return (
    <>
      <Navbar/>
      <div className = "container" > {component}</div>
    </>
  )
}

export default App
