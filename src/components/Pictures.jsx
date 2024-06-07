import React from "react";
import DeckImage from "../images/deck.jpg";
import MaroonRoom from "../images/maroonroom.jpg";
import Stairs from "../images/stairs.jpg";
export default function Pictures() {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Previous Work
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            Take a look below at some of our exemplary work. From outdoors to
            indoors, we've got you covered.
          </p>
        </header>

        <ul class="grid  grid-cols-1 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <a href="#" class="relative block group">
              <img
                src={Stairs}
                alt=""
                class="object-cover  transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white rounded-lg bg-opacity-95 bg-black p-3">
                  Stairs
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="relative block group">
              <img
                src={MaroonRoom}
                alt=""
                class="object-cover  transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white rounded-lg bg-opacity-95 bg-black p-3">
                  Interiors
                </h3>
              </div>
            </a>
          </li>

          <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" class="relative block group">
              <img
                src={DeckImage}
                alt=""
                class="object-cover  transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white bg-opacity-95 bg-black rounded-lg p-3">
                  Patios
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
