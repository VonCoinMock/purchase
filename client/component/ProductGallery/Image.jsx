import React from 'react';
import styled from "styled-components";

const image = ({className, src, click}) => (
  <img className={className} src={src} onClick={()=>{click()}}/>
)
const Image = styled(image)`
  height: ${props => props.main ? 'auto' : '15vh'};
  width: ${props => props.main ? '100%' : '7vw'};
  position: ${props => props.main ? 'absolute' : 'relative'};
  vertical-align: middle;
  text-align: center;
  margin: ${props => props.main ? '0px' : '5px'};
  border: ${props => props.main ? 'none' : '1px solid grey'};
`
export default Image;
