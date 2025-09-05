import { useState } from "react"
export function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData,[event.target.name] : event.target.value };
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
        console.log(formData);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name : </label>
            <input id="fullname" type="text" placeholder="Enter fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
            <br /><br />
            <label htmlFor="userName">UserName : </label>
            <input id="userName" type="text" placeholder="Enter userName" name="userName" value={formData.userName} onChange={handleInputChange} />
            <br />
            <br />
            <label htmlFor="password">Password : </label>
            <input id="password" type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleInputChange} />
            <br />
            <button>Submit</button>
        </form>
    )
}