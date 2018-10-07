import React from 'react';
import styled from 'styled-components';

// const TempFrame = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 460px;
//     height: 880px;
// `;

const Container = styled.div`
    border: 1px solid #22cac9;
    background-color: #24205a;
    height: 18vw;
    width: auto;
    margin-top: .5vw;
    margin-bottom: .5vw;
`;

const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 100%;
    font-size: 1.75vw;
    color: white;
    letter-spacing: -0.09em;
    margin-top: 10%;
`;

const Description  = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 1.25vw;
    max-height: 90%;
    max-width: 80%;
    margin-right: 3%;
    margin-left: 10%;
    line-height: 160%;
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