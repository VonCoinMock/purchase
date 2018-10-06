import React from 'react';
import styled from "styled-components";

const image = ({className, src}) => (
  <img className={className} src={src} />
)
const Image = styled(image)`
  height: auto;
  width: ${props => props.main ? '100%' : '14%'};
  position: ${props => props.main ? 'absolute' : 'relative'};
  margin: ${props => props.main ? '0px' : '5px'};
`
export default Image;
