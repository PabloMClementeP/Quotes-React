import React from 'react';
import styled from '@emotion/styled';
import breakpoints from '../commons/breakpoints'

const SubTitleStyled = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
    color: #016169;
    margin: 50px 0;

    @media only screen and  (${breakpoints.device.sm}){
        font-size: 3.5rem;
    }
  
    @media only screen and (${breakpoints.device.lg}){
        font-size: 5rem;
    }

`;

const Home = () => {
    return (
        <SubTitleStyled>Select the quote you want to see</SubTitleStyled>
    )
}

export default Home
