"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center  py-2 shadow-md">
        <div className="logo mx-5">
          <a href="/">
            <Image width={100} height={40} src="/logo.png" alt="" />
          </a>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-4 font-bold md:text-xl">
            <Link href={"/tshirts"} legacyBehavior>
              <a>
                <li>Tshirts</li>
              </a>
            </Link>
            <Link href={"/hoodies"} legacyBehavior>
              <a>
                <li>Hoodies</li>
              </a>
            </Link>
            <Link href={"/stickers"} legacyBehavior>
              <a>
                <li>Stickers</li>
              </a>
            </Link>
            <Link href={"/mugs"} legacyBehavior>
              <a>
                <li>Mugs</li>
              </a>
            </Link>
            <Link href={"/customerreg"} legacyBehavior>
              <a>
                <li>Customer Reg</li>
              </a>
            </Link>
          </ul>
        </div>
        <div
          onClick={toggleCart}
          className=" cursor-pointer cart absolute right-0 top-2 mx-5"
        >
          <IoCartOutline className=" text-4xl md:text-6xl lg:text-6xl" />
        </div>

        <div
          ref={ref}
          className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full"
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
          >
            <IoIosCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>

            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>

            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>

            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>

            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>

            <li>
              <div className="item flex my-5">
                <div className="w-2/3 ">T-Shirt - Wear the code</div>
                <div className="flex items-center justify-center w-1/3 font-semibold">
                  <FaCircleMinus className="cursor-pointer text-pink-500" />{" "}
                  <span className="mx-2 text-sm">1</span>{" "}
                  <FaCirclePlus className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>
          </ol>

          <div className="flex">
            <button className=" cursor-pointer mr-2 flex text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <IoBagCheckSharp className="m-1" />
              Checkout
            </button>

            <button className=" cursor-pointer flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
