import React, { useId } from "react";
import { Container, Image } from "react-bootstrap";
import "./Services.css";
import design from "../../UIKit/Icons/design.svg";
import delivery from "../../UIKit/Icons/delivery.svg";
import branding from "../../UIKit/Icons/branding.svg";
import management from "../../UIKit/Icons/management.svg";

import research from "../../assets/img/icons/research.png";
import businessStrategy from "../../assets/img/icons/business-strategy.png";
import brandMessage from "../../assets/img/icons/brand-message.png";
import brandIdentity from "../../assets/img/icons/brand-identity.png";

const Services = () => {
  const id = useId();

  const featuredServices = [
    {
      heading: "Research",
      text: "Discover opportunities, understanding your how to elevate it to a whole new level, understand your competition and target audiences.",
      icon: research,
    },
    {
      heading: "Brand Strategy",
      text: "We will create a detailed step by step process to achieve success; linking purpose, style, messaging content and culture to profitability.",
      icon: businessStrategy,
    },
    {
      heading: "Brand Identity",
      text: "The image of your brand from design, color, logo and other visual components that create your overall identity.",
      icon: brandIdentity,
    },
    {
      heading: "Brand Messaging",
      text: "Your brands unique tone will be used across all content to convey your message to a target audience.",
      icon: brandMessage,
    },
  ];
  return (
    <Container
      fluid
      className='services__container d-flex flex-column justify-content-center align-items-center'
    >
      <div className='services__wrapper d-flex flex-column justify-content-center align-items-center py-3'>
        <div className='services__heading d-flex flex-column align-items-center justify-content-center gap-2'>
          <p className='sub-heading text-center'>A Multi-Disciplinary Team</p>
          <h1 className='main-heading text-center'>
            Brand Strategy, Digital Design, Development, and Online Marketing.
        </h1>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
          {featuredServices.map((service, index) => (
            <div
              className='d-flex flex-column align-items-center justify-content-center gap-2'
              key={`${index}-${id}`}
            >
              <Image src={service.icon} className='mb-3' />
              <h4 className='services__sub__heading text-center'>
                {service.heading}
              </h4>
              <p className='services__text text-center'>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
