import React from "react";

function Team() {
  return (
    <div>
      <section class="bg-gray-900">
        <div class="container  py-10 mx-auto">
          <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
              <h1 class="btn-primary-heading">Our Team</h1>

              <p class="mb-5 text-base text-justify text-white sm:text-left md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                incidunt ex placeat modi magni quia error alias, adipisci rem
                similique, at omnis eligendi optio eos harum.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  class="object-cover rounded-xl aspect-square"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold text-white">John Doe</h1>

                <p class="mt-2 capitalize text-gray-300">
                  Full stack developer
                </p>
              </div>

              <div>
                <img
                  class="object-cover rounded-xl aspect-square"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold capitalize text-white">
                  Mia
                </h1>

                <p class="mt-2 capitalize text-gray-300">Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
