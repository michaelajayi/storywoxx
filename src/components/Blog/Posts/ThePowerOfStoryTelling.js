import React from "react";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Navbar from "../../Navbar/Navbar";
import NavbarAlt from "../../NavbarAlt/NavbarAlt";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import brandMarketing from "../../SingleService/BrandMarketing/BrandMarketing";

import authorImg from "../../../assets/img/author-img.jpeg";
import blogBreadcrumbBg from "../../../assets/img/blog/blog-breadcrumb-bg.jpeg";

import "./ThePowerOfStoryTelling.css";
import quote from "../../../UIKit/Icons/quote.svg";
import RelatedPosts from "../RelatedPosts";
import BlogPostForm from "../BlogPostForm";

const ThePowerOfStoryTelling = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs breadcrumbs='home / blog / the power of story telling' />
      <Container
        fluid
        className='px-0 blog-post__container d-flex flex-column flex-lg-row gap-5'
      >
        <div className='blog-post__left'>
          <div className='blog-title-card d-flex flex-column flex-lg-row justify-content-between'>
            <div className='d-flex flex-column gap-2'>
              <p className='sub-heading'>
                10. 11. 2022. / STORYWOXX / STORYTELLING
              </p>
              <h1 className='blog-post-title'>The Power of Storytelling</h1>
            </div>
            <Image src={quote} alt='quote-svg' className='quote-svg' />
          </div>
          <div className='blog-post-content py-5'>
            <p className='sub-heading pb-2'>STORYWOXX / STORYTELLING </p>
            <div className='blog-post__paragraphs d-flex flex-column gap-4'>
              <p className='blog-post__paragraph lead-text'>
                Imagine you are at your favourite grocery store. You wander
                around the aisle, not sure of what you’re actually looking for.
                Eventually, bottled juice catches your eye. The colours, the
                artwork, and the beauty of the pack are intriguing enough to
                make you grab the bottle and look thoroughly at the content and
                entire package, even though you’ve never heard of this brand
                before. A store staff comes around and gives you a bit to taste.
                You sip; it’s fresh, it’s crisp, it’s interesting, and you walk
                out of the store with the new juice in your hand.
              </p>
              <p className='blog-post__paragraph'>
                This juice is your brand. Notice that for the client, especially
                if the brand is new, there are a few different factors that
                contribute to their decision of making a purchase. First, the
                brand must catch their attention. That’s the job for your
                tip-of-the-iceberg branding. Colours, fonts, logo, artwork,
                interesting package. Every visual aspect makes your product
                stand out and appear unique. It makes the customer stop in their
                tracks and take your book in their hands.
              </p>
              <p className='blog-post__paragraph'>
                But then they open the juice to see if it is as refreshing and
                as interesting as the pack. And that’s where storytelling steps
                onto the stage. Its purpose is to hold the customer’s attention
                for long enough to convince them to buy your product or service
                and, preferably, even after that moment. Storytelling is about
                creating relationships between your brand and the audience.
              </p>
              <p className='blog-post__paragraph'>
                How to do that? What story should your brand tell? Well, there
                is one thing people love to listen to. And it’s not the history
                of your brand, nor is it your plans and ambitions. People love
                to listen to stories about themselves, stories that are
                relatable and personal to them. That’s why, in order to craft
                powerful storytelling, you must focus on the client, their
                struggles, ambitions, and things that bring them joy. Make them
                feel like the main character. They will buy your juice and
                whatever product or service in a blink of an eye.
              </p>
            </div>
          </div>
          <RelatedPosts />
          <BlogPostForm />
        </div>

        <div className='blog-post__right'>
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
        </div>
      </Container>
    </>
  );
};

export default ThePowerOfStoryTelling;
