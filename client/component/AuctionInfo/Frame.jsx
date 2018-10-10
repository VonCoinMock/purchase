import React from 'react';
import styled from 'styled-components';

// const TempFrame = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 460px;
//     height: 880px;
// `;

const Container = styled.div`
    overflow: hidden;
    position: relative;
    border: 1px solid #22cac9;
    background-color: #24205a;
    height: 45%;
    width: auto;
    margin-top: 0.5vh;
`;

const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 100%;
    font-size: 1em;
    color: white;
    letter-spacing: -0.09em;
    margin-top: 1vh;
`;

const Description  = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 1em;
    overflow-y: scroll;
    margin-right: 3%;
    margin-left: 10%;
    z-index: 100;
    height: 58%;
    &::-webkit-scrollbar {
        width: 10px;
        
    }
    /* Track */
    &::-webkit-scrollbar-track {
        background: none;
        border-radius: 10px;
    }
     
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: none; 
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: purple; 
        border-radius: 10px;
    }
`;

class Frame extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (<Container>
                <Title>OVERALL AUCTION INFO</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Description>
            </Container>)
    }
}

export default Frame;