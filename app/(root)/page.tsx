import Collections from "../components/Collections";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Image from "next/image";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <About />
      <Timeline />

      <ProductList />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
