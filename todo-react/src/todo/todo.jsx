import {useState} from 'react'
import { TodoForm } from './todoForm';
import {TodoListDisplay} from './todoListDisplay';
import { TodoDateTime } from './todoDateTime';
import { TodoCompletedTask } from './todoTasksCompleted';


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
        alert("Empty task Not accepted");
        return;
    }

    if(tasks.includes(inputValue))
    {
        alert("already task is in list");
         return;
    }
    setTasks((previousTaskData)=>[...previousTaskData,inputValue]);
  }
  
  // to add the pending tasks into localstorage
  localStorage.setItem("pendingTasks",JSON.stringify(tasks));

  

  
 //task deleting in pending tasks
  const handleToDeleteTask = (value) => {
    const updateTask=tasks.filter((curtask)=> curtask!==value )
    setTasks(updateTask)

  }

  //task completed in pending task
  const handleToCompleteTask=(value)=>{
    const updateTask=tasks.filter((curtask)=> curtask!==value )
    setTasks(updateTask)
    setCompletedTasks((previousCompletedTasks)=>[...previousCompletedTasks,value]);

    
  }

  // to add the completed tasks into localstorage
  localStorage.setItem("completedTask",JSON.stringify(completedTasks));
  
 
  // task to delete completed tasks in completed tasks
  const handleToDeleteCompleteTask=(value)=>{
    const updateDelComTasks=completedTasks.filter((curtask)=> curtask!==value )
    setCompletedTasks(updateDelComTasks)
  }

  // task restore from completed tasks to pending tasks
   const handleToRestoreTask=(value)=>{
    const updateDelComTasks=completedTasks.filter((curtask)=> curtask!==value )
    setCompletedTasks(updateDelComTasks)
    setTasks((previoustasks)=>[...previoustasks,value]);

   }

  
    return (
        
        <section className="todo-conatiner">
            
            <header>
                <h1>TODO LIST</h1>
                <TodoDateTime />
            </header>
            
             <h3>Enter Tasks</h3>
             <TodoForm onAddTodo={handleFormSubmition}/>
              <h3>pending tasks</h3>
            <section>
                <ul>
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
                <button onClick={()=>setTasks([])}> 
                     clear All    
                </button>
            </section>
            
            <section>
            <section>
                <h3>completed tasks</h3>
                <ul>
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
                <button onClick={()=>setCompletedTasks([])}> 
                     clear All    
                </button>
            </section>
            </section>
        </section>
        
    )
    
}
