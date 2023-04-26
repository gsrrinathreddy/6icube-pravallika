import { useState } from "react"
import axios from "axios";
export default function Button (){
    let[id,SetId]=useState();
    let[name,SetName]=useState();
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then (res=>{
        SetId(res.data[0].id);
        SetName(res.data[2].name);
        console.log(res);
    })
    return(
        <>
        {id}
        <br/>
        {name}
        </>
    )
}