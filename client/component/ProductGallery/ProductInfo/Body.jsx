import React, {Component} from 'react';
import styled from "styled-components";
import faker from "faker";
import $ from 'jquery';

const text = ({className, children}) => (<p className={className}>{children}</p>)
const Text = styled(text)`
  font-size: 4vh;
`

const bodyDiv = ({className, body}) => (<div className={className}>
  <Text>{$.trim(faker.lorem.paragraph())}</Text>
</div>)

const Body = styled(bodyDiv)`
  position: absolute;
  height: 24vh;
  top: 16vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    
}
/* Track */
&::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
    background: none; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
    background: purple; 
    border-radius: 10px;
}
`
export default Body;
