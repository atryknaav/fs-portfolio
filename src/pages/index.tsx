import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[#050505] min-h-screen flex-col static px-[10vw]">
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
