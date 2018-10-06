import React from 'react';
import styled from "styled-components";
// import Info from "./AuctionInfo/Frame.jsx";
import Image from "./Image.jsx";
import CenteredGallery from "./Gallery.jsx";

const ConCon = styled.div`
  position: absolute;
  margin-left: 4%;
  height: 96vh;
  width: 90vw;
  border: 1px solid grey;
`
const parent = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)
const Container = styled(parent)`
  width: 40%;
  height: 80%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: red;
  overflow: hidden;
`
class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          src: null,
          images: []
        }
    }
    componentDidMount(){
      this.setState({
        src: './resources/420-xbox-one-1.jpg',
        images: ['./resources/420-xbox-one-1.jpg','./resources/pad.jpg','./resources/c3po.jpeg']
      })
      console.log(this.state.images)
    }
    render() {
        return (
          <div>
            <ConCon>
              <Container>
                <Image src={this.state.src} main={true}></Image>
                <CenteredGallery images={this.state.images}></CenteredGallery>
              </Container>
            </ConCon>
          </div>
        )
    }
}

export default Frame;
