import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    display: inline-block;
    border: 1px solid #22cac9;
    background-color: #24205a;
    width: 99.2%;
    text-align: center;
    padding-top: 3.2vh;
    padding-bottom: 3.2vh;
    margin-top: 1vh;
`;

const Button = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1em;
  color: white;
  padding-top: 2vh;
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