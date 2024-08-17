import { LuCheckCircle } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
//import "bootstrap/dist/css/bootstrap.min.css";

 export const TodoListDisplay=({id,data,onHandleDeleteTodo,onHandleCompletedTask})=>{
    return (
        <li key={id}> 
            <span>{data}</span>
            <button className="complete-button" onClick={()=>onHandleCompletedTask(data)}>
            <LuCheckCircle />
            </button>
            <button className="delete-button" onClick={()=>onHandleDeleteTodo(data)}>
            <MdDeleteOutline />
            </button>
       </li>
    )
}