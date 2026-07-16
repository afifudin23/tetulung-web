import Hero from "../sections/home/Hero";
import About from "../sections/home/About";
import Services from "../sections/home/Services";
import Development from "../sections/home/Development";
import CtaBanner from "../sections/home/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Development />
      <CtaBanner />
    </main>
  );
}
