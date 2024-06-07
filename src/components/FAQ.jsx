import React from "react";

export default function FAQ() {
  return (
    <div class="flex justify-center">
      <div class="space-y-4 w-4/6">
        <h1 class="text-center md:text-5xl">FAQ</h1>
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-gray-900">
              What services do you offer?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-gray-700">
            We offer a wide range of carpentry and home renovation services,
            including flooring, roofing, siding, cabinet installation, and more.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-gray-900">
              How long does a typical project take?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-gray-700">
            The duration of a project can vary based on its scope and
            complexity. A typical project can take anywhere from a few days to
            several weeks.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-gray-900">
              Do you provide free estimates?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-gray-700">
            Yes, we offer free estimates for all potential projects. Please
            contact us to schedule an appointment.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-gray-900">
              Are you licensed and insured?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-gray-700">
            Yes, we are fully licensed and insured to ensure the highest level
            of safety and professionalism in all our projects.
          </p>
        </details>
      </div>
    </div>
  );
}
