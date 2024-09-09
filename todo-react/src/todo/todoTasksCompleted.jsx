import { MdDeleteOutline } from "react-icons/md";
import { MdRestore } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoCompletedTask=({id,data,onHandleDeleteTodo,onHandleRestoreTask})=>{
    return (
        <li className="list-items completed" key={id}>
            <span className="list-data">{data}</span>   
            <button className="complete-button" onClick={()=>onHandleRestoreTask(data)}>
            <MdRestore />
            </button>        
            <button className="delete-button" onClick={()=>onHandleDeleteTodo(data)}>
            <MdDeleteOutline />
            </button>
       </li>
    )
}