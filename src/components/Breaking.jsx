import React, { useEffect, useState } from 'react'
import Timer from './Timer'


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
        <div>
            <h3>Breaking Bad Quote</h3>
            <Timer getQuote={getQuote}/>
            {error ? <p>Error getting the quote</p> : null}
            <h4>{quote.quote}</h4>
            <p>-{quote.author}</p>
        </div>
    )
}

export default Breaking
