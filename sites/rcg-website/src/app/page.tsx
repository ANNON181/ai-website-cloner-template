import { Footer } from "@/components/sites/rcg/Footer";
import { Header } from "@/components/sites/rcg/Header";
import { Approach, Contact, Epg, Hero, Intro, Sectors, Services } from "@/components/sites/rcg/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Sectors />
        <Approach />
        <Epg />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
