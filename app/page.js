"use client";

import wall from "./public/wall.jpg";
import Image from "next/image";
import Content from "./components/Content";
import { useEffect, useState } from "react";

import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      light: "#6fbf73",
    },
    secondary: {
      main: "#ffeb3b",
      light: "#ffef62",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
        flexDirection: "row-reverse",
      },
    },
  },
  components: {
    MuiIconButton: {
      // defaultProps: {
      // MuiIconButton: {
      disableRipple: false,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

export default function Home() {
  const classes = useStyles();

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    console.log("hey i am useeffect from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", "myCart");
    let subt = 0;
    let keys = Object.keys(cart);
    for (let i = 0; keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
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
      <ThemeProvider theme={theme}>
        <div>
          <Image
            src={wall}
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <Content
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
        />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
