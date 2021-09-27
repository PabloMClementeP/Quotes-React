import React from 'react'
import Timer from './Timer'

const Breaking = () => {

    const getQuote = ()=>{
        console.log("obteniendo la cita de Braking Bad")
    }

    return (
        <div>
            <h3>Breaking Bad Quote</h3>
            <Timer getQuote={getQuote}/>
        </div>
    )
}

export default Breaking
