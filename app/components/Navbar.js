import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
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
          </ul>
        </div>
        <div className="cart absolute right-0 top-2 mx-5">
          <IoCartOutline className=" text-4xl md:text-6xl lg:text-6xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
