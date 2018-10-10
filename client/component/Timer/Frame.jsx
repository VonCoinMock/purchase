import React from 'react';
import styled from "styled-components";
//remove all flex containers and reorganize divs. //flexbox is the root of all evil.
const Container = styled.div `
  position: absolute;
  top: 0;
  left: 51%;
  width: 51%;
  height: 21vh;
  border: 1px solid #22cac9;
  background-color: #22cac9;
`;

const ClockTimer = styled.div `
  justify-content: center;
`;

const Clock = styled.div `
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
  color: white;
  margin-top: 5%
`;

const Time = styled.div `
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2em;
  color: white;
  margin-left: 4vw;
  padding-top: 10vh;
`;

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: 5,
      minutes: 1
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({time: timeLeftVar});
    this.startTimer();
    this.countDown();
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let minutes = this.state.minutes - 1;

    // Check if we're at zero.

    if (seconds === 0 && minutes === -1) {
      clearInterval(this.timer);
    }
    if (seconds === -1 && minutes !== -1) {
      seconds = 59
      this.setState({
        time: this.secondsToTime(59),
        seconds: 59,
        minutes: this.state.minutes - 1
      });
    } else {
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      this.setState({time: this.secondsToTime(seconds), seconds: seconds});
    }
  }

  render() {
    return (
      <Container>
        <ClockTimer>
          <Clock>
            <div>THIS PRODUCT</div>
          </Clock>
          <Time>
            <div>{this.state.minutes + ':' + this.state.seconds}</div>
          </Time>
        </ClockTimer>
      </Container>
    )
  }
}

export default Frame;
