import React from 'react'
import styled from '@emotion/styled';
import breakpoints from '../commons/breakpoints'
import error from '../error.webp'

const Container = styled.div`
    color: #ecf0f1;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media only screen and (${breakpoints.device.sm}){
        font-size: 6rem;
    }
  
    @media only screen and (${breakpoints.device.lg}){
        flex-direction: row;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
    }
`;

const H2Styled = styled.h2`
    font-size: 4rem;
    
    @media only screen and (${breakpoints.device.sm}){
        font-size: 6rem;
    }
  
    @media only screen and (${breakpoints.device.lg}){
        font-size: 8rem;
    }
`;

const ImgStyled = styled.img`
    width: 60%;
    height: auto;
    margin-top: 30px;
`;

const TextStyled = styled.p`
    font-size: 1.5rem;

    @media only screen and (${breakpoints.device.sm}){
        font-size: 2.3rem;
    }
  
    @media only screen and (${breakpoints.device.lg}){
        font-size: 3rem;
    }
`;

const Error404 = () => {
    return (
        <Container>
            <div>
                <H2Styled>Error 404</H2Styled>
                <TextStyled>Page not found</TextStyled>
            </div>
            <div>
                <ImgStyled src={error} alt="error image" />
            </div>
        </Container>
    )
}

export default Error404
