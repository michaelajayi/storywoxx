import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { blog } from "../../utils/blog";

import "./RelatedPosts.css";

const RelatedPosts = () => {
  return (
    <Container className='px-0'>
      <h1 className='py-2'>Related Posts</h1>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start related-post-wrapper gap-4'>
        {blog.map((post, index) => (
          <div
            className='related-post-box d-flex flex-column gap-1'
            key={index}
          >
            <Link to={`/blog/${post.link}`}>
              <div className='related-post__img__box'>
                <Image src={post.img} className='related-post__img' />
              </div>
            </Link>
            <p className='sub-heading'>{post.date}</p>
            <p className='related-post__title'>{post.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RelatedPosts;
