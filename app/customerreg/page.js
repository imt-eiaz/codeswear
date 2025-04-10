import React from "react";
import Link from "next/link";
import input from "react";

const page = () => {
  return (
    <>
      <div>
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  PhoneBox Customer Registration
                </h1>
              </div>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Booking date
                  </label>

                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Delivery date
                  </label>

                  <input
                    type="date"
                    id="dd"
                    name="dd"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Received date
                  </label>

                  <input
                    type="date"
                    id="rd"
                    name="rd"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Tracking ID
                  </label>

                  <input
                    type="number"
                    id="dob"
                    name="dob"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <br></br>
              <br></br>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Product Details
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Repair
                  </label>

                  <input
                    type="search"
                    id="contact"
                    name="contact"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Pin or Password
                  </label>

                  <input
                    type="number"
                    id="dob"
                    name="dob"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Price (in £)
                  </label>

                  <input
                    type="number"
                    id="dob"
                    name="dob"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <br></br>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Customer Notes
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="relative flex w-full justify-center py-10">
                <button class="text-white bg-green-500 border-1 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
