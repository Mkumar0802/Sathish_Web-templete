import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="bg-gray-900 ">
      <div class="container mx-auto py-24  ">
        <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-sky-500 md:leading-tight sm:text-left md:text-4xl ">
              Decide how you integrate Payments
            </h2>
            <p class="mb-5 text-base text-justify text-white sm:text-left md:text-lg">
              I am a wedding photographer based in Chennai I record marriage
              moments from a special “cafa” angle, and create love memories with
              passion. I have won some awards of Times of India in the first
              three years of my carreer. I am not a story-maker, but a
              story-teller, telling the love stories in an artistically way. I
              provide service beyond Chennai area.
            </p>
            <Link to="/home" class="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </Link>
          </div>

          <div class=" ">
            <img
              className="h-3/5 rounded-xl"
              src="https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              // src="https://res.cloudinary.com/dtlhsyzip/image/upload/v1665860818/7dd56ead-278c-41d2-b38c-5b4bae7a2788_km1rl2.jpg"
              alt="just"
            />
          </div>
        </div>

        <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-sky-500 md:leading-tight sm:text-left md:text-4xl">
              Decide how you integrate Payments
            </h2>
            <p class="mb-5 text-base text-justify text-white sm:text-left md:text-lg">
              Wedding Photography Quotes We have complied a list of wedding
              photography quotes for your enjoyment.? Being a photographer is
              serious business to us and I can relate to a lot of these quotes.?
              Feel free to read through these quotes and become inspired.? You
              will find some of the greatest photographers writing about their
              love, the art of photography.
            </p>
            <Link to="/home" class="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </Link>
          </div>
          <div class=" ">
            {" "}
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              // src="https://res.cloudinary.com/dtlhsyzip/image/upload/v1665860905/WhatsApp_Image_2022-10-14_at_2.06.16_PM_e8tbla.jpg"
              alt="just"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
