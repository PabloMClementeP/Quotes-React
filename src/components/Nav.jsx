import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import breakpoints from '../commons/breakpoints'


const NavStyle = styled.nav`
    font-weight: bold;
    color: #FFF;
    text-align: center;
`;

const ButtonStyled = styled.button`
    outline: none;
    border: 0;
    font-size: 14px;

    line-height: 1;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: #00838F;
    color: #FFF;
    width: 180px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #22b2c5;
        cursor: pointer;
    }

    @media screen and  (${breakpoints.device.sm}){
        width: 180px;
        padding: 10px 30px;
    }
  
    @media screen and (${breakpoints.device.lg}){
        font-size: 16px;
        width: 210px;
    }
`;

const Nav = () => {
    return (
        <NavStyle>
            <NavLink to="/">
                <ButtonStyled>Home</ButtonStyled>
            </NavLink>
            <NavLink to="/quotes">
                <ButtonStyled>Famous Characters</ButtonStyled>
            </NavLink>
            <NavLink to="/breaking">
                <ButtonStyled>Breaking Bad</ButtonStyled>
            </NavLink>
        </NavStyle>
    )
}

export default Nav
