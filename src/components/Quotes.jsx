import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import styled from '@emotion/styled';


const TitleAPI = styled.h3`
    text-align: center;
    font-size: 2.2rem;
    color: #FFF;
    padding: 10px 0;
`;

const BackgroundDiv = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 40vh;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 5px 8px 32px 5px rgba(41, 125, 135, 0.27);
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

const QuoteText = styled.h3`
    text-align: center;
    font-size: 2.8rem;
    line-height: 1.3;
    color: hsl(210, 29%, 13%);;
    margin-top: 15px;
`;

const QuoteAuth = styled.p`
    text-align: end;
    font-size: 1.5rem;
    margin-right: 30px;
    margin-top: 35px;
`;

const Quotes = () => {

    const [quote, setQuote] = useState({});
    const [error, setError] = useState(false);


    const getQuote = ()=>{
        setError(false);
        fetch("https://api.quotable.io/random")
        .then((res) =>{ return res.ok ? res.json() : Promise.reject(res); })
        .then(json =>{
            setQuote(json);
        }).catch(err=>{
            setError(true);
        });
    }

    useEffect(() =>{
        getQuote();
    },[]);

    return (
        <>
            <TitleAPI>Quote from https://api.quotable.io</TitleAPI>
            <Timer getQuote={getQuote}/>
            {error ? <p>Error getting the quote</p> : null}
            <BackgroundDiv>
                <QuoteText>{quote.content}</QuoteText>
                <QuoteAuth>-{quote.author}</QuoteAuth>
            </BackgroundDiv>
        </>
    )
}

export default Quotes
