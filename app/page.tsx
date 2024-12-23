'use client';

import Header from "./components/Header";
import Nabidka from "./components/Nabidka";
import Grafika from "./components/GrafikaTechnologies";
import Zkusenosti from "./components/Zkusenosti";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="z-100">
      <Navbar />
      </div>
      <div className="relative">
      <Header />
      </div>
      <Nabidka />
      <Grafika />
      <Projects />
      <Zkusenosti />
      <Reference />
      <Contact />
    </div>
  );
}