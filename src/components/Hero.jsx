import { useEffect } from "react";
import Typewriter from "./Typewriter";
export default function Hero({ scrollToContact }) {
  return (
    <section class="relative bg-[url(https://freerangeamerican.us/wp-content/uploads/2019/08/CarpenterProfileCover.jpg)] bg-cover bg-center bg-no-repeat text-white">
      <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us build your next
            <strong class="block font-extrabold text-amber-500" id="text">
              <Typewriter />
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Pennwoods is a hometown construction company that gets your job done
            right. Allow us to help, today.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              onClick={scrollToContact}
              class="block w-full rounded bg-amber-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-700 focus:outline-none focus:ring active:bg-amber-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-amber-800 shadow hover:text-amber-700 focus:outline-none focus:ring active:text-amber-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
