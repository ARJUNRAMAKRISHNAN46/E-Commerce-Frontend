import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testinomials from "@/components/Testinomials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProduct />
      <Testinomials />
    </main>
  );
}
