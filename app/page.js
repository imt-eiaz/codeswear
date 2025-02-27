import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import home from "../public/home.png";
import Image from "next/image";
import Content from "./components/Content";
import Link from "next/link";

export default function Home() {
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
