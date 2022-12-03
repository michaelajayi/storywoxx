import React from "react";
import NavbarAlt from "../NavbarAlt/NavbarAlt";
import { Row, Col } from "react-bootstrap";

import bgImage from "../../assets/img/banner/blog-banner.jpeg";

import "./Blog.css";
import { Container } from "react-bootstrap";
import { BlogContainer } from "./BlogContainer";
import Footer from "../Footer/Footer";


const Blog = () => {
  return (
    <Container fluid className='px-0'>
      <NavbarAlt bgImage={bgImage} pageTitle='Blog' breadcrumbs='Home / Blog' />
      <BlogContainer />
      <Footer />
    </Container>
  );
};

export default Blog;
