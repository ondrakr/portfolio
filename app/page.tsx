'use client';

import Header from "./components/Header";
import Nabidka from "./components/Nabidka";
import GrafikaTechnologies from "./components/GrafikaTechnologies";
import Zkusenosti from "./components/Zkusenosti";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative m-0 p-0 overflow-hidden">

      <Navbar />
      <Header />
        <Nabidka />
        <GrafikaTechnologies />
        <Projects />
        <Zkusenosti />
        {/*<Reference />*/}
        <Contact />
    </main>
  );
}