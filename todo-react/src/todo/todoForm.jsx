import { useState } from "react";
import "./todoform.css"


export const TodoForm=({onAddTodo})=>{

    const [inputValue,setInputValue]=useState("");

    const handleInputChange=(value)=>{
        setInputValue(value)
     }

     const handleFormSubmition=(event)=>{
        event.preventDefault();
     
        onAddTodo(inputValue);
        setInputValue("")  // this is for ,after giving input and press enter data is added into array ,but user typed value still seen in input field

     }

    return(
    <section className="form">
    <form onSubmit={handleFormSubmition}>
        <div className="form-data">
        <div>
            <input type="text" className="todo-input" autoComplete="off"
            placeholder='Enter task'
            value={inputValue}
            onChange={(event)=>handleInputChange(event.target.value)}>
           </input>
           
        </div>
        <div>
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </div>
        </div>
    </form>
    
    </section>
    );
}