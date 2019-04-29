import express from "express";
const app = express();


app.get("/",(req,res,next)=>{
    res.send("Tour Booking API.....");
});
app.get("/tours",(req,res,next)=>{
    res.send("get List of tours API.....");
});
app.post("/tours",(req,res,next)=>{
    res.send("Add new Tour API.....!");
});
app.listen(process.env.PORT || 4038,()=>{console.log("Server Started.......")});