import { useState } from "react";
export function Counter(){
let [count, setCount] = useState(0);
let incressCount = ()=>{
    setCount(count+1);
}

    return(
        <>
            <h4>count = {count}</h4>
            <button onClick={incressCount}>Incress Count </button>
        </>
    );
}