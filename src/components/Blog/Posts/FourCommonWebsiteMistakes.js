import React from "react";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Navbar from "../../Navbar/Navbar";
import NavbarAlt from "../../NavbarAlt/NavbarAlt";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import BlogPostForm from "../BlogPostForm";
import RelatedPosts from "../RelatedPosts";

import brandMarketing from "../../SingleService/BrandMarketing/BrandMarketing";

import authorImg from "../../../assets/img/author-img.jpeg";
import blogBreadcrumbBg from "../../../assets/img/blog/blog-breadcrumb-bg.jpeg";

import "./ThePowerOfStoryTelling.css";
import quote from "../../../UIKit/Icons/quote.svg";

const FourCommonWebsiteMistakes = () => {
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
                01. 12. 2022. / STORYWOXX / WEBSITE, DESIGN
              </p>
              <h1 className='blog-post-title text-accent'>
                Four Common Website Design Mistakes
              </h1>
            </div>
            <Image src={quote} alt='quote-svg' className='quote-svg' />
          </div>
          <div className='blog-post-content py-5'>
            <p className='sub-heading pb-2'>STORYWOXX / WEBSITE, DESIGN</p>
            <div className='blog-post__paragraphs d-flex flex-column gap-4'>
              <p className='blog-post__paragraph lead-text'>
                Website design is such a fun thing to do. It’s like building a
                whole new little world that looks and works exactly the way we
                want it to. But, as much as we love creative challenges, there
                are certain rules that need to be followed in order for your
                website to not only satisfy your taste but also be useful and
                welcoming to all of the people that will be visiting it. To help
                you avoid traps that website creators often fall into, we’ve
                compiled this list of 10 common website design mistakes, and how
                to deal with them.
              </p>
              <div className='blog-post__subsection'>
                <p className='blog-post__subtitle'>
                  Mistake #1: Too much text on top of photos
                </p>
                <div className='d-flex flex-column gap-3'>
                  <p className='blog-post__paragraph'>
                    When it comes to website design, everyone loves good
                    visuals. But the visual content of the website often needs
                    to be backed up by some text. The visitor must be able to
                    quickly understand what your page is all about. It’s also
                    important to spark interest or curiosity in your website
                    guests. The best way to achieve this is by combining
                    intricate visuals with engaging textual commentary. However,
                    you have to be careful. Placing too much text on top of your
                    photo will make the whole thing hard to read.
                  </p>
                  <p className='blog-post__paragraph'>
                    If you have to place text on a photo, remember – colour
                    contrast is your biggest friend. You need to establish a
                    great relationship with this part of your work because it’s
                    a natural element of every web designing process. Luckily,
                    there are a few simple methods of achieving accurate colour
                    contrast, despite having to put a lot of text on top of a
                    photo.
                  </p>
                </div>
              </div>
              <div className='blog-post__subsection d-flex flex-column gap-2'>
                <p className='blog-post__paragraph'>Possible solutions:</p>
                <ul className='blog-post__list mx-4'>
                  <li className='blog-post__list__item'>
                    Use homogeneous, dark backgrounds.
                  </li>
                  <li className='blog-post__list__item'>
                    Turn down the brightness of your photo (make it about 40%
                    darker).
                  </li>
                  <li className='blog-post__list__item'>
                    Put a dark square over your photo, and place the text on top
                    of it.
                  </li>
                </ul>
              </div>
              <div className='blog-post__subsection'>
                <p className='blog-post__subtitle'>
                  Mistake #2: Too many words in one verse
                </p>
                <div className='d-flex flex-column gap-3'>
                  <p className='blog-post__paragraph'>
                    To make your website pleasant and easy to use, you must
                    consider your readers’ attention span. The optimal number of
                    words in one verse shouldn’t be higher than 12. If you cross
                    this limit, the reader can get distracted and give up on
                    reading.
                  </p>
                </div>
              </div>
              <div className='blog-post__subsection d-flex flex-column gap-2'>
                <p className='blog-post__paragraph'>Worth remembering:</p>
                <ul className='blog-post__list mx-4'>
                  <li className='blog-post__list__item'>
                    Stick to 9-12 words per verse.
                  </li>
                </ul>
              </div>
              <div className='blog-post__subsection'>
                <p className='blog-post__subtitle'>
                  Mistake #3: Too many fonts
                </p>
                <div className='d-flex flex-column gap-3'>
                  <p className='blog-post__paragraph'>
                    Fonts are pretty. We get it. And we admire their diverse
                    styles, too! However, in website design, it’s often worth
                    following the rule: less is more. When dealing with fonts
                    you have a perfect opportunity to apply that rule. If you
                    get carried away and use too many different fonts, your
                    website will look messy and will be harder to read.
                  </p>
                </div>
              </div>
              <div className='blog-post__subsection d-flex flex-column gap-2'>
                <p className='blog-post__paragraph'>Practical tips:</p>
                <ul className='blog-post__list mx-4'>
                  <li className='blog-post__list__item'>
                    Use 2-3 different fonts on your page. Don’t get too crazy.
                  </li>
                  <li className='blog-post__list__item'>
                    Choose the fonts according to their purposes – 1 for
                    headers, 1 for your body content.
                  </li>
                  <li className='blog-post__list__item'>
                    Make sure that your chosen fonts look good together.
                  </li>
                </ul>
              </div>
              <div className='blog-post__subsection'>
                <p className='blog-post__subtitle'>
                  Mistake #4: Inaccurate content placement
                </p>
                <div className='d-flex flex-column gap-3'>
                  <p className='blog-post__paragraph'>
                    Remember the rule: less is more? It certainly is applicable
                    when we talk about placing text on top of photos and images.
                    However, sometimes, if you’re trying too hard to be
                    minimalistic, your design might end up feeling… empty. Not
                    only will it look unprofessional and unfinished, but can
                    also lead to confusing your visitors. If they scroll down
                    the page and see nothing but an empty space, they might come
                    to the conclusion that they’ve arrived at the end of your
                    page, and not bother scrolling all the way down. If that
                    happens, a big part of your content might get overlooked.
                    And we bet you wouldn’t want that.
                  </p>
                </div>
              </div>
              <div className='blog-post__subsection d-flex flex-column gap-2'>
                <p className='blog-post__paragraph'>Possible solution:</p>
                <ul className='blog-post__list mx-4'>
                  <li className='blog-post__list__item'>
                    Always make sure that there is something visible in the
                    range of your sight while scrolling through your pages.
                  </li>
                  <li className='blog-post__list__item'>
                    Avoid awkwardly large empty spaces in between your sections.
                  </li>
                  <li className='blog-post__list__item'>
                    Make sure to check your website responsiveness. It might
                    look good on your laptop, but gets all messed up on other
                    devices with bigger or smaller screens. Check different
                    options and make necessary adjustments.
                  </li>
                </ul>
              </div>
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

export default FourCommonWebsiteMistakes;
