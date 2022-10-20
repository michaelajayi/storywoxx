import React, { useId } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import ReviewItem from "./ReviewItem";
import "./Review.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const id = useId();

  const reviews = [
    {
      heading: "What They Say",
      text: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim.",
      author: "Amet Vulpitat",
      position: "Digital Marketing",
    },
    {
      heading: "What They Say",
      text: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim.",
      author: "Provident Fugit",
      position: "Software Engineer",
    },
    {
      heading: "What They Say",
      text: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim.",
      author: "Quis Imperdiet",
      position: "QA Tester",
    },
  ];
  return (
    <Container fluid className='reviews__container'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#8b8b8b",
          "--swiper-pagination-color": "#8b8b8b",
        }}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Keyboard]}
        className='mySwiper d-flex flex-column justify-content-center align-items-center'
      >
        <div className='quote__container'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='204.8'
            height='163.2'
            viewBox='0 0 204.8 163.2'
          >
            <path
              d='M-56-561.6q-16.8,0-28,11.6t-11.2,26.8a38.223,38.223,0,0,0,9.6,25.6,35.818,35.818,0,0,0,24,12.8q-1.6,20-12.8,34.8t-32,28.4L-92-398.4q30.4-15.2,52-49.6t21.6-69.6q0-19.2-11.2-31.6T-56-561.6Zm116.8,0A36.4,36.4,0,0,0,33.6-550q-11.2,11.6-11.2,26.8A38.223,38.223,0,0,0,32-497.6a36.471,36.471,0,0,0,24.8,12.8q-1.6,20-13.2,34.8T11.2-421.6l14.4,23.2Q55.2-413.6,76.8-448t21.6-69.6q0-19.2-11.2-31.6T60.8-561.6Z'
              transform='translate(106.4 561.6)'
              fill='#fff'
            ></path>
          </svg>
        </div>
        {reviews.map((review, index) => (
          <SwiperSlide key={`${id}-${index}`}>
            <ReviewItem review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Review;
