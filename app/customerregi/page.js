"use client";
import React, { useState } from "react";
import Link from "next/link";
import input from "react";

const page = () => {
  const [name, setName] = useState({ firstName: "", lastName: "", mobile: "" });
  return (
    <>
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-5 mb-4 text-gray-900">
          PhoneBox Customer Regi
        </h1>
      </div>
    </>
  );
};

export default page;
