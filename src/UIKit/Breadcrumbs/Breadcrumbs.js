import React from "react";
import { Container, Image } from "react-bootstrap";

import breadcrumbBanner from "../../assets/img/banner/breadcrumb-cover-img.jpg";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <Container
      fluid
      className='breadcrumb-container px-0 d-flex align-items-center justify-content-center'
      style={{ paddingTop: "10rem" }}
    >
      <Image src={breadcrumbBanner} className='breadcrumb-container__img' />
      <div>
        <p className='text-uppercase breadcrumb-container-item'>
          {breadcrumbs}
        </p>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
