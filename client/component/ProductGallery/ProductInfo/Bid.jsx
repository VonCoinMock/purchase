import React, {Component} from 'react';
import styled from "styled-components";

const baseText = ({className, children}) => (<p className={className}>CURRENT BID</p>)

const BaseText = styled(baseText)`
  background-color: #24205a;
  font-size: 1.5em;
  position: absolute;
  bottom: -70px;
  height: 100px;
  width: 500px;
  padding-top: 21px
`
const symbol = ({className}) => (<p className={className}>&#9661;</p>)
const Symbol = styled(symbol)`
  position: absolute;
  font-size: 3.5em;
  bottom: -45px;
  left: 176px;
  font-stretch: ultra-condensed;
  font-weight: bold;
`
const currentBid = ({className, bid}) => (<p className={className}>{bid}</p>)
const CurrentBid = styled(currentBid)`
  position: absolute;
  font-size: 3em;
  font-weight: bold;
  bottom: -27px;
  left: 241px;
  color: #4BD9A9

`
const bidDiv = ({className, title, bid}) => (<div className={className}>
  <BaseText></BaseText>
  <Symbol></Symbol>
  <CurrentBid bid={bid || Math.floor(Math.random() * 100)}></CurrentBid>
</div>)

const Bid = styled(bidDiv)`

`
export default Bid;
