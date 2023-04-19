import express from 'express';

const app=express();


app.get('/',(req,res)=>{
    res.send("pravalika")
})

app.get('/Aboutme',(req,res)=>{
    res.json({
        name:"Pravalika",
        fathername:"venkatrao"
        })
})

app.listen(7000,()=>console.log("my server is ruuning onport 7000"))