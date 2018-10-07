import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    border: 1px solid #22cac9;
    background-color: #24205a;
    height: auto;
    width: 99.2%;
    text-align: center;
    margin-bottom: 1vw;
    padding-top: 2.2vw;
    padding-bottom: 2.2vw;
    margin-top: .5vw;
`;

const Button = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5vw;
  color: white;
  padding-top: 2vw;
  text-decoration: none;
`;



class Frame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Container>
            <Button href='#'>WATCH</Button>
        </Container>)
    }
}

export default Frame;