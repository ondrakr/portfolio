import React from 'react';

interface Experience {
    duration: string;
    company: string;
    position: string;
    description: string;
}

const experiences: Experience[] = [
    {
        duration: '2024 - současnost',
        company: 'POINT.X',
        position: 'front-end developer',
        description: 'V POINT.X působím jako front-end developer se specializací na implementaci responzivního designu v rámci aplikací vyvíjených v jazyce Angular či VUE.js.',
    },
    {
      duration: '2024 - současnost',
      company: 'Integritas.ai',
      position: 'UX/UI designer & frond-end developer',
      description: 'Ve společnosti Integritas.ai se zaměřuji na vývoj uživatelského rozhraní (UI), uživatelské zkušenosti (UX) a responzivního designu aplikací. Při své práci využívám technologie jako MySQL, PHP a framework Bootstrap.',
  },
  {
    duration: '2024 - současnost',
    company: 'coalfamily',
    position: 'web developer & designer & social media manager',
    description: 'V rámci společnosti coalfamily se starám o design a vývoj webových stránek v technologiích jako je React či Chakra UI. Dále se věnuji správě sociálních sítí a tvorbě obsahu pro marketingové kampaně.',
  },
  {
    duration: '2022 - současnost',
    company: 'CERMAT',
    position: 'full-stack developer',
    description: 'Ve státní organizaci CERMAT jsem vytvořil webovou stránku TAU, která slouží k procvičování testů přijímacích zkoušek a maturit. Dále jsem tvůrce informačního webu prihlaskynastredni.cz, který byl v roce 2024 klíčovým zdrojem informací pro uchazeče o střední školy.',
  },
  {
    duration: '2022 - současnost',
    company: 'Veterán Cup Letohrad',
    position: 'marketing and media coordinator',
    description: 'V rámci charitativní akce Veterán Cup Letohrad se starám o marketingové aktivity a spravuji sociální sítě. Nejdříve jsem celé akci vytvořil logo i webové stránky, o které se nyní také starám.',
  },
];

export default function Zkusenosti() {
    return (
      <div className='mt-20'>
        <p className='text-3xl sm:text-5xl text-white text-center font-bold mb-16 mt-24'>
          Zkušenosti
        </p>
        <div className="flex flex-col justify-center items-center container-zkusenosti mx-auto">
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start mb-16 gap-8 sm:gap-12 mx-6 md:mx-0">
                  <p className='text-white bg-linear px-6 py-4 rounded-xl whitespace-nowrap self-start'>{experience.duration}</p>
                  <div className="flex items-start gap-8">
                    <div className="relative flex items-start">
                        <div className="w-6 h-6 min-w-6 min-h-6 rounded-full bg-fialova zkusenosti-shadow shadow mt-3" style={{ filter: 'drop-shadow(0px 0px 10px #CBACF9)' }}></div>
                        <div className="absolute top-14 left-1/2 w-[3px] h-[6rem] bg-white mt-2 transform -translate-x-1/2 opacity-20"></div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className="font-bold text-white text-2xl sm:text-4xl">{experience.company}</h3>
                        <p className="text-lg font-light text-lg text-fialova">{experience.position}</p>
                        <p className="text-white text-sm sm:text-md font-light mt-4">{experience.description}</p>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      </div>
    );
}
