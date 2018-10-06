import React from 'react';
import styled from "styled-components";
import Image from "./Image.jsx";

const gallery = ({className, images, click}) => {
  var reactObjects = [];
  for(let i = 0; i < images.length; i++){
    reactObjects.push(<Image key={i} src={images[i]} main={false} click={()=>{click(i)}}></Image>)
  }
  return (
    <div className={className}>
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

const center = ({className, children, images, click}) => (
  <div className={className}>
    <Gallery images={images} click={click}></Gallery>
  </div>
)

const CenteredGallery = styled(center)`
  text-align: center;
`
export default CenteredGallery;
