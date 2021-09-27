import React, { useEffect, useState } from 'react'
import Form from './Form';

let secondsTxt;

const Timer = ({ getQuote }) => {

    const [seconds, setSeconds] = useState(20);
    secondsTxt = seconds;

    useEffect(()=>{
        
        let temporizador = setInterval(()=>{
            setSeconds(seconds-1);
        }, 1000);
        
        if(seconds <= 0){
            setSeconds(20);
            secondsTxt = seconds;
            getQuote();
        }
        
        return()=>{
            clearInterval(temporizador);
        }
    },[seconds]);
    

    return (
        <div>
            <Form setSeconds={setSeconds} />
            <h3>Next quote in <span> {("00" + secondsTxt).slice(-3)} </span> seconds</h3>
        </div>
    )
}

export default Timer
