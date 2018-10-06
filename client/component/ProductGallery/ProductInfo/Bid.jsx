import React, {Component} from 'react';
import styled from "styled-components";

const baseText = ({className, children}) => (
  <p className={className}>CURRENT BID</p>
)

const BaseText = styled(baseText)`
  font-size: 0.9em;
  position: absolute;
  bottom: 10px;
`
const symbol = ({className}) => (
  <p className={className}>&#9661;</p>
)
const Symbol = styled(symbol)`
  position: absolute;
  font-size: 3.5em;
  bottom: -60px;
  left: 110px;
  font-stretch: ultra-condensed;
  font-weight: bold;
`
const currentBid = ({className, bid}) => (
  <p className={className}>{bid}</p>
)
const CurrentBid = styled(currentBid)`
  position: absolute;
  font-size: 2.5em;
  bottom: -31px;
  left: 164px;
  color: #4BD9A9

`
const bidDiv = ({className, title, bid}) => (
  <div className={className}>
    <BaseText></BaseText>
    <Symbol></Symbol>
    <CurrentBid bid={bid || Math.floor(Math.random() * 100)}></CurrentBid>
  </div>
)

const Bid = styled(bidDiv)`

`
export default Bid;
