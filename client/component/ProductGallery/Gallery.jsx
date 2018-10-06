import React from 'react';
import styled from "styled-components";
import Image from "./Image.jsx";

const gallery = (props) => {
  console.log(props);
  var reactObjects = [];
  for(let i = 0; i < props.images.length; i++){
    reactObjects.push(<Image key={i} src={props.images[i]} main={false}></Image>)
  }
  return (
    <div className={props.className}>
      {reactObjects}
    </div>
  )
}
const Gallery = styled(gallery)`
  position: absolute;
  bottom: 15px;
  height: auto;
  width: 100%;
`

const center = ({className, children, images}) => (
  <div className={className}>
    <Gallery images={images}></Gallery>
  </div>
)

const CenteredGallery = styled(center)`
  text-align: center;
`
export default CenteredGallery;
