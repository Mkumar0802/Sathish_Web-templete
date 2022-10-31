import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
// import Navbar from "./Navbar";
import { Link } from "react-scroll";
// import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function Content() {
  return (
    <div>
      <Header />
      <div
        className="min-h-screen hero"
        style={{ backgroundImage: `url("https://source.unsplash.com/random")` }}
      >
        <div></div>
        <div className="bg-black hero-overlay bg-opacity-60"></div>

        <div className="text-center hero-content text-neutral-content">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">WHO WE ARE ?</h1>
            <p className="mb-5 text-white">
              We are SKS Wedding Photography & Videography Service...As a
              professional wedding videographer and photographer from Chennai,
              Tamilnadu. We have nearly a decade of experience in modern
              photography and videography. Our dedicated & passionate
              professionals will photograph very precious moments of this great
              event of your life passionately.
            </p>
            <Link
              to="form"
              activeClass="active"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              {" "}
              <button className="px-3 py-3 rounded-md bg-sky-500">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
