import { useState } from "react";
export default function Like() {
let [color,setColor] = useState(false);
let [click,setClick] = useState(0);
let isLiked = ()=> {
    setColor(!color);
    setClick(click+1);
    console.log(click);
    
}
let styles = {color:"red"};
    return (
        <>
            <p onClick={isLiked}>
                {color ? (<i className="fa-solid fa-heart" style={styles}></i>) 
                : (<i className="fa-regular fa-heart" ></i>)}
            </p>
        </>
    );
}