import React, { useState } from 'react'
import Timer from './Timer'

const Quotes = () => {

    // const [getingQuote, setGetingQuote] = useState(false);

    const getQuote = ()=>{
        console.log("obteniendo la cita de Quotes API")
    }

    return (
        <div>
            <h3>Quotes API</h3>
            <Timer getQuote={getQuote}/>
        </div>
    )
}

export default Quotes
