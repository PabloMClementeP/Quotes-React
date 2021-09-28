import React from 'react'
import styled from '@emotion/styled';

const FooterText = styled.p`
    text-align: center;
    color: #ecf0f1;
    width: 80%;
    height: 50px;
    bottom: 0px;
    position: fixed;
`;

const Footer = () => {
    return (
        <>
            <FooterText>Pablo Clemente | pclementep@gmail.com | 2021</FooterText>
        </>
    )
}

export default Footer
