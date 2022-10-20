import React from "react";
import { Container } from "react-bootstrap";

import bgVideo from "../../assets/video/macos-ventura.mp4";

import "./VideoPlayerAbout.css";

const VideoPlayerAbout = () => {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-center my-5'
    >
      <div className='video__wrapper'>
        <video
          type='video/mp4'
          src={bgVideo}
          className='landing__video'
          muted
          autoPlay
          loop
        ></video>
      </div>
    </Container>
  );
};

export default VideoPlayerAbout;
