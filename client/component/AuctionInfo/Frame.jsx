import React from 'react';
import styled from 'styled-components';

const TempFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 880px;
`;

const Container = styled.div`
    border: 2px solid #22cac9;
    background-color: #24205a;
    height: 40%;
    width: 99.2%;
`;

const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 100%;
    font-size: 37px;
    color: white;
    letter-spacing: -0.09em;
    margin-top: 10%;
`;

const Description  = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 26px;
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
        return (<TempFrame>
            <Container>
                <Title>OVERALL AUCTION INFO</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Description>
            </Container>
        </TempFrame>)
    }
}

export default Frame;