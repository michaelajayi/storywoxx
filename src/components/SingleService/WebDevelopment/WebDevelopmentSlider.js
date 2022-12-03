import React from "react";
import { Container } from "react-bootstrap";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import WebDevelopmentSliderItem from "./WebDevelopmentSliderItem";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebDevelopmentSlider = () => {
  const webDevelopment = [
    {
      title: "Website Design",
      paragraphOne:
        "Your website is essential to influence brand identity and your business development strategy. A professional and purposeful design is critical for other marketing strategies to be successful. Your site should have a purpose and drive your users to action. StoryWoxx uniquely specializes in creative, user experience and interaction, in both our front-end and back-end development process.",
      paragraphTwo:
        "Whether you’re looking for an aesthetically pleasing showcase of your best work or a helpful and intuitive website espousing the benefits you bring to the table, our design team is ready to create your beautifully interactive, SEO-friendly website.",
    },
    {
      title: "eCommerce",
      paragraphOne:
        "Businesses should have the power to sell products and services through an easy-to-manage eCommerce platform that is also thoughtful of internal operational logistics for fulfilment. StoryWoxx builds reliable, secure, eCommerce platforms that give you control over your online store, while also delivering intuitive consumer-friendly interactions.",
      paragraphTwo:
        "We provide quick-loading pages, easy online checkouts and compelling call-to-action statements that turn visitors into paying customers.",
    },
    {
      title: "CMS Design",
      paragraphOne:
        "Creating a relevant website which incorporates design, functionality and organization is essential to meet your evolving business goals.  StoryWoxx specializes in multiple CMS platforms, creating custom experiences which meet streamlined site updates, beautiful brand representation, easy content creation and updates, and SEO optimization capabilities.",
      paragraphTwo:
        "Your custom design will be built to take advantage of each platform’s defining features to get the most out of its unique strengths.",
    },
    {
      title: "UI/UX Design",
      paragraphOne:
        "User Interfaces (UI) and User Experience (UX) are key components that determine the success of any interactive web application. With over 10 years of experience in developing robust applications that dominate their markets, our team will take your concept and develop it further to build the perfect application based on your vision.",
      paragraphTwo:
        "StoryWoxx follows the latest industry design process and UI testing techniques to achieve the optimal experience for your users. StoryWoxx products are designed for the next-generation UI/UX to increase web application and mobile app performance while providing users with a uniquely creative interaction.",
    },
    {
      title: "Responsive Development",
      paragraphOne:
        "When your customers switch from laptop to iPad to mobile device, your website needs to be able to do the same while reaching the same goals for interaction.",
      paragraphTwo:
        "StoryWoxx creates designs and engineering for various device types to make sure that your site is fulfilling its potential in any environment.",
    },
    {
      title: "Mobile Design & Engineering",
      paragraphOne:
        "StoryWoxx team considers application strategy and research to define your specific mobile integration goals. Your customers are reaching you through mobile and your company’s message and application experience should translate to them effectively.",
      paragraphTwo:
        "Whether we are tackling an omni-channel approach or basic site functionality on multi-devices, our team has you covered with specialized mobile design & engineering.",
    },
    {
      title: "Brand Identity & Strategy",
      paragraphOne:
        "Your brand represents who you are and the unique assets you bring to your industry. We design with message, using your voice and engaging your community.",
      paragraphTwo:
        "Whether we’re focused on driving sales, building awareness, teaching the consumer, or just making you look damn good in your market…we implement a brand building strategy process that conveys your brand goals.",
    },
    {
      title: "Visual Design",
      paragraphOne:
        "Visual design is an essential part of your representation and advertising that must be taken into account with any project. From color to mood, words to beliefs, these all make a strong impression about who you are and what your business can do for your customers.",
      paragraphTwo:
        "The StoryWoxx design team offers the best in the business offering multifaceted design capabilities.",
    },
    {
      title: "Analytics & Conversion Tracking",
      paragraphOne:
        "Let the data do the talking. What good is a website if it isn’t attracting customers? Sure, it might be really good looking, but is it getting results that effect your business?",
      paragraphTwo:
        "We challenge analytics and have a tactical approach to reviewing data in order to create enhancements and adjustments that ultimately covert users to customers.",
    },
    {
      title: "Video & Animation",
      paragraphOne:
        "If a picture is worth a thousand words, then a moving picture is worth a thousand more. Video and animation bring your site and marketing campaigns to life, literally, explaining difficult concepts and captivating your audience.",
      paragraphTwo:
        "We use the integration to tell your story in with digital innovation.",
    },
    {
      title: "Web Maintenance & Ongoing Support",
      paragraphOne:
        "Regardless of your business size, we find that our clients appreciate our approach to a hands-on partnership.",
      paragraphTwo:
        "StoryWoxx can host your site, provide daily backup, provide updates and changes, and most importantly be available for ongoing marketing strategy support so that you can focus on the important stuff… driving growth to your business.",
    },
    {
      title: "Data Visualization",
      paragraphOne:
        "At StoryWoxx we understand that in order to create a successful website, you need to think outside the box. That’s why videos, music, infographics, quizzes and more are used to convey information creatively and easily.",
      paragraphTwo:
        "The colors, the movement, and visual representation of data help viewers quickly understand what you’re all about and deliver content in a much more interesting way.",
    },
    {
      title: "Web Analytics",
      paragraphOne:
        "Follow the Data, Find the Truth. That’s why we manage continuous analysis of your site and campaigns, to focus on data driven performance.",
      paragraphTwo:
        "Using analytics, we provide performance insights and recommendations to determine what is working and what’s not. Being ever vigilant, we’re always monitoring and making changes to stay ahead of the curve.",
    },
  ];
  return (
    <Container fluid className='web-development__swiper px-0'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#8b8b8b",
          "--swiper-pagination-color": "#8b8b8b",
        }}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        keyboard={{ enabled: true }}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Keyboard]}
      >
        {webDevelopment.map((item, index) => (
          <SwiperSlide key={index}>
            <WebDevelopmentSliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default WebDevelopmentSlider;
