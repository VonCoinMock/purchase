import React from 'react';
import styled from 'styled-components';
import AuctionInfo from './AuctionInfo/Frame.jsx';
import GamerTag from './GamerTag/Frame.jsx';
import ProductGallery from './ProductGallery/Frame.jsx';
import Purchase from './Purchase/Frame.jsx';
import Timer from './Timer/Frame.jsx';
import WatchButton from './WatchButton/Frame.jsx';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #4c4592, #383075);
`;


const HeaderContainer = styled.div`
  display: block;
  height: 7.5vw;
  width: 100%;
`;

const Logo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 2.85vw;
  position: absolute;
  left: 4.25vw;
  max-height: 100%;
  height: auto;
  max-width: 50%;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 1.5vw;
  color: white;
  text-align: center;
`;

const Clock = styled.div`
  font-family: "Nunito+Sans", sans-serif;
  font-weight: 300;
  font-size: 1.2vw;
  position: absolute;
  right: 2vw;
  max-height: 100%;
  height: auto;
  text-align: center;
  padding-top: 2.5vw;
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 85vh;
  max-width: 100%;
  width: 100%;
`;

const MainView = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 96%
  width: 79%;
`;

const MainViewTop = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 30%;
  height: 30%;
  max-width: 100%;
  padding-left: 1.25vw;
`;

const MainViewBottom = styled.div`
  max-height: 70%;
  height: 70%;
  max-width: 100%;
  width: 100%;
`;

const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  max-height: 100%;
  height: 100%;
  width: 21%;
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