import React from 'react';

interface Experience {
    duration: string;
    company: string;
    position: string;
    description: string | React.ReactNode;
}

const experiences: Experience[] = [
  {
    duration: 'březen 2025 - současnost',
    company: '3D Fitness',
    position: 'graphic designer',
    description: 'V 3D Fitness působím jako grafický designer, převážně se zaměřuji na tvorbu grafických materiálů (bannery, plakáty, brožury, prezentace) dle stávající vizuální identity společnosti.',
},  
  {
        duration: 'listopad 2024 - únor 2025',
        company: 'POINT.X',
        position: 'front-end developer',
        description: 'V POINT.X jsem působil jako front-end developer se specializací na implementaci responzivního designu v rámci aplikace vyvíjené v jazyce Angular.',
    },
    {
      duration: 'září 2024 - současnost',
      company: 'Integritas.ai',
      position: 'UX/UI designer & frond-end developer',
      description: <>Ve společnosti Integritas.ai se zaměřuji na vývoj uživatelského rozhraní (UI), uživatelské zkušenosti (UX) a responzivního designu aplikací. Vyvinuli jsme aplikaci <a href="https://trenujnacermat.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">Trénuj na Cermatu</a>, která slouží k procvičování testů přijímacích zkoušek a maturit, kterou budeme dále rozvíjet.</>,
  },
  {
    duration: 'květen 2024 - současnost',
    company: 'coalfamily',
    position: 'web developer & designer & social media manager',
    description: <>Ve společnosti coalfamily zastávám pozici web developera a designera, kde se specializuji na vývoj a design moderních webových stráncek s využitím technologií jako je React, Next.js, Tailwind CSS a Chakra UI. Mezi mé realizované projekty patří vývoj webů <a href="https://tenisdobrouc.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">tenisdobrouc.cz</a> a <a href="https://stprogress.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">stprogress.cz</a> dle zadaného návrhu. V Shopify jsem vytvořil e-shop <a href="https://jannyjerky.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">jannyjerky.cz</a>. </>,
  },
  {
    duration: '2022 - 2025',
    company: 'CERMAT',
    position: 'full-stack developer',
    description: <>Ve státní organizaci CERMAT jsem vytvořil webovou aplikaci <a href="https://tau.cermat.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">TAU</a>, která slouží k procvičování testů přijímacích zkoušek a maturit. Dále jsem tvůrce informačního webu <a href="https://prihlaskynastredni.cz" target="_blank" rel="noopener noreferrer" className="text-fialova hover:underline">prihlaskynastredni.cz</a>, který byl v roce 2024 klíčovým zdrojem informací pro uchazeče o střední školy.</>,
  },
  {
    duration: '2022 - současnost',
    company: 'Veterán Cup Letohrad',
    position: 'marketing and media coordinator',
    description: <>V rámci charitativní akce Veterán Cup Letohrad se starám o marketingové aktivity a spravuji sociální sítě. Nejdříve jsem celé akci vytvořil logo i webové stránky, o které se nyní také starám. <a href="#projekty" className="text-fialova hover:underline inline-flex items-center gap-1 mt-2" onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector('#projekty');
      if (element) {
        const veteranSection = document.querySelector('[data-project="veteran-cup"]');
        if (veteranSection) {
          veteranSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }}>
      Zjistit více
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a></>,
  },
];

export default function Zkusenosti() {
    return (
      <div className='mt-20' id="zkusenosti">
        <p className='text-3xl sm:text-5xl text-white text-center font-bold mb-16 mt-24'>
          Zkušenosti
        </p>
        <div className="flex flex-col justify-center items-center container-zkusenosti mx-auto">
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start mb-16 gap-8 sm:gap-12 mx-6 md:mx-0">
                  <p className='text-white bg-linear px-6 py-4 rounded-xl whitespace-nowrap self-start text-center w-[16rem] min-w-[16rem]'>{experience.duration}</p>
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
