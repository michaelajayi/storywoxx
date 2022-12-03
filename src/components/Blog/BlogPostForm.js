import React from "react";
import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./BlogPostForm.css";

const BlogPostForm = () => {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [postForm, setPostForm] = useState({
    name: "",
    email: "",
    comment: "",
    website: "",
  });

  const onClear = () => {
    setPostForm({
      name: "",
      email: "",
      comment: "",
      website: "",
    });
  };

  const { name, email, comment, website } = postForm;

  const onChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    // setLoading(true);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setLoading(false);
    }

    setValidated(true);
    console.log(postForm);
    // onClear();
    // setLoading(false);
    // setValidated(false);
  };

  return (
    <Container className='px-0 blog-post-form__container'>
      <div className='d-flex flex-column gap-3'>
        <h1>Leave a Reply</h1>
        <p style={{ color: "#878787", fontSize: "16px", fontWeight: '300' }}>
          Your email address will not be published. Required fields are marked *
        </p>
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              className='blog-post__form-control border-0 shadow-none rounded-0'
              as='textarea'
              name='comment'
              value={comment}
              rows={8}
              required
              onChange={onChange}
              placeholder='Comment *'
            />
            <Form.Control.Feedback type='invalid'>
              Comment is required
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col md={6} sm={12}>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Control
                  className='blog-post__form-control border-0 shadow-none rounded-0'
                  type='text'
                  name='name'
                  value={name}
                  required
                  onChange={onChange}
                  placeholder='Name *'
                />
                <Form.Control.Feedback type='invalid'>
                  Enter a name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Control
                  className='blog-post__form-control border-0 shadow-none rounded-0'
                  type='email'
                  name='email'
                  value={email}
                  required
                  onChange={onChange}
                  placeholder='Email *'
                />
                <Form.Control.Feedback type='invalid'>
                  Include a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className='mb-3' controlId='website'>
            <Form.Control
              className='blog-post__form-control border-0 shadow-none rounded-0'
              type='text'
              name='website'
              value={website}
              onChange={onChange}
              placeholder='Website'
            />
          </Form.Group>
          <FlatButton
            text={loading ? "Loading..." : "Post Comment"}
            bg='black'
            color='white'
            Icon={CgArrowLongRight}
            type='submit'
            onClick={onSubmit}
          />
        </Form>
      </div>
    </Container>
  );
};

export default BlogPostForm;
