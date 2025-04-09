import React,{useState} from'react';
const Todo = () => {
    const[State,SetState]= useState(30)
    return(
    <div style={{border: "3px solid black",
        margin: "300px auto",
        width: "500px",
        height: "150px",
        textAlign:"center",
        backgroundColor:"aqua"}}>Todo <h1>{State}</h1>
    <button  onClick={()=>SetState(State+1)}>increment</button>
    <button onClick={()=>SetState(State-2)}>decrement</button>
    <button onClick={()=>SetState(State*0)}>reset</button></div>
    );
};
export default Todo;