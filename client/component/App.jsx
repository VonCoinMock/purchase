import React from 'react';
import styled from 'styled-components';
// import AuctionInfo from './AuctionInfo/Frame.jsx';
// import GamerTag from './GamerTag/Frame.jsx';
import ProductGallery from './ProductGallery/Frame.jsx';
// import Purchase from './Purchase/Frame.jsx';
// import Timer from './Timer/Frame.jsx';
// import WatchButton from './WatchButton/Frame.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductGallery></ProductGallery>
      </div>)
  }
}

export default App;
