import React, { useEffect, useState } from 'react'
import Timer from './Timer'

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
        <div>
            <h3>Quotes API</h3>
            <Timer getQuote={getQuote}/>
            {error ? <p>Error getting the quote</p> : null}
            <h4>{quote.content}</h4>
            <p>-{quote.author}</p>
        </div>
    )
}

export default Quotes
