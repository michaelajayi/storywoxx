import React, { useId } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";
import "./SubHeader.css";

const RoundButton = styled.div`
  background: #fff;
  border: none;
  border: 1px solid #878787;
  padding: 1rem 1.5rem;
  display: grid;
  border-radius: 50%;
  aspect-ratio: 1;
  place-content: center;
`;
const SubHeader = () => {
  const id = useId();

  const subHeaderItems = [
    {
      title: "Performance",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
    },
    {
      title: "Accounting",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
    },
    {
      title: "Planning",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
      extraClass: "d-none d-lg-block",
    },
  ];
  return (
    <div className='py-5 subheader__container d-flex justify-content-center align-items-center bg-white'>
      <div className='d-flex flex-column flex-md-row gap-5 subheader__wrapper'>
        {subHeaderItems.map((item, index) => (
          <div
            className={`d-flex flex-column align-items-start gap-3 ${
              index === 2 && "d-none d-lg-flex"
            }`}
            id={`${id}-${index}`}
          >
            <h3>{item.title}</h3>
            <p className='subheader__text'>{item.text}</p>
            <RoundButton style={{ position: "relative" }}>
              <CgArrowLongRight
                color='black'
                style={{ position: "absolute", left: "0", top: "10" }}
              />
            </RoundButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
