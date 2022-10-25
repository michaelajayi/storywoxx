import React, { useId } from "react";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import { Container, Row, Col } from "react-bootstrap";
import "./SubHeader.css";

const SubHeader = () => {
  const id = useId();

  const subHeaderItems = [
    {
      title: "Extension of Your Team",
      text: "A true extension of your team, advancing business objectives, alongside your internal team.",
      roundButtonLink: "/performance",
    },
    {
      title: "Multi-Disciplinary Creators",
      text: "Multi-disciplinary team of experienced marketers, strategists, creatives and developers.",
      roundButtonLink: "/performance",
    },
    {
      title: "Systematic Approach",
      text: "A comprehensive process which is segmented into phases from product ideation to specialized marketing.",
      roundButtonLink: "/performance",
      extraClass: "d-none d-lg-block",
    },
  ];
  return (
    <Container
      fluid
      className='subheader__container d-flex justify-content-evenly align-items-center d-none d-md-block'
    >
      <Row className='subheader__wrapper justify-content-between bg-white'>
        {subHeaderItems.map((item, index) => (
          <Col sm={12} md={6} lg={4}>
            <div
              className={`d-flex flex-column align-items-start subheader__sub gap-3 ${
                index === 2 && "d-none d-md-flex"
              }`}
              key={`${id}-${index}`}
            >
              <h3 className='subheader__title'>{item.title}</h3>
              <p className='subheader__text'>{item.text}</p>
              <RoundButton arrowColor='#000' />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubHeader;
