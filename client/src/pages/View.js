import {useState, useEffect} from "react";
import Axios from "axios";
import Viewing from './components/Viewing'



const Home = (props) =>{
    const [teacher, setTeacher] = useState("");
    const [level, setLevel] = useState("AP");
    const [course, setCourse] = useState("Biology");
    const [component, setComponent] = useState();
    const [ratingList, setratingList] = useState([]);

    const onLevelChange = (e) =>{
        setLevel(e.target.value);

    }

    const onCourseChange = (e) =>{
        setCourse(e.target.value);
 
    }
    const handleSubmit = (e) =>{
    
        setComponent(
            <div>
                <h1> Now Showing Results For {level} {course} </h1>
            <Viewing ratingList = {ratingList} courseLevel = {level} courseName = {course} />
            </div>);
        e.preventDefault();
        
        
    }

    useEffect(() => { 
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setratingList(response.data)
        })
    })
    return (
        <div> 
            
            <h1> Select a Course to View </h1>
            
                <form >
                
                    <div className = "input3">
                    <label> Course Level </label>
                    <select onChange = {onLevelChange} name = "Course Level">
                        <option> AP </option>
                        <option> Honors </option>
                        <option> Accelerated </option>
                        <option> Academic </option>
                    </select>
                    </div >

                    <div className = "input2">
                    <label> Course Name </label>
                    
                    <select onChange = {onCourseChange} name = "Course Name">
                        <option> Biology </option>
                        <option> Chemistry </option>
                        <option> Calculus </option>
                        <option> World History </option>
                        <option> US History </option>
                        <option> US Government </option>
                        <option> Physics </option>
                        <option> Language & Composition </option>
                    </select>
                    </div>
                    <button onClick = {handleSubmit}> Submit </button>
                </form>
                {component}


                
        </div>
        

    )
}

export default Home;