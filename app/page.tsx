import { Flavours } from "@/components/Flavours";
import { Footer } from "@/components/Footer";
import { Formula } from "@/components/Formula";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Product />
        <Flavours />
        <Formula />
      </main>
      <Footer />
    </>
  );
}
