import React, { useState } from 'react'
import styled from '@emotion/styled';

const DivStyled = styled.div`
    display: flex;
    margin-bottom: .5rem;
    align-items: center;
    flex-direction: column;
`;

const LabelStyled = styled.label`
    flex: 0 0 30px;
    color: #FFF;
`;

const InputTextStyled = styled.input`
    font-size: 16px;
    width: 200px;
    padding: .5rem;
    border: .2px solid #888;
    border-radius: 5px;
`;

const ButtonStyled = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 200px;
    padding: 0.5rem 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #22b2c5;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color:hsl(15, 100%, 38%);
    color: #FFF;
    font-size: 1.3rem;
    padding: 0.7rem;
    width: 60%;
    text-align: center;
    margin: 0 auto;
`;


const Form = ({ setTimeNext }) => {

    const [time, setTime] = useState();
    const [error, setError] = useState(false);
    const [inputNumber, setInputNumber] = useState();

    const handleChange = e =>{
        setTime(parseInt(e.target.value));
        setInputNumber(e.target.value);
        setError(false);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        //validate
        if(time < 30 || time > 200){
            setError(true);
            setInputNumber('');
            return;
        }

        setError(false);
        setInputNumber('');
        //change seconds in component Timer
        setTimeNext(time);
    };


    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error>New time need to set up 30 and down 200</Error> : null}
            <DivStyled>
                <LabelStyled htmlFor="seconds">New time between 30 and 200 seconds: </LabelStyled>
                <InputTextStyled 
                    type="number" 
                    name="seconds"
                    id="seconds"
                    placeholder="Insert new time"
                    value={inputNumber}
                    onChange={handleChange}
                />
            </DivStyled>
            <DivStyled>
                <ButtonStyled
                    type="submit"
                >change time</ButtonStyled>
            </DivStyled>
        </form>
    )
}

export default Form
