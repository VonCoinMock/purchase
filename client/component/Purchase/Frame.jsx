import React from 'react';
import styled from "styled-components";

// const TempFrame = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 460px;
//     height: 880px;
// `;

const Container = styled.div`
    border: 1px solid #22cac9;
    background-color: #24205a;
    height: 35%;
    width: 99.2%;
    margin-bottom: 1.89vh;
`;

const TopResult = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #22cac9;
`;

const BottomBid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
`;


const Result = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 80%;
    font-size: 2vw;
    word-wrap: normal;
    color: white;
    letter-spacing: -0.09em;
    line-height: 120%;
    padding-left: 6vw;
    padding-right: 6vw;
`;

const Bid = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 2vw;
    max-height: 1vw;
    padding-left: 1.75vw;
`;

const BidAmount = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: #22cac9;
    font-size: 5vw;
    padding-right: 1.75vw;
`;

const Separator = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 5vw;
`;

class Frame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Container>
              <TopResult>
                <Result>PURCHASE FAILURE</Result>
              </TopResult>
              <BottomBid>
                  <Bid>BID</Bid><Separator>:</Separator><BidAmount>40</BidAmount>
              </BottomBid>
        </Container>);
    }
}

export default Frame;