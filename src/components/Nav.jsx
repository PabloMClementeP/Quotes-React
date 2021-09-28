import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavStyle = styled.nav`
    font-weight: bold;
    color: #FFF;
    text-align: center;
`;

const ButtonStyled = styled.button`
    outline: none;
    border: 0;
    font-size: 16px;
    line-height: 1;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 10px;
    background-color: #00838F;
    color: #FFF;
    width: 210px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #22b2c5;
        cursor: pointer;
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
