import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Navbar from "../../Navbar/Navbar";

import authorImg from "../../../assets/img/author-img.jpeg";

import quote from "../../../UIKit/Icons/quote.svg";
import BlogPostForm from "../BlogPostForm";
import RelatedPosts from "../RelatedPosts";
import "./ThePowerOfStoryTelling.css";

const BrandingVsMarketing = () => {
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
                10. 11. 2022. / STORYWOXX / BRANDING, MARKETING
              </p>
              <h1 className='blog-post-title text-accent'>
                Branding vs Marketing
              </h1>
            </div>
            <Image src={quote} alt='quote-svg' className='quote-svg' />
          </div>
          <div className='blog-post-content py-5'>
            <p className='sub-heading pb-2'>STORYWOXX / BRANDING, MARKETING</p>
            <div className='blog-post__paragraphs d-flex flex-column gap-4'>
              <p className='blog-post__paragraph lead-text'>
                Branding is the most effective way to create long-term, loyal
                relationships with customers. You want your products to be
                memorable and easily recognizable. With unique brand visuals,
                values, and storytelling, you will effectively engrave into your
                customer's minds and hearts, gaining their trust. People like
                things that are familiar to them. Make your brand one of these
                things. Become a part of their everyday landscape. And watch
                your brand grow. Good luck!
              </p>
              <p className='blog-post__paragraph'>
                To set up the ground for further discussion, we need to first
                explain the meaning of these two fundamental concepts that are
                often confused with one another. Naturally, they are connected,
                but at the same time, they serve completely different purposes.
              </p>
              <p className='blog-post__paragraph'>
                Brand is what makes you distinctly you. Your company’s name,
                logo, colors, and fonts. The visual part is so important here,
                because this is what people remember, often unconsciously. They
                see your logo and know what to expect. That is exactly the goal
                of branding.
              </p>
              <p className='blog-post__paragraph'>
                Branding also includes your company’s values and message. A
                catchy slogan that embodies the company’s personality will stay
                with customers for a long time, building a link between you and
                your clients. A brand is a general vibe that your company has
                and that people, hopefully, enjoy. Its purpose is to create
                long-term, trusting, and loyal relationships with customers.
              </p>
              <p className='blog-post__paragraph'>
                In order to identify your brand, ask yourself this question:
                What will you deliver?
              </p>
              <p className='blog-post__paragraph'>
                If this is the first time you’re dealing with conscious
                branding, it might be a little difficult to answer straight
                away. If that’s the case, here are some additional questions
                that will help you figure out your brand’s characteristics:
              </p>
              <ul className='blog-post__list mx-4'>
                <li className='blog-post__list__item'>What are you?</li>
                <li className='blog-post__list__item'>
                  What makes you unique?
                </li>
                <li className='blog-post__list__item'>
                  What do you want to achieve?
                </li>
                <li className='blog-post__list__item'>What do you value?</li>
              </ul>
              <p className='blog-post__paragraph'>
                Marketing, on the other hand, is the way in which your brand
                reaches customers. It’s the products and services that you sell
                and how you sell them. It includes advertising, promotions,
                campaigns, leads, and channels of communication. Marketing’s
                purpose is to increase sales. That’s why it’s focused on
                specific products and services, rather than the overall image of
                the company. But these two things need to be consistent in order
                for customers to trust you, your brand, and your products.
                Branding builds its credibility on the quality of your
                commodity.
              </p>
              <p className='blog-post__paragraph'>
                The question that identifies marketing would be: How will you
                deliver? You can also ask yourself these additional questions:
              </p>
              <ul className='blog-post__list mx-4'>
                <li className='blog-post__list__item'>How are you unique?</li>
                <li className='blog-post__list__item'>
                  How are you communicating?
                </li>
                <li className='blog-post__list__item'>
                  How are you growing your business?
                </li>
                <li className='blog-post__list__item'>How are you writing?</li>
              </ul>
              <h3 className='main-heading blog-post__heading'>
                Which comes first – the chicken or the egg?
              </h3>
              <p className='blog-post__paragraph'>
                The riddle of the branding-marketing relationship at first can
                seem as unsolvable as the old as time question about the chicken
                and the egg. One comes from the other, and together they create
                an unbreakable cycle. To create a consistent brand you need to
                know who you are and sell products accordingly. But what you
                sell is who you are. You can’t sell cars, but create your brand
                around living room furniture. It wouldn’t make any sense. And to
                gain the trust of your customers, you want to make sense. That’s
                why branding and marketing are intertwined and should be both
                present in your strategies. One cannot exist without considering
                the other.
              </p>
              <p className='blog-post__paragraph'>
                But you have to start somewhere, don’t you? What comes first –
                branding or marketing?
              </p>
              <p className='blog-post__paragraph'>
                Luckily, this riddle is not as endless as the chicken and the
                egg. In fact, we can solve it straight away: You always start
                with branding.
              </p>
              <p className='blog-post__paragraph'>
                Branding is a long-term thing. It seeps into your customers’
                consciousness, grows on them, gradually becoming an integral
                part of their everyday reality. On the other hand, marketing is
                ever-changing, according to the current situation. It’s
                flexible, adjustable, and iterative. If branding is the sea,
                marketing would be all of the currents that flow through it,
                changing in intensity and direction, depending on the season,
                weather, part of the day, etc. But in order for currents to
                flow, first there must be the sea.
              </p>
              <p className='blog-post__paragraph'>
                That’s why branding comes first. If you want to sell
                effectively, you must first know the very basis of your brand.
                What are your values, goals, and messages? How do you want to
                show yourself to the customers? What are your priorities? To
                prepare great commercial offers and apply accurate marketing
                tactics, you must first know and understand your own brand
                inside out. Only then can you integrate both sides of this
                discussion, and let branding and marketing go hand in hand
                toward your success.
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

export default BrandingVsMarketing;
