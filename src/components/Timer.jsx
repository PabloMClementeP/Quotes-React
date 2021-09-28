import React, { useEffect, useState } from 'react'
import Form from './Form';
import styled from '@emotion/styled';

const DivContainer = styled.div`
    text-align: center;
    margin-bottom: 25px;
`;

const TimerStyled = styled.h3`
    color: #ecf0f1;
    font-size: 2.3rem;
`;

const SpanStyled = styled.span`
    color: #05838f;
    font-size: 3rem;
`;

const Timer = ({ getQuote }) => {

    const [timeNext, setTimeNext] = useState(60);
    const [seconds, setSeconds] = useState(timeNext);

    useEffect(()=>{
        
        let temporizador = setInterval(()=>{
            setSeconds(seconds-1);
        }, 1000);
        
        if(seconds <= 0){
            setSeconds(timeNext);
            getQuote();
        }

        return()=>{
            clearInterval(temporizador);
        }
    },[seconds]);

    useEffect(() =>{
        setSeconds(timeNext);
    },[timeNext]);
    

    return (
        <DivContainer>
            <Form setTimeNext={setTimeNext} />
            <TimerStyled>Next quote in <SpanStyled> {("00" + seconds).slice(-3)} </SpanStyled> seconds</TimerStyled>
        </DivContainer>
    )
}

export default Timer
