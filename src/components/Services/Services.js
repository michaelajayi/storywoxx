import React, { useId } from "react";
import { Container, Image } from "react-bootstrap";
import "./Services.css";
import design from "../../UIKit/Icons/design.svg";
import delivery from "../../UIKit/Icons/delivery.svg";
import branding from "../../UIKit/Icons/branding.svg";
import management from "../../UIKit/Icons/management.svg";

const Services = () => {
  const id = useId();

  const featuredServices = [
    {
      heading: "Branding",
      text: "Metus vulputate eu felis imperdiet proin nulla aliquet enim tortor at.",
      icon: branding,
    },
    {
      heading: "Management",
      text: "Metus vulputate eu felis imperdiet proin nulla aliquet enim tortor at.",
      icon: management,
    },
    {
      heading: "Design",
      text: "Metus vulputate eu felis imperdiet proin nulla aliquet enim tortor at.",
      icon: design,
    },
    {
      heading: "Delivery",
      text: "Metus vulputate eu felis imperdiet proin nulla aliquet enim tortor at.",
      icon: delivery,
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
        <div className='featured__services d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
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