import React, {Component} from 'react';
import styled from "styled-components";

const titlep = ({className, children, title}) => (<p className={className}>{title}</p>)
const TitleP = styled(titlep)`
  font-size: 2.5em;
  font-weight: bold;
`

const titleDiv = ({className, title}) => (<div className={className}>
  <TitleP title={title || "PRODUCT FOR AUCTION"}></TitleP>
</div>)

const Title = styled(titleDiv)`
`
export default Title;
