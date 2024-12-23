'use client';

import Header from "./components/Header";
import Nabidka from "./components/Nabidka";
import Grafika from "./components/GrafikaTechnologies";
import Zkusenosti from "./components/Zkusenosti";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Nabidka />
      <Grafika />
      <Projects />
      <Zkusenosti />
      <Reference />
      <Contact />
    </div>
  );
}