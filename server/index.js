const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors");
const bodyParser = require("body-parser")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "coursereviews",
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM courses"

    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})





app.post("/api/insert", (req,res) => {
    const courseLevel = req.body.courseLevel;
    const courseName = req.body.courseName;
    const courseTeacher = req.body.courseTeacher;
    const courseReview = req.body.courseReview;
    const sqlInsert = "INSERT INTO courses (courseLevel,courseName,courseTeacher,courseReview) VALUES (?,?,?,?);"

    db.query(sqlInsert, [courseLevel, courseName,courseTeacher,courseReview], (err, result) => {
        console.log(err);
    });
})

app.listen(3001, () => {
    console.log("running in port 3001")
})

