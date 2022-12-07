import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import bgImage from "../../../assets/img/digital-experience.jpg";

import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  const services = [
    "eCommerce Marketing",
    "Google Ads Management",
    "Social Media Management",
    "SEO / Search Engine Optimization",
    "Social Media Advertising",
    "Online Reputation Management",
    "PPC / Pay Per Click",
  ];

  const theHow = [
    {
      title: "Measurement & Optimization",
      text: "The difference between a good campaign and a great one is performance optimization. Understanding your business goals, StoryWoxx analyzes your website data and tests viable alternatives, while consistently implementing changes on a regular basis.",
    },
    {
      title: "Engagement Measurement",
      text: "Engage your clients, treat them well, call them by name and anticipate their actions that drive your business. You will eventually gain a customer for life. A personal relationship built on engagement, builds brand loyalty, and we solidify customer commitment.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      text: "Serious work, patience, and a relevant fresh and strategic content placement. Search engine optimization increases the quality and quantity of organic website traffic. StoryWoxx develops and creates personalized strategies for new companies as well as monitoring and improving existing sites.",
    },
    {
      title: "Messaging & Positioning",
      text: "What is your value proposition and what makes it distinctive in the marketplace? The right positioning and truly understanding your customer, create the foundation for brand identity. Producing relevant content and reaching your audience through the most effective channels are our specialty.",
    },
    {
      title: "Paid Media | Pay-Per Click Advertising",
      text: "Essential for getting a jump start on generating leads quickly but can be executed poorly with the wrong budget and strategy. We understand how to obtain high visibility amongst the crazy competition. It’s about campaign emphasis as well as focusing on top performing ad groups and keywords. Leave the details to us, and watch the clicks convert to customers.",
    },
    {
      title: "Programmatic Retargeting",
      text: "Don’t let your passive customers pass you by. StoryWoxx helps you utilize sophisticated retargeting tools to keep your products, services and brand top of mind with those potential buyers who have visited your website. We connect in every stage in the customer lifecycle, increasing your brands traction and recognition.",
    },
    {
      title: "Email Marketing",
      text: "The total number of worldwide email accounts is projected to reach 4.9 billion by 2017. It’s time to deliver your message directly and effectively with compelling messages and captivating design. We produce email marketing campaigns that focus on brand message and segmented and targeted delivery, tailored to drive the results you need.",
    },
    {
      title: "Social Media Management",
      text: "Activity on Social Media Channels allows customers to better understand your brand, create community, consistently engage with your offerings, creating brand loyalists.",
    },
  ];
  return (
    <Container fluid className='px-0'>
      <Navbar />
      <Breadcrumbs breadcrumbs='home / services / brand marketing' />
      {/* Brand Marketing Intro */}
      <Container className='px-0 digital-intro__container px-3 py-5'>
        <div className='d-flex flex-column flex-md-row gap-5 align-items-center'>
          <div className='d-flex flex-column gap-4'>
            <div className='d-flex flex-column gap-2'>
              <p className='digital-intro__subheading sub-heading'>
                Our Business Thrives
              </p>
              <h1 className='main-heading digital-intro__heading'>
                Unleash an Unstoppable Strategy
              </h1>
            </div>
            <p className='digital-intro__desc'>
              We know what’s needed to see results in the world of digital
              marketing. That’s why we work hard and think creatively to build
              engagement that produces measurable results.
            </p>
          </div>
          <div className='w-100'>
            <h1 className='main-heading my-3 '>
              Digital Marketing Services
            </h1>
            <ul className='d-flex flex-column gap-1 service-services-inner'>
              {services && services.map((service) => <li>{service}</li>)}
            </ul>
          </div>
        </div>
      </Container>

      {/* <Container fluid className='px-0 bg-danger image-showcase'>
        <Image src={bgImage} />
      </Container> */}

      {/* TwoColumnsLeft */}
      <Container fluid className='px-0 digital-marketing__container'>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='px-0 digital-marketing__cover'
          >
            <Image src={bgImage} />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='d-flex align-items-center justify-content-center digital-marketing px-4'
          >
            <div className='d-flex flex-column gap-5'>
              <div className='d-flex flex-column gap-3'>
                <h4 className='main-heading'>
                  A Plan That’s Built for Your Business
                </h4>
                <p className='digital-marketing__desc'>
                  Using a pointed plan that leverages a mix of tactics — from
                  high level messaging to paid media — we’ll craft a custom
                  strategy that will help you succeed in the ever-changing
                  online space.
                </p>
              </div>
              <p className='digital-marketing__sub'>
                With our years of experience in the marketing industry, we know
                what it takes to produce.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Brand Marketing Highlights */}
      <Container className='services-highlight px-3'>
        <div className='d-flex flex-column gap-2'>
          <p className='sub-heading'>Our Digital Marketing Process</p>
          <h1 className='main-heading services-highlight__heading'>
            Digital Marketing Services
          </h1>
        </div>
        <div className='services-highlight__items'>
          {theHow.map((how, index) => (
            <div className='d-flex flex-column gap-3' key={index}>
              <h4 className='digital-marketing__title'>{how.title}</h4>
              <p>{how.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default DigitalMarketing;
