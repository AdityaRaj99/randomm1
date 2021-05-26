const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

//database
let todos=[{
    id:1,
    text:"I need to learn nodeJS",
    status:false,
    timestamp: new Date()
},{
    id:2,
    text:"I need to learn nodeJS",
    status:true,
    timestamp: new Date()
}];

//Read all
app.get("/todos",(req,res)=>{
    res.send(todos);
})

//Read-1
app.get("/todo/:todoID/",(req,res)=>{
    res.send(todos[req.params.todoID]);
})

//delete
app.delete("/todo/:todoID/",(req,res)=>{
    console.log(req.params.todoID);
     todos = todos.filter(e => e.id!== parseInt(req.params.todoID));//id to delete from todo
    console.log(todos);
    res.sendStatus(200);
})

//update
app.put("/todo/:todoID",(req,res)=>{
    console.log(req.params.todoID);
    todos = todos.map(e=>{
        if(e.id=== parseInt(req.params.todoID)){
            e.text=req.body.text;
            e.timestamp=new Date();
            e.status=req.body.status;
            return e;
        }
        else{
            return e;
        }
    });
   console.log(todos);
   res.sendStatus(200);
})

//create
app.post("/todo",(req,res)=>{
   const newTodo = req.body;
    newTodo.timestamp=new Date();
    newTodo.id=todos[todos.length-1].id + 1;
    todos.push(newTodo);
    console.log(todos);
    res.sendStatus(201).send(todos);
})
// const students={
//     "student1":{
//         "name": "Aman",
//         "age":22,
//     },
//     "student2":{
//         "name": "Rohit",
//         "age":22,
//     }
// }

// app.get("/student1",(req,res)=>{
//     res.send(students.student1)
// })

// app.get("/student2",(req,res)=>{
//     res.send(students.student2);
// })

// app.get("/Hello",(req,res)=>{
//     res.status(404).send("Hello World!");
// })

app.listen(8000, ()=>{
    console.log("the server is running");
})