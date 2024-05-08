import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[#050505] min-h-screen flex static px-[10vw]">
      <Header />
      <Hero />
    </div>
  );
}
