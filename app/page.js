import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import home from "../public/home.png";
import Image from "next/image";
import Hero from "./components/Hero";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
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
        ;
      </div>

      <Content />
      <Footer />
    </>
  );
}
