import { useState, useEffect } from "react"
export function Jokers(){
    let [joke,setJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";
    let newJoke =async ()=>{
        let respose = await fetch(url);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    useEffect(()=>{
        async function getFirstJoke(){
            let respose = await fetch(url);
            let jsonResponse = await respose.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },[]);
    return(
        <div>
            <h2>Jokes</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={newJoke}>New</button>
        </div>
    )
}