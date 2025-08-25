function greet(e) {
    console.log("Hello",e);
}
function doubleGreet() {
    console.log("Hello guys");
}
function handleFormSubmit(evnt){
    evnt.preventDefault();
    console.log("form was submited..");
}
export  function Buttons() {
    return (
        <>
        <button onClick={greet} >Click Me</button>
        <button onDoubleClick={doubleGreet} >DoubleClick Me</button>
        <p onMouseOver={greet}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iusto eligendi iure nam. Id quos nostrum earum velit assumenda vel?</p>
        </>
    );
};
export  function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}
