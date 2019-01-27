import React from "react";

import "./style.scss";

class Marquee extends React.Component<any> {
  static defaultProps = {
    duration: 500,
    interval: 1000 * 3
  };
  currentIndex = 0;
  length = 0;
  height = 0;
  marquee: any = React.createRef();
  timer: any;
  timerOut: any;

  componentDidMount() {
    this.fixList();
    this.timer = setInterval(() => {
      this.currentIndex += 1;
      this.setStyle(
        this.marquee.current,
        this.css3({
          transform: `translate3d(0,${-this.currentIndex * this.height}px,0)`,
          transition: `transform 500ms ease-in-out`
        })
      );
      if (this.currentIndex === this.length) {
        clearTimeout(this.timerOut);
        this.timerOut = setTimeout(() => {
          this.currentIndex = 0;
          this.setStyle(
            this.marquee.current,
            this.css3({
              transform: "translate3d(0,0,0)",
              transition: "transform 0ms ease-in-out"
            })
          );
        }, this.props.duration);
      }
    }, this.props.interval + this.props.duration);
  }
  componentWillUnmount() {
    this.destroy();
  }
  destroy = () => {
    clearInterval(this.timer);
    clearTimeout(this.timerOut);
    this.timer = null;
    this.timerOut = null;
  };
  fixList = () => {
    let cloneNode;
    const firstItem = this.marquee.current.firstElementChild;
    this.length = this.marquee.current.children.length;
    if (!this.length) {
      return;
    }
    cloneNode = firstItem.cloneNode(true);
    this.marquee.current.appendChild(cloneNode);
    this.height = this.marquee.current.offsetHeight / (this.length + 1);
  };
  setStyle = (element: any, styleName: any, value?: any) => {
    if (!element || !styleName) {
      return;
    }
    if (typeof styleName === "object") {
      for (const prop in styleName) {
        if (styleName.hasOwnProperty(prop)) {
          this.setStyle(element, prop, styleName[prop]);
        }
      }
    } else {
      element.style[styleName] = value;
    }
  };
  css3 = (o: any) => {
    const prefix: string[] = ["-webkit-", "-moz-", "-ms-", "-o-"];
    for (const k in o) {
      if (o.hasOwnProperty(k)) {
        for (let i = 0, len = prefix.length; i < len; i++) {
          o[prefix[i] + k] = o[k];
        }
      }
    }
    return o;
  };
  render() {
    return (
      <div className="marquee">
        <ul ref={this.marquee}>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      </div>
    );
  }
}

export default Marquee;
