import CourseReview from "./CourseReview"

const Viewing = (props) => {
    let component = props.ratingList.map((val) => {
        
        if (val.courseName == props.courseName && val.courseLevel == props.courseLevel){
            return <div>
                <h2 > Teacher: {val.courseTeacher} </h2>
                <CourseReview courseLevel = {val.courseLevel} courseName = {val.courseName} courseTeacher = {val.courseTeacher} courseReview = {val.courseReview}/>
                </div>
           
        }
    })
    return component;
}

export default Viewing;

    