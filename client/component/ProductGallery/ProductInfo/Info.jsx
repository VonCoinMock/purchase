import React, {Component} from 'react';
import styled from "styled-components";
import Bid from './Bid.jsx';
import Body from './Body.jsx';
import Title from './Title.jsx'

const container = ({className, children}) => (
    <div className={className}>{children}</div>
)

const Container = styled(container)`
  margin: 15px;
  margin-bottom: 20px;
  color: white;
  font-family: Josefin Sans;
`

class ProductInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      body: null,
      bid: null
    }
  }
  render(){
    return (
      <Container>
        <Title title={this.state.title}></Title>
        <Body title={this.state.body}></Body>
        <Bid bid={this.state.bid}></Bid>
      </Container>
    )
  }
}
export default ProductInfo;
