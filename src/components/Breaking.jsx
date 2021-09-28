import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import styled from '@emotion/styled';
import breakpoints from '../commons/breakpoints'


const TitleAPI = styled.h3`
    text-align: center;
    font-size: 1rem;
    color: #FFF;
    
    @media screen and  (${breakpoints.device.sm}){
        font-size: 1.8rem;
    }
  
    @media screen and (${breakpoints.device.lg}){
        font-size: 2.2rem;
        padding: 10px 0;
    }
`;

const BackgroundDiv = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 25vh;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 5px 8px 32px 5px rgba(41, 125, 135, 0.27);
    border: 1px solid rgba(255, 255, 255, 0.18);
    
    @media screen and  (${breakpoints.device.sm}){
        width: 75%;
        height: 30vh;
    }
  
    @media screen and (${breakpoints.device.lg}){
        width: 65%;
        height: 35vh;
    }
`;

const QuoteText = styled.h3`
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.1;
    color: hsl(210, 29%, 13%);;
    margin-top: 50px;
        
    @media screen and  (${breakpoints.device.sm}){
        font-size: 1.8rem;
    }
  
    @media screen and (${breakpoints.device.lg}){
        font-size: 2.2rem;
        margin-top: 15px;
    }
`;

const QuoteAuth = styled.p`
    text-align: end;
    font-size: 1rem;
    margin-right: 30px;
    margin-top: 35px;
    
    @media screen and  (${breakpoints.device.sm}){
        font-size: 1.2rem;
    }
  
    @media screen and (${breakpoints.device.lg}){
        font-size: 1.5rem;
    }
`;


const Breaking = () => {

    const [quote, setQuote] = useState({});
    const [error, setError] = useState(false);

    
    const getQuote = async() =>{
        try {
            setError(false);
            let res = await fetch("https://www.breakingbadapi.com/api/quote/random"),
                json = await res.json();
            if(!res.ok) throw {
                status: res.status,
                statusText: res.statusText
            }
            
            setQuote(json[0]);

        } catch (err) {
            setError(true);
        } finally{

        }
    }


    useEffect(() =>{
        getQuote();
    },[]);

    return (
        <>
            <TitleAPI>Quote from https://www.breakingbadapi.com</TitleAPI>
            <Timer getQuote={getQuote}/>
            {error ? <p>Error getting the quote</p> : null}
            <BackgroundDiv>
                <QuoteText>{quote.quote}</QuoteText>
                <QuoteAuth>-{quote.author}</QuoteAuth>
            </BackgroundDiv>
        </>
    )
}

export default Breaking
