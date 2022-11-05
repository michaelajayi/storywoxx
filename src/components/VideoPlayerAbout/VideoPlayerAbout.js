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
        {/* <video
          type='video/mp4'
          src={bgVideo}
          className='landing__video'
          muted
          autoPlay
          loop
        ></video> */}
        <iframe
          src='https://player.vimeo.com/video/374107133?h=049dab5a1b&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen=''
          title='video'
          // dataReady='true'
        className='elementor-background-video-embed'
          style={{
            width: 1730.8 + "px",
            height: 975.1 + "px",
          }}
          width='426'
          height='240'
          frameBorder='0'
        ></iframe>
      </div>
    </Container>
  );
};

export default VideoPlayerAbout;
