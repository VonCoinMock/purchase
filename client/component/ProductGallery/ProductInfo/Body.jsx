import React, {Component} from 'react';
import styled from "styled-components";
import faker from "faker";

const text = ({className, children, body}) => (<p className={className}>{body}</p>)
const Text = styled(text)`
  font-size: 2.2em;
`

const bodyDiv = ({className, body}) => (<div className={className}>
  <Text body={body || faker.lorem.paragraph()}></Text>
</div>)

const Body = styled(bodyDiv)`

`
export default Body;
