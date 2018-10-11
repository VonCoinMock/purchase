import React from 'react';
import styled from 'styled-components';
import AuctionInfo from './AuctionInfo/Frame.jsx';
import GamerTag from './GamerTag/Frame.jsx';
import ProductGallery from './ProductGallery/Frame.jsx';
import Purchase from './Purchase/Frame.jsx';
import Timer from './Timer/Frame.jsx';
import WatchButton from './WatchButton/Frame.jsx';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #4c4592, #383075);
`;


const HeaderContainer = styled.div`
  display: block;
  height: 12.5vh;
  width: 100%;
`;

const Logo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 3.5vh;
  position: absolute;
  left: 4.25vw;
  max-height: 100%;
  height: auto;
  max-width: 50%;
  padding-top: 1.5vh;
  color: white;
  text-align: center;
`;

const Clock = styled.div`
  font-family: "Nunito+Sans", sans-serif;
  font-weight: 300;
  font-size: 2vh;
  position: absolute;
  max-height: 100%;
  height: auto;
  text-align: center;
  padding-top: 5vh;
  color: white;
  right: 4.25vw;
`;

const Content = styled.div`
  height: 85vh;
  max-width: 100%;
  width: 100%;
`;

const MainView = styled.div`
  position: absolute;
  width: 70%;
`;

const MainViewTop = styled.div`
  display: inline-block;
  height: 23vh;
  width: 100%;
  margin-left: 2.9vw
  margin-bottom: 1vh;
`;

const MainViewBottom = styled.div`
  height: 70%;
  width: 100%;
`;

const ActionColumn = styled.div`
  position: absolute;
  right: 1vw;
  height: 86vh;
  width: 24%;
  padding-right: 1.25vw;
  padding-left: 1vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Container>
      <HeaderContainer><Logo>Von Coin</Logo><Clock>12:07 AM</Clock></HeaderContainer>
      <Content>
        <MainView>
          <MainViewTop>
            <GamerTag /><Timer />
          </MainViewTop>
          <MainViewBottom>
            <ProductGallery />
          </MainViewBottom>
        </MainView>
        <ActionColumn><Purchase /><AuctionInfo /><WatchButton /></ActionColumn>
      </Content>
      </Container>)
  }
}

export default App;