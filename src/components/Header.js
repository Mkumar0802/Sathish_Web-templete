import React from "react";

function Header() {
  return (
    <section class=" ">
      {" "}
      <header class=" top-0 w-full  z-40 backdrop-blur-xl  fixed">
        {" "}
        <div class="flex items-center justify-between p-4 mx-auto max-w-7xl">
          {" "}
          <p>Logo</p> <button class="btn btn-light">Contact Us</button>{" "}
        </div>{" "}
      </header>{" "}
    </section>
  );
}

export default Header;
