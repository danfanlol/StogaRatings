import {useRef, useState} from "react";
 import "./Submit.css"
import Axios from "axios"
export default function Submit(){
    const [name, setName] = useState("");
    const [level, setLevel] = useState("AP");
    const [course, setCourse] = useState("Biology");
    const [teacher, setTeacher] = useState("");
    const [review, setReview] = useState("");
    
    const onLevelChange = (e) =>{
        setLevel(e.target.value);
        
    }

    const onCourseChange = (e) =>{
        setCourse(e.target.value);
    }

    const submitReview = (e) => {
        if (teacher !== "" && review !== "" && name != ""){
            Axios.post("http://localhost:3001/api/insert", {courseLevel: level , courseName: course , courseTeacher: teacher, courseReview: review}).then(() => { alert("success")})
        }
        else{
            alert("You did not fill all of the required boxes")
            e.preventDefault();
        }
    
        
    }

    const handleTeacher = (e) => {
        setTeacher(e.target.value);
    }
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    return (

    

    
    
    <div className = "formInput"> 
        <h1> Submit </h1>
        <form >
            <div className = "input">
                <input onChange = {handleNameChange} placeholder = "Your Name"/>
            </div>
            
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

            <div className = "input">
                
                <input onChange = {handleTeacher} placeholder = "Teacher"/>
            </div>

          
            <div className = "input">
                <input onChange = {handleReviewChange} placeholder = "Tell us your thoughts!"/>
            </div>
            <button onClick = {submitReview}> Submit </button>
           
        </form>
        
    
    </div> 
        
    )
}