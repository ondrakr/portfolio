import React, { useState, useRef } from 'react';
import ArrowLeft from '../../public/icons/ArrowLeft';
import ArrowRight from '../../public/icons/ArrowRight';

interface CardProps {
  title: string;
  image: string;
}

function Card({ title, image }: CardProps) {
  return (
    <div className="bg-linear rounded-2xl p-6 text-center border border-10 flex flex-col items-center gap-4 md:gap-6 w-[150px] h-[140px] md:w-[200px] md:h-[180px]">
      <img src={image} alt={title} className='h-8 md:h-12'/>
      <p className="text-sm md:text-lg text-white font-medium tracking-wide w-[90%] md:w-[80%]" dangerouslySetInnerHTML={{ __html: title }}></p>
    </div>
  );
}

export default function Grafika() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRefTech = useRef<HTMLDivElement>(null);

  const cardsGrafika: CardProps[] = [
    { title: "Adobe Photoshop", image: "./projekt-images/photoshop.png" },
    { title: "Adobe Illustrator", image: "./projekt-images/illustrator.png" },
    { title: "Adobe InDesign", image: "./projekt-images/indesign.png" },
    { title: "Adobe Premiere Pro", image: "./projekt-images/premiere.png" },
    { title: "Figma", image: "./projekt-images/figma.png" },
    { title: "Davinci Resolve", image: "./projekt-images/davinci.png" },
    { title: "Canva", image: "./projekt-images/canva.png" },
  ];

  const cardsTechnologie: CardProps[] = [
    { title: "HTML", image: "./projekt-images/html.png" },
    { title: "CSS", image: "./projekt-images/css.png" },
    { title: "JavaScript", image: "./projekt-images/js.png" },
    { title: "PHP", image: "./projekt-images/php.png" },
    { title: "React", image: "./projekt-images/react.png" },
    { title: "C#", image: "./projekt-images/c-sharp.png" },
    { title: "Tailwind", image: "./projekt-images/tailwind.png" },
    { title: "MySQL", image: "./projekt-images/mysql.png" },
    { title: "Chakra UI", image: "./projekt-images/chakra.png" },
    { title: "SASS", image: "./projekt-images/sass.png" },
    { title: "VUE.js", image: "./projekt-images/vue.png" },
    { title: "TypeScript", image: "./projekt-images/typescript.png" },
    { title: "Oracle SQL", image: "./projekt-images/oracle.png" },
  ];

  const visibleCards = 5;

  const handlePrevClick = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.scrollWidth / cardsGrafika.length;
      const newScroll = Math.max(currentScroll - cardWidth, 0);
      containerRef.current.scrollLeft = newScroll;
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.scrollWidth / cardsGrafika.length;
      const newScroll = Math.min(currentScroll + cardWidth, containerRef.current.scrollWidth - containerRef.current.clientWidth);
      containerRef.current.scrollLeft = newScroll;
    }
  };

  const handlePrevClickTech = () => {
    if (containerRefTech.current) {
      const currentScroll = containerRefTech.current.scrollLeft;
      const cardWidth = containerRefTech.current.scrollWidth / cardsTechnologie.length;
      const newScroll = Math.max(currentScroll - cardWidth, 0);
      containerRefTech.current.scrollLeft = newScroll;
    }
  };

  const handleNextClickTech = () => {
    if (containerRefTech.current) {
      const currentScroll = containerRefTech.current.scrollLeft;
      const cardWidth = containerRefTech.current.scrollWidth / cardsTechnologie.length;
      const newScroll = Math.min(currentScroll + cardWidth, containerRefTech.current.scrollWidth - containerRefTech.current.clientWidth);
      containerRefTech.current.scrollLeft = newScroll;
    }
  };

  return (
    <div className='my-16 md:my-32'>
      {/* Grafické programy */}
      <p className='text-3xl md:text-4xl text-white text-center font-semibold mb-8 md:mb-16'>Grafické programy</p>
      <div className="flex justify-center items-center programs-container mx-auto">
        <button
          className="text-white p-4 md:p-6"
          onClick={handlePrevClick}
        >
          {<ArrowLeft />}
        </button>
        <div className="relative w-full overflow-x-auto" ref={containerRef} style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6">
            {cardsGrafika.map((card, index) => (
              <div className="flex-shrink-0" key={index}>
                <Card title={card.title} image={card.image} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="text-white p-4 md:p-6"
          onClick={handleNextClick}
        >
          {<ArrowRight />}
        </button>
      </div>

      {/* Technologie */}
      <p className='text-3xl md:text-4xl text-white text-center font-semibold mb-8 md:mb-16 mt-16 md:mt-24'>Technologie</p>
      <div className="flex justify-center items-center programs-container mx-auto">
        <button
          className="text-white p-4 md:p-6"
          onClick={handlePrevClickTech}
        >
          {<ArrowLeft />}
        </button>
        <div className="relative w-full overflow-x-auto" ref={containerRefTech} style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6">
            {cardsTechnologie.map((card, index) => (
              <div className="flex-shrink-0" key={index}>
                <Card title={card.title} image={card.image} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="text-white p-6"
          onClick={handleNextClickTech}
        >
          {<ArrowRight />}
        </button>
      </div>
    </div>
  );
}
