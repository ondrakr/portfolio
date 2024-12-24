import React from 'react';
import Button from "./Button";
import Database from '../../public/icons/Database';
import Design from '../../public/icons/Design';
import Web from '../../public/icons/Web';

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

function Card({ title, icon }: CardProps) {
  return (
    <div className="bg-linear shadow-md rounded-2xl px-6 pb-10 pt-8 text-center border border-10 flex flex-col items-center gap-6 w-full"> 
      <span className='h-[6rem] md:h-[7rem] flex items-center justify-center'>{icon}</span>
      <p className="text-xl sm:text-3xl text-white font-bold mb-2 md:mb-4 w-full tracking-wide" dangerouslySetInnerHTML={{ __html: title }}></p>
      <Button content="MÁM ZÁJEM" color={false}/>
    </div>
  );
}

export default function Nabidka() {
  return (
    <div className="my-32 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-12">
        <Card
          title="WEBOVÉ<br/>STRÁNKY"
          icon={<Web />}
        />
        <Card
          title="APLIKACE<br/>S DATABÁZÍ"
          icon={<Database />}
        />
        <Card
          title="VIZUÁLNÍ<br/>IDENTITA"
          icon={<Design />}
        />
      </div>
    </div>
  );
}
