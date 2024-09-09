import {useEffect} from 'react'
import {useState} from 'react'
import "./todoDateTime.css";


export const TodoDateTime=()=>{
     

    const [date,setDate]=useState("");
    const [hours,setHour]=useState("");
    const [minutes,setMinutes]=useState("");
    const [sec,setSec]=useState("");
    const [am,setAm]=useState("AM");


    //date and time
  const getDateTime=()=>{
    const now=new Date();
    const formatDate=now.toLocaleDateString();
    const formatHour=now.getHours();
    const formatMin=now.getMinutes();
    const formatSec=now.getSeconds();
    setDate(formatDate);
    setHour(formatHour);
    setMinutes(formatMin);
    setSec(formatSec);
  }
  
  useEffect(()=>{
    const interval = setInterval(()=>{
        getDateTime();
      },1000);

      return ()=>clearInterval(interval);
  },[])
    

  return (
    <div className='date-time'>
       <div className="date">
           {date}
       </div>
       <div className="time">
            <span className='hours'>
                {hours %12 || 12}
            </span>
             <span className='colon'>:</span>
            <span className='minutes'>
                {minutes}
            </span>
            <span className='colon'>:</span>
            <span className='sec'>
                {sec}
            </span>
            <sup><span className='Am'>
                {hours<=12 ? <p>AM</p>:<p>PM</p>}
            </span> </sup>
       </div>
    </div>
  )
}