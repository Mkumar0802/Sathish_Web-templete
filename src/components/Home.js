import React from "react";
import Card from "./Card";
import Content from "./Content";
import Features from "./Features";
import Features1 from "./Features1";
import Footer from "./Footer";

import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Content />
 
      <Features/>
     <Features1/>
      <Testimonial />
    </div>
  );
}

export default Home;
