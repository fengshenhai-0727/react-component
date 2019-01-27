import React from "react";
import Timer from "./timer";

type ClockFace = "HourlyCounter";
interface ClockProps {
  countdown?: false;
  clockFace?: ClockFace;
  callback(): void;
}

class Clock extends React.Component<ClockProps> {
  timer: Timer;
  state = {
    time: 0
  };
  componentDidMount() {
    this.timer = new Timer(100, ()=>{
      this.setState({
        time:this.timer.getElapsed()
      });
    });
    
    this.timer.start();

  }
  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Clock;
