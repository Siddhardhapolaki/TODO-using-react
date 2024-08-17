import { MdDeleteOutline } from "react-icons/md";
import { MdRestore } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoCompletedTask=({id,data,onHandleDeleteTodo,onHandleRestoreTask})=>{
    return (
        <li key={id}>
            <span>{data}</span>   
            <button className="check-btn" onClick={()=>onHandleRestoreTask(data)}>
            <MdRestore />
            </button>        
            <button className="detete-btn" onClick={()=>onHandleDeleteTodo(data)}>
            <MdDeleteOutline />
            </button>
       </li>
    )
}