import React from 'react';
import AuctionInfo from './AuctionInfo/Frame.jsx';
import GamerTag from './GamerTag/Frame.jsx';
import ProductGallery from './ProductGallery/Frame.jsx';
import Purchase from './Purchase/Frame.jsx';
import Timer from './Timer/Frame.jsx';
import WatchButton from './WatchButton/Frame.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <AuctionInfo></AuctionInfo>
      <GamerTag></GamerTag>
      <ProductGallery></ProductGallery>
      <Purchase></Purchase>
      <Timer></Timer>
      <WatchButton></WatchButton>
      </div>)
  }
}

export default App;