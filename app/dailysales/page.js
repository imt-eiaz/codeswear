"use client";
import React, { useState } from "react";
import Link from "next/link";
import input from "react";

const page = () => {
  const [name, setName] = useState({ qty: "", price: "" });

  return (
    <>
      <div>
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex flex-col text-center w-full mb-4">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-900">
                  <label class="underline">PhoneBox Daily Sales</label>
                </h1>
                Quatity: {name.qty}
                <br />
                Price : {name.price}
                <br />
                Total : {name.qty * name.price}
              </div>
              <div class="flex flex-col text-left w-full mb-4  px-5 py-10 mx-auto">
                <h1 class="sm:text-3xl text-l font-medium title-font mb-1 text-gray-900">
                  Staff : IMTIAZ
                </h1>
                <h1 class="sm:text-3xl text-l font-medium title-font mb-1  text-gray-900">
                  Accessories : £250
                </h1>
                <h1 class="sm:text-3xl text-l font-medium title-font mb-1 text-gray-900">
                  Phone Sold : £450
                </h1>
                <h1 class="sm:text-3xl text-l font-medium title-font mb-1 text-gray-900">
                  Repair : £300
                </h1>
              </div>

              <div class="flex lg:w-2/3  sm:flex-row flex-col mx-auto px-5 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow ">
                  <label
                    for="full-name"
                    class="leading-7 text-xl  font-bold text-black "
                  >
                    Date :
                  </label>

                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    class=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 mx-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <br />
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
                    Quantity
                  </label>

                  <input
                    onChange={(e) => setName({ ...name, qty: e.target.value })}
                    value={name.qty}
                    type="number"
                    id="qty"
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
                    onChange={(e) =>
                      setName({ ...name, price: e.target.value })
                    }
                    value={name.price}
                    type="number"
                    id="price"
                    name="dob"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-2">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600 "
                  >
                    Total(in £)
                  </label>
                  <label
                    for="full-name"
                    class=" text-l  font-bold text-black "
                  ></label>
                </div>
              </div>
              <div class="relative flex w-full justify-center py-10">
                <button class="text-white bg-green-500 cursor-pointer border-1 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Calculate
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
