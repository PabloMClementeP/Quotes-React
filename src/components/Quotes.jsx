import React, { useEffect, useState } from 'react'
import Timer from './Timer'

const Quotes = () => {

    const [quote, setQuote] = useState({
        text:"",
        auth:""
    });

    // const [getingQuote, setGetingQuote] = useState(false);

    const getQuote = ()=>{
        fetch("https://api.quotable.io/random")
        .then((res) =>{ return res.ok ? res.json() : Promise.reject(res); })
        .then(json =>{
            // let quote = json.content,
            //     author = json.author;
            setQuote({
                text: json.content,
                auth: json.author
            })
            // $tip.innerHTML = `<h3>${quote}  <span>${author}</span></h3>`
        }).catch(err=>{
            let message = err.statusText || "Error getting the quote";
            // $tip.innerHTML = `<h3>${err.status}: ${message}</h3>`
        }).finally();
    }

    useEffect(() =>{
        getQuote();
    },[]);

    return (
        <div>
            <h3>Quotes API</h3>
            <Timer getQuote={getQuote}/>
            <h4>{quote.text}</h4>
            <p>{quote.auth}</p>
        </div>
    )
}

export default Quotes
