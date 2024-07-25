require('dotenv').config();
const express=require('express');
const app=express();
const ApiRoutes=require('./routes/index')

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is up and running ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Hello from sahebao");
})

console.log("this is working fine");

app.use('/api',ApiRoutes)

