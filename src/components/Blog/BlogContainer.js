import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import "./BlogContainer.css";
import blogImageSample from "../../assets/img/banner/03.png";
import RoundButton from "../../UIKit/Buttons/RoundButton";

import { blog } from "../../utils/blog.js";

import authorImg from "../../assets/img/author-img.jpeg";
import { Link } from "react-router-dom";

export const BlogContainer = () => {
  return (
    <Container fluid className='bg-white px-0 blog-container'>
      <Row className='blog-row-wrapper'>
        <Col
          md={12}
          lg={4}
          className='blog-left-section d-flex align-items-center align-items-md-start justify-content-center justify-content-lg-start'
        >
          <Card
            style={{ width: "20rem" }}
            className='rounded-0 px-0 border-0 author-card-blog'
          >
            <Card.Img variant='top' src={authorImg} className='rounded-0' />
            <Card.Body className='author-card-body d-flex flex-column gap-3'>
              <Card.Title className='author-fullname'>StoryWoxx</Card.Title>
              <Card.Text className='author-bio'>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei sui an pericula
              </Card.Text>
              <div className='author-social-links d-flex justify-content-start align-items-center gap-2'>
                <a href='facebook.com' className='text-dark'>
                  <FaFacebookF size={12} />
                </a>
                <a href='twitter.com' className='text-dark'>
                  <FaTwitter size={12} />
                </a>
                <a href='instagram.com/StoryWoxx' className='text-dark'>
                  <FaLinkedinIn size={12} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={12}
          lg={8}
          className='blog-right-section d-flex flex-column gap-5 align-items-start'
        >
          {blog.map((post) => (
            <div className='d-flex flex-column gap-1 align-items-start  '>
              <Link to={post.link}>
                <Image src={post.img} alt='blog-img-sample' />
              </Link>
              <div className='blog-texts d-flex flex-column gap-3'>
                <h1 className='main-heading'>{post.title}</h1>
                <p className='sub-heading'>
                  {post.date}. / {post.author} / {post.tags}
                </p>
                <p className=''>{post.lead}</p>
              </div>
              <Link to={post.link}>
                <RoundButton arrowColor='#000' />
              </Link>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
