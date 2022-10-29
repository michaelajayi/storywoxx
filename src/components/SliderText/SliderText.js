import React from "react";
import { Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderTextItem from "../SliderTextItem.js/SliderTextItem";

const SliderText = () => {
  const sliderTextItems = [
    {
      text: "For several years, we have developed a unique methodology combining the art and science of storytelling to help leaders inspire and galvanize their teams. Creating a simple, clear and emotionally-compelling narrative, our approach brings clarity and meaning, motivates everyone in the organization to explore what the story means for their part of the business, and how they can all play their part.",
      caption: "01",
    },
    {
      text: "We are a dedicated team, offering a comprehensive approach to brand strategy, digital design, development, and online marketing. Our team chooses to work with brands that excite and inspire. Together, we are working to grow forward-thinking, relevant brands.",
      caption: "02",
    },
    {
      text: "We work within many individuals, businesses, government and NGOs; both conventional and unconventional. Specialized in reaching mass market consumers.",
      caption: "03",
    },
  ];
  return (
    <Container className=''>
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
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Keyboard]}
      >
        {sliderTextItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderTextItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SliderText;
