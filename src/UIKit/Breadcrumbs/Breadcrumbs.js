import React from "react";
import { Container, Image } from "react-bootstrap";

import breadcrumbBanner from "../../assets/img/banner/breadcrumb-cover-img.jpg";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <Container fluid className='breadcrumb-container my-2 px-0 d-flex align-items-center justify-content-center'>
      <Image src={breadcrumbBanner} className='breadcrumb-container__img' />
      <div>
        <p className='text-uppercase breadcrumb-container-item'>
          Home / Standard Portfolio
        </p>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
