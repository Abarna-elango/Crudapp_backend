import express from "express";
const app = express();
const PORT = 2000;
app.listen(PORT,()=>{
    console.log(`server running on the port http:\\localhost:${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("server started!@")
})