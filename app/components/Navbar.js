import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
        <div className="logo mx-5">
          <Image width={100} height={40} src="/logo.png" alt="" />
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-2 font-bold md:text-xl">
            <Link href={"/"} legacyBehavior>
              <a>
                <li>Tshirts</li>
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <li>Hoodies</li>
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <li>Stickers</li>
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <li>Mugs</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 top-2 mx-5">
          <button>Cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
