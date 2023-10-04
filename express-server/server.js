const express =require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8000;
let database =[
    {
        id: 1,
        tittle: 'fuel increased',
        body: 'Fuel  increased and the prices will be followed later'


    },
];
app.get("/", (req, res) =>{
    res.send(database);
    
});
app.post("/", (req, res) =>{
    console.log(req.body);
    database.push(req.body);
    
    res.sendStatus(201).json({
        message:"We received responses",
    });
});
app.put("/", (req, res) =>{
    res.send("Put request");
});
app.patch("/", (req, res) =>{
    res.send("Patch request");
});
app.delete("/", (req, res) =>{
    res.send("Delete the method");
});
app.listen(port, ()=>{
    console.log(`the server running at the port http://localhost:${port}`);
});