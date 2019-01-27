class Timer {
  inter = 1000;
  count = 0;
  timer: number;
  time: number;
  callback: any;
  constructor(time: number, callback: any) {
    this.time = time;
    this.callback = callback;
  }
  getElapsed = () => this.count * this.inter;
  getElapsedTime = () => new Date(this.time + this.getElapsed());
  start = () => {
    this.creatTimer();
  };
  creatTimer = () => {
    this.setTimer();
  };
  clearTimer = () => {
    window.clearInterval(this.timer);
  };
  setTimer = () => {
    this.interval();

    this.timer = window.setInterval(() => {
      this.interval();
    }, this.inter);
  };

  destroyTimer = () => {
    this.clearTimer();
  };

  interval = () => {
    this.count++;
    this.callback();
  };
}

export default Timer;
