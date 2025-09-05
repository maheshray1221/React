import { useState } from "react"
import "./ShowComment.css"
import CommentBox from "./CommentBox";
export default function ShowComment(){
    let [comment,setComment] = useState([{
        username : "Mahesh121",
        remark : "Amazing Movie",
        rating : 4
    }]);
    let addNewComment = (comment)=>{
        setComment((currComment)=> [...currComment,comment]);
    }
    return(
        <>
        <h3>All Commets</h3>
        <br />
        {comment.map((comment,idx)=>(
            <div className="comment" key={idx}>
            <p>Remarks : {comment.remark}</p>
            <p>Rating : {comment.rating}</p>
            <p>Username : {comment.username}</p>
        </div>
        ))}
       
        <br />
      <hr />
      <CommentBox addNewComment={addNewComment}/>
        </>
    )
}