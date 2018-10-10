import React from 'react';
import styled from "styled-components";
import Image from "./Image.jsx";
import CenteredGallery from "./Gallery.jsx";
import ProductInfo from "./ProductInfo/Info.jsx";

const ConCon = styled.div`
  position: absolute;
  margin-left: 4%;
  height: 58vh;
  width: 69vw;
  background: #23114f;
  border: 1px solid grey;
`
const parent = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)
const LContainer = styled(parent)`
  width: 45%;
  height: 100%;
  position: absolute;
  left: 0px;
  background-color: white;
  overflow: hidden;
`
const RContainer = styled(parent)`
  width: 55%;
  height: 100%;
  position: absolute;
  right: 0px;
  overflow: hidden;
`

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          src: null,
          images: []
        }
        this.changeImage = this.changeImage.bind(this);
    }
    componentDidMount(){
      this.setState({
        src: './src/purple.jpg',
        images: ['./src/purple.jpg','./src/tron.jpg','./src/c3po.jpeg']
      })
    }
    changeImage(n){
      this.setState({
        src: this.state.images[n]
      })
    }
    render() {
        return (
          <div>
            <ConCon>
              <LContainer>
                <Image src={this.state.src} main={true}></Image>
                <CenteredGallery images={this.state.images} click={this.changeImage}></CenteredGallery>
              </LContainer>
              <RContainer>
                <ProductInfo></ProductInfo>
              </RContainer>
            </ConCon>
          </div>
        )
    }
}

export default Frame;
