"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import home from "../public/home.png";
import Image from "next/image";
import Content from "./components/Content";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = uSeState(0);
  useEffect(() => {
    console.log("hey i am useeffect from _app.js");
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", "myCart");
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <div>
        <Image
          src={home}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <Content />
    </>
  );
}
