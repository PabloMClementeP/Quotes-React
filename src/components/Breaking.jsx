import React, { useEffect, useState } from 'react'
import Timer from './Timer'

const Breaking = () => {

    const [quote, setQuote] = useState({
        text:"",
        auth:""
    });

    
    async function getQuote(){
        try {
            let res = await fetch("https://www.breakingbadapi.com/api/quote/random"),
                json = await res.json();
            if(!res.ok) throw {
                status: res.status,
                statusText: res.statusText
            }
            
            setQuote({
                text: json[0].quote,
                auth: json[0].author
            });
        } catch (err) {
            let message = err.statusText || "Error getting the quote";
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
            <h3>{quote.text}</h3>
            <h2>{quote.auth}</h2>
        </div>
    )
}

export default Breaking
