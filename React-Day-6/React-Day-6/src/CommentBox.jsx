import { useState } from "react";
export default function CommentBox({addNewComment}){
    let [formData,setFormData] = useState({
        username : "",
        remark : "",
        rating : 5
    });
    let handleFormChanges = (event)=>{
        setFormData((currValue)=>{
            return{...currValue,[event.target.name] : event.target.value};
        });
    }
    let handleSubmit = (event)=>{
        addNewComment(formData);
        event.preventDefault();
        console.log(formData);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username :</label>
                <input id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username} 
                onChange={handleFormChanges} />
                <br />
                <br />
                <label htmlFor="remark">Remark :</label>
                <textarea id="remark"
                type="text"
                name="remark"
                placeholder="Remark"
                value={formData.remark} 
                onChange={handleFormChanges}></textarea>
                <br />
                <br />
                <label htmlFor="rating">Rating :</label>
                <input id="rating"
                type="number"
                name="rating"
                placeholder="rating"
                max={5}
                value={formData.rating} 
                onChange={handleFormChanges}/>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}