import React from "react";
import Button from "./Button";

// Definice typů pro props
interface ProjectsProps {
  jmeno: string;
  obsah: string;
  fotka: string;
  odkaz: string;
  index: number;
}

const Projekt: React.FC<ProjectsProps> = ({ jmeno, obsah, fotka, odkaz, index }) => {
  const isRightAligned = index % 2 !== 0; // Zarovnej doprava, pokud je index lichý
  return (
    <div
      className={`reference-card flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-24 ${
        isRightAligned ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex-1 flex flex-col gap-4 mx-2 sm:mx-20 lg:mx-0 ${
          isRightAligned ? "items-start lg:items-end text-left lg:text-right" : "items-start text-left"
        }`}
      >
        <h3 className="font-bold text-white text-3xl sm:text-4xl mt-4">{jmeno}</h3>
        <div
          className={`bg-fialova h-1 w-32 mx-auto ${
            isRightAligned ? "ml-0 lg:ml-auto" : "ml-0 lg:mr-auto"
          }`}
        ></div>
        <p className="text-white text-sm sm:text-md font-light mt-4">{obsah}</p>
        <div className="flex gap-2 mt-4">
          <Button content="ZJISTIT VÍCE" color={true}></Button>
        </div>
      </div>
      <div
        className={`w-[90%] sm:w-[30rem] h-auto ${
          isRightAligned ? "flip-horizontal" : ""
        }`}
      >
        <img
          src={fotka}
          alt={jmeno}
          className={isRightAligned ? "transform scale-x-[-1]" : ""}
        />
      </div>
    </div>
  );
};

export default function Projects() {
  const projectData = [
    {
      jmeno: "Trénuj a uč se!",
      obsah:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.",
      fotka: "./images/tau.png",
      odkaz: "/projects/tau",
    },
    {
      jmeno: "Přihlášky na střední",
      obsah:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.",
      fotka: "./images/prihlasky.png",
      odkaz: "project/prihlasky",
    },
    {
      jmeno: "Veterán Cup Letohrad",
      obsah:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu. Fusce wisi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.",
      fotka: "./images/veteran.png",
      odkaz: "project/veteran",
    },
  ];

  return (
    <div className="mt-20">
      <p className="text-3xl sm:text-5xl text-white text-center font-bold mb-16 mt-24">
        Mé projekty
      </p>
      <div className="flex flex-col justify-center items-center container-zkusenosti mx-auto">
        {projectData.map((projects, index) => (
          <Projekt key={index} {...projects} index={index} />
        ))}
      </div>
    </div>
  );
}
