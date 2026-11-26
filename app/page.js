import Image from "next/image";
import Homepage from "./(pages)/home/page.jsx";
import Navbar from "./(components)/navbar/Navbar.jsx";
import Hero from "./(components)/hero/Hero.jsx";
import About from "./(components)/about/About.jsx";
import Destinations from "./(components)/destination/Destination.jsx";
import Process from "./(components)/process/Process.jsx";
import Footer from "./(components)/footer/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Process />
      <Footer />
    </div>
  );
};
