import React from "react";

// @ts-ignore
import VideoSource from "./frag_bunny.mp4";

export default class VideoPlayer extends React.Component<any> {
  render() {
    return (
      <div>
        <video src={VideoSource}/>
      </div>
    );
  }
}
