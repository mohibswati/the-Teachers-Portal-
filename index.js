var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost:27017/TeacherPortalDB')
var db=mongoose.connection
db.on('error',()=>console.log("Error in connecting to Database"))
db.once('open',()=>console.log("Connected to database"))

app.post("/c_basics",(req,res)=>{
    var Date=req.body.date
    var Name=req.body.name
    var Attendance=req.body.Attendance

    var data={
        "Date":Date,
        "Name":Name,
        "Attendance":Attendance
    }
    db.collection('CBasics').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('attendance.html')
})
app.post("/class_11",(req,res)=>{
    var Date=req.body.date
    var Name=req.body.name
    var Attendance=req.body.Attendance

    var data={
        "Date":Date,
        "Name":Name,
        "Attendance":Attendance
    }
    db.collection('Class11').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('attendance.html')
})
app.post("/class_12",(req,res)=>{
    var Date=req.body.date
    var Name=req.body.name
    var Attendance=req.body.Attendance

    var data={
        "Date":Date,
        "Name":Name,
        "Attendance":Attendance
    }
    db.collection('Class12').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('attendance.html')
})
app.post("/cbasics",(req,res)=>{
    var Assessmenttype=req.body.AssessmentType
    var Name=req.body.Name
    var TotalMarks= parseInt(req.body.TotalMarks)
    var Marks=parseInt(req.body.Marks)


    var data={
        "Assessment Type":Assessmenttype,
        "Name":Name,
        "Total Marks":TotalMarks,
        "Obtained Marks":Marks
    }
    db.collection('CBasicsMarks').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('exams.html')
})
app.post("/class11",(req,res)=>{
    var Assessmenttype=req.body.AssessmentType
    var Name=req.body.Name
    var TotalMarks= parseInt(req.body.TotalMarks)
    var Marks=parseInt(req.body.Marks)


    var data={
        "Assessment Type":Assessmenttype,
        "Name":Name,
        "Total Marks":TotalMarks,
        "Obtained Marks":Marks
    }
    db.collection('Class11Marks').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('exams.html')
})
app.post("/class12",(req,res)=>{
    var Assessmenttype=req.body.AssessmentType
    var Name=req.body.Name
    var TotalMarks= parseInt(req.body.TotalMarks)
    var Marks=parseInt(req.body.Marks)

    var data={
        "Assessment Type":Assessmenttype,
        "Name":Name,
        "Total Marks":TotalMarks,
        "Obtained Marks":Marks
    }
    db.collection('Class12Marks').insertOne(data,(err,collection)=>{
        if(err){
            throw error;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('exams.html')
})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('attendance.html');
});

// Add route for exams.html
app.get("/exams", (req, res) => {
    return res.redirect('exams.html');
});

// Start the server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
