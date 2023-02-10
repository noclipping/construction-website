export default function Stats() {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Pennsylvania Residents
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Providing close care and attention to any project that comes our
            way, we have helped a large portion of the community build and
            expand their homes.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Customers Served
              </dt>

              <dd class="text-4xl font-extrabold text-amber-600 md:text-5xl">
                37
              </dd>
            </div>

            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Available Services
              </dt>

              <dd class="text-4xl font-extrabold text-amber-600 md:text-5xl">
                17
              </dd>
            </div>

            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Availability
              </dt>

              <dd class="text-4xl font-extrabold text-amber-600 md:text-5xl">
                24/7
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
