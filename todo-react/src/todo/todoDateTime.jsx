import {useEffect} from 'react'
import {useState} from 'react'



export const TodoDateTime=()=>{
     

    const [dateTime,setDateTime]=useState("");

    //date and time
  const getDateTime=()=>{
    const now=new Date();
    const formatDate=now.toLocaleDateString();
    const formattime=now.toLocaleTimeString();
    setDateTime(`${formatDate}-${formattime}`);
  }
  
  useEffect(()=>{
    const interval = setInterval(()=>{
        getDateTime();
      },1000);

      return ()=>clearInterval(interval);
  },[])
    

  return (
    <h2 className='date-time'>
    {dateTime}
    </h2>
  )
}