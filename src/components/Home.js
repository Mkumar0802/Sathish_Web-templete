import React, { useRef } from "react";
import Blog from "./Blog";

import Content from "./Content";
import Features from "./Features";
import { useInView } from "framer-motion";
import Footer from "./Footer";
import Form from "./Form";

import Testimonial from "./Testimonial";
import { motion, useScroll } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className=" fixed inset-x-0 h-2 top-0 bg-blue-600 text-2xl font-medium text-red-500 text-center p-0.5 leading-none rounded-l-full
  transform-origin: 0%"
        style={{ scaleX: scrollYProgress }}
      />
      <Section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
        {" "}
        <Content />{" "}
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <Blog />
      </Section>
      <Section>
        <Testimonial />
      </Section>
      <Section>
        <Form />
      </Section>

      <Footer />
    </div>
  );
}

export default Home;
