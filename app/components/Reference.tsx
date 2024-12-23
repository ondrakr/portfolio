import React from 'react';
import Star from "../../public/icons/Star";

// Definice typů pro props
interface ReferenceProps {
  jmeno: string;
  firma: string;
  citace: string;
  fotka: string; // Přidání typu pro URL fotky
}

const Reference: React.FC<ReferenceProps> = ({ jmeno, firma, citace, fotka }) => {
  return (
    <div className="reference-card flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-16 my-16">
      <div className="flex items-center space-x-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-fialova"><Star /></span>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-white text-md font-light">"{citace}"</p>
        <h3 className="font-bold text-white text-2xl sm:text-4xl mt-4">{jmeno}</h3>
        <p className="text-lg font-light text-lg text-fialova">{firma}</p>
      </div>
      <div className="w-32 h-32 sm:w-64 sm:h-64 mt-[-2rem]">
        <img src={fotka} alt={jmeno} className="rounded-full w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default function Zkusenosti() {
  const referenceData = [
    {
      jmeno: 'Filip Červinka',
      firma: 'ředitel marketingu, coalfamily',
      citace: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
      fotka: './images/filip-cervinka.jpg',
    },
    {
      jmeno: 'Martin Motyčka',
      firma: 'hlavní organizátor, Veterán Cup Letohrad',
      citace: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
      fotka: './images/filip-cervinka.jpg',
    },
  ];

  return (
    <div className="mt-20">
      <p className="text-3xl sm:text-5xl text-white text-center font-bold mb-16 mt-24">Reference</p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center container-zkusenosti mx-auto">
        {referenceData.map((reference, index) => (
          <Reference key={index} {...reference} />
        ))}
      </div>
    </div>
  );
}
