import React, { Fragment } from "react";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

import bgImage from "../../assets/img/banner/contact-us-banner.jpg";

import SayHi from "../SayHi/SayHi";
import Footer from "../Footer/Footer";
import MapContainer from "../MapContainer/MapContainer";

const ContactUs = () => {
  return (
    <Fragment>
      <NavbarAlt
        bgImage={bgImage}
        pageTitle='Contact Us'
        breadcrumbs='Home / Contact Us'
      />
      <MapContainer />
      <SayHi />
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
