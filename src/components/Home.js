import React from "react";
import Blog from "./Blog";

import Content from "./Content";
import Features from "./Features";

import Footer from "./Footer";
import Form from "./Form";

// import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Content />

      <Features />
      <Blog />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
