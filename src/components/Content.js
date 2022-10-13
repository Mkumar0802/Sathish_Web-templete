import React from "react";
// import Header from "./Header";
import { motion } from "framer-motion";
import Navbar from "./Navbar";


function Content() {
  return (
    <div>
      <Navbar/>
      <div
        className=" min-h-screen hero "
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
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
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-sky-500 rounded-md px-3 py-3">Get Started</button>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Content;
