import {useState} from 'react'
import { TodoForm } from './todoForm';
import {TodoListDisplay} from './todoListDisplay';
import { TodoDateTime } from './todoDateTime';
import { TodoCompletedTask } from './todoTasksCompleted';
import { ToastContainer, toast } from "react-toastify";
import './todo.css';
import 'react-toastify/dist/ReactToastify.css';



export const Todo= () =>{
  const [tasks,setTasks]=useState(()=>{

    const pendingtodos=localStorage.getItem("pendingTasks");

    // for first time there is no data  so parse will return null ,so we need to return []
     if(!pendingtodos) return [];
     
     return JSON.parse(pendingtodos)
  });
  
  const [completedTasks,setCompletedTasks]=useState(()=>{
    

        const completedtodos=localStorage.getItem("completedTask");
    
        // for first time there is no data  so parse will return null ,so we need to return []
         if(!completedtodos) return [];
         
         return JSON.parse(completedtodos)
      });
  
  
      
    const handleFormSubmition=(inputValue)=>{
    
    if(!inputValue) 
    {
        // alert("Empty task Not accepted");
        toast.warning("Empty task Not accepted");
        return;
    }

    if(tasks.includes(inputValue))
    {
        // alert("already task is in list");
        toast.warning("already task is in list");
         return;
    }
    setTasks((previousTaskData)=>[...previousTaskData,inputValue]);
  }
  
  // to add the pending tasks into localstorage
  localStorage.setItem("pendingTasks",JSON.stringify(tasks));

  

  
 //task deleting in pending tasks
  const handleToDeleteTask = (value) => {
    const updateTask=tasks.filter((curtask)=> curtask!==value )
    toast.error("Task Deleted",{autoClose: 1000});

    setTasks(updateTask)

  }

  //task completed in pending task
  const handleToCompleteTask=(value)=>{
    const updateTask=tasks.filter((curtask)=> curtask!==value )
    setTasks(updateTask)
    toast.success("Task Completed",{autoClose: 1000});
   


    setCompletedTasks((previousCompletedTasks)=>[...previousCompletedTasks,value]);


    
  }

  // to add the completed tasks into localstorage
  localStorage.setItem("completedTask",JSON.stringify(completedTasks));
  
 
  // task to delete completed tasks in completed tasks
  const handleToDeleteCompleteTask=(value)=>{
    const updateDelComTasks=completedTasks.filter((curtask)=> curtask!==value )
    toast.error("Task Deleted",{autoClose: 1000});

    setCompletedTasks(updateDelComTasks)
  }

  // task restore from completed tasks to pending tasks
   const handleToRestoreTask=(value)=>{
    const updateDelComTasks=completedTasks.filter((curtask)=> curtask!==value )
    setCompletedTasks(updateDelComTasks)
    toast.info("Task added to pending tasks",{autoClose:1000})
    setTasks((previoustasks)=>[...previoustasks,value]);

   }

  
    return (
        
        <section className="todo-container">
            <ToastContainer/>
            <header className='header-1'>
                <h1 className='heading'>TODO LIST</h1>
                <TodoDateTime />
            </header>
            
             <h3 className='enterTasks'>Enter Tasks</h3>
             <div>
             <TodoForm onAddTodo={handleFormSubmition}/>
             </div>
             <div className='tasks-container'>
             <div className='pending-tasks'>
             {tasks.length > 0? <h3 style={{'display':'flex','columnGap': '25px'}}>pending tasks
                <p>
                    {tasks.length}/{tasks.length+completedTasks.length}
                </p>
             </h3> :null }
            <section>
                <ul className='list-container'>
                    {
                        tasks.map((curTask,index)=>{
                        
                            return(
                            <TodoListDisplay 
                            key={index} // for react internal use
                            id={index}  // to use in child component we need to have ,one for react internal and another for child component use
                            data={curTask}
                            onHandleCompletedTask={handleToCompleteTask}
                            onHandleDeleteTodo={handleToDeleteTask}/>
                            )
                        })
                    
                    }
                    
                </ul>
            </section>
            <section>
            {tasks.length > 0 ? <button onClick={()=>setTasks([])}  className='clear-btn'> 
                     clear All    
                </button>:null}
            </section>
            </div>

            <div className='completed-tasks' >
            <section>
            <section>
                {completedTasks.length >0? <h3 style={{'marginBottom':'25px'}}>completed tasks</h3>:null}
                <ul className='list-container'>
                    {
                        completedTasks.map((curTask,index)=>{
                        
                            return( 
                            <TodoCompletedTask
                            key={index} 
                            data={curTask}
                            onHandleDeleteTodo={handleToDeleteCompleteTask}
                            onHandleRestoreTask={handleToRestoreTask}
                            />
                            )
                        })
                    
                    }
                    
                </ul>
            </section>
            <section>
            {completedTasks.length >0 ? <button onClick={()=>setCompletedTasks([])} className='clear-btn'> 
                     clear All    
                </button>:null}
            </section>
            </section>
            </div>
            </div>
        </section>
        
    )
    
}
