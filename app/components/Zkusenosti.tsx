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
        company: 'coalfamily',
        position: 'web developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
    },
    {
      duration: '2024 - současnost',
      company: 'coalfamily',
      position: 'web developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    duration: '2024 - současnost',
    company: 'coalfamily',
    position: 'web developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
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
                        <p className="text-lg font-light text-lg text-fialova">{experience.position} ({experience.duration})</p>
                        <p className="text-white text-sm sm:text-md font-light mt-4">{experience.description}</p>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      </div>
    );
}
