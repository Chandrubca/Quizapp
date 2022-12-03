import { useEffect, useState } from 'react';
import "../components/Timer.css"

export const Timer=()=>{
      
    const [seconds,setSeconds]=useState(0)
    const [minutes,setminutes]=useState(0)
    var timer;
    useEffect(()=>{

        timer=setInterval(() => {
        setSeconds(seconds+1)

        if(seconds===59){
            setminutes(minutes+1)
            setSeconds(0)
        }
    },1000)
return()=> clearInterval(timer); 
});

return(
<div className='timer'>
    <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
    </div>
)
}