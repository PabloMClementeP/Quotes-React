import React, { useState } from 'react'

const Form = ({ setSeconds }) => {

    const [time, setTime] = useState();
    const [error, setError] = useState(false);


    const handleChange = e =>{
        setTime(parseInt(e.target.value));
        setError(false);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        //validate
        if(time < 30 || time > 200){
            setError(true);
            return;
        }

        setError(false);

        //change seconds in component Timer
        setSeconds(time);

    };


    return (
        <form onSubmit={handleSubmit}>
            {error ? <p>New time need to set up 30 and down 200</p> : null}
            <label htmlFor="seconds">New time between 30 and 200 seconds: </label>
            <input 
                type="number" 
                name="seconds"
                id="seconds"
                placeholder="Insert new time"
                value={time}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Change time"
            />
        </form>
    )
}

export default Form
