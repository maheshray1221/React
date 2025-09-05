import { useState , useEffect } from "react"
export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
    let incressCountx = ()=>{
        setCountx((prevCount)=>prevCount + 1);
    }
    let incressCounty = ()=>{
        setCounty((prevCount)=>prevCount + 1);
    }
    useEffect(function reRenderEffect(){
        console.log("side effect");
    },[]);
    return(
        <>
        <h1>Counter {countx} </h1>
        <button onClick={incressCountx} >Incress</button>
        <h1>Counter {county} </h1>
        <button onClick={incressCounty} >Incress</button>
        </>
    )
}