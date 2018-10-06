import React from 'react';
import styled from "styled-components";

const TempFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 880px;
`;

const Container = styled.div`
    border: 2px solid #22cac9;
    background-color: #24205a;
    height: 42.80%;
    width: 99.2%;
`;

const TopResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 50%;
    border-bottom: 2px solid #22cac9;
`;

const BottomBid = styled.div`
  display: inline-block;
  width: 100%;
  height: 50%;
`;

const BidContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  margin-top: 3%;
`;

const Result = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 80%;
    font-size: 50px;
    color: white;
    letter-spacing: -0.09em;
    line-height: 120%;
`;

const Bid = styled.h1`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 30px;
    max-height: 100%;
    margin-right: 20%;
`;

const BidAmount = styled.h1`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    color: #22cac9;
    font-size: 70px;
    max-height: 100%;
    margin-left: 20%;
`;

const Separator = styled.h1`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    font-size: 70px;
    max-height: 100%;
    margin-top: 7%;
`;

class Frame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <TempFrame>
            <Container>
              <TopResult>
                <Result>PURCHASE FAILURE</Result>
              </TopResult>
              <BottomBid>
                <BidContainer>
                  <Bid>BID</Bid><Separator>:</Separator><BidAmount>40</BidAmount>
                </BidContainer>
              </BottomBid>
            </Container>
          </TempFrame>;
    }
}

export default Frame;