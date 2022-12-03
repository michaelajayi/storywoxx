import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import PortfolioDetailsGallery from "../PortfolioDetailsGallery/PortfolioDetailsGallery";

import "./PortfolioDetailsModal.css";

const PortfolioDetailsModal = (props) => {
  const { title, paragraphs, category, gallery } = props.portfolio;
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter portfolio-details__heading'>
          Project - {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-3 py-3'>
        <div className='d-flex flex-column gap-4'>
          <div className='d-flex flex-column'>
            <p className='text-uppercase portfolio-details__subheading fw-bold'>
              Category:
            </p>
            <p className='portfolio-details__category'>{category}</p>
          </div>
          <div className='d-flex flex-column'>
            <p className='portfolio-details__subheading fw-bold'>
              Description:
            </p>
            <div className='d-flex flex-column gap-4'>
              {paragraphs &&
                paragraphs.map((paragraph, index) => (
                  <p key={index} className='portfolio-details__desc'>
                    {paragraph.paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className='d-flex flex-column'>
            <p className='text-uppercase portfolio-details__subheading fw-bold'>
              Gallery:
            </p>
            <PortfolioDetailsGallery gallery={gallery} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PortfolioDetailsModal;
