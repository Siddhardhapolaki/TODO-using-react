import {useState} from 'react'
import { LuCheckCircle } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";


export const Todo= () =>{
  const [inputValue,setInputValue]=useState("");
  const [tasks,setTasks]=useState([]);


  const handleInputChange=(value)=>{
     setInputValue(value)
  }


    const handleFormSubmition=(event)=>{
    event.preventDefault();
     
    if(!inputValue) 
    {
        alert("Empty task Not accepted");
        return;
    }

    if(tasks.includes(inputValue))
    {
        alert("already task is in list");
        setInputValue("")  // this is for ,after giving input and press enter data is added into array ,but user typed value still seen in input field

    }
    setTasks((previousTaskData)=>[...previousTaskData,inputValue]);

    setInputValue("")  // this is for ,after giving input and press enter data is added into array ,but user typed value still seen in input field
  }
  
  
  
    return (
        
        <section className="todo-conatiner">
            <header>
                <h1>TODO LIST</h1>
            </header>
            <section className="form">
                    <form onSubmit={handleFormSubmition}>
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
                    </form>
            </section>
            <section>
                <ul>
                    {
                        tasks.map((curTask,index)=>{
                        
                            return (
                                <li key={index}>
                                    <span>{curTask}</span>
                                    <button className="check-btn">
                                    <LuCheckCircle />
                                    </button>
                                    <button className="delete-btn">
                                    <MdDeleteOutline />
                                    </button>
                               </li>
                            )
                        })
                    
                    }
                </ul>
            </section>
        </section>
        
    )
    
}
