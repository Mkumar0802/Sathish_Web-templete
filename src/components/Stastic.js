import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";

function Stastic() {
  return (
    <div class="">
      <div className="bg-gray-900 ">
        <div class="container mx-auto py-24">
          <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
            <div className="">
              <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-sky-500 md:leading-tight sm:text-left md:text-4xl ">
                Clear overview for efficient tracking
              </h2>
              <p class="mb-5 text-base text-justify text-white sm:text-left md:text-lg">
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </p>
              <Link to="/home" class="w-full btn btn-dark btn-lg sm:w-auto">
                Learn More
              </Link>
              <div class="">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="" style={{ height: 100 }}>
                      <div className="grid grid-flow-row grid-cols-3 p-3 mt-5 mb-5 text-base text-justify text-white sm:text-left md:text-lg ">
                        <div class="">
                          <h2 class="title-font font-medium text-3xl ">
                            {isVisible ? (
                              <CountUp start={0} end={100} delay={0} />
                            ) : null}
                            +
                          </h2>
                          <p class="leading-relaxed">Subscribes</p>
                        </div>
                        <div class="">
                          <h2 class="title-font font-medium text-3xl text-white">
                            {isVisible ? (
                              <CountUp start={0} end={100} delay={1} />
                            ) : null}
                            +
                          </h2>
                          <p class="leading-relaxed ">Downloads</p>
                        </div>
                        <div class="">
                          <h2 class="title-font font-medium text-3xl text-white">
                            {isVisible ? (
                              <CountUp start={0} end={100} delay={2} />
                            ) : null}
                            +
                          </h2>
                          <p class="leading-relaxed ">Products</p>
                        </div>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </div>

            <div class="space-y-10">
              <img
                className="grid items-center h-3/5 rounded-xl"
                // src="https://res.cloudinary.com/dtlhsyzip/image/upload/v1666372658/39cdbbaf-0daa-4bf4-84e4-ec72e63d2ce1_lmhqso.jpg"
                src="https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="just"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stastic;
