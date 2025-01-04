import React, { useState, useEffect } from "react";
import Button from "./Button";
import TauModal from "./projekty/TauModal";
import PrihlaskyModal from "./projekty/PrihlaskyModal";
import VeteranModal from "./projekty/VeteranModal";
import RodicakyModal from "./projekty/RodicakyModal";
import ZSModal from "./projekty/ZSModal"; 
interface ProjectsProps {
  jmeno: string;
  obsah: string;
  link: string;
  linkTitle: string;
  fotka: string;
  index: number;
  onShowModal: (project: ProjectsProps) => void;
  modalComponent: React.ComponentType<{ project: ProjectsProps }>; // Add this line
}

const Projekt: React.FC<ProjectsProps> = ({ jmeno, obsah, fotka, link, linkTitle, onShowModal, index, modalComponent }) => {
  const isRightAligned = index % 2 !== 0;

  return (
    <div
      className={`reference-card flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-24 ${isRightAligned ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`flex-1 flex flex-col gap-4 mx-2 sm:mx-20 lg:mx-0 ${isRightAligned ? "items-start lg:items-end text-left lg:text-right" : "items-start text-left"}`}
      >
        <h3 className="font-bold text-white text-3xl sm:text-4xl mt-4">{jmeno}</h3>
        <div
          className={`bg-fialova h-1 w-32 ${isRightAligned ? "ml-0 lg:ml-auto" : "ml-0 lg:mr-auto"}`}
        ></div>
        <a href={link} target="_blank" rel="noreferrer" className={`flex items-center gap-2 hover:underline text-white mt-2 ${isRightAligned ? "flex-row-reverse" : "flex-row"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 10C1.5 11.1162 1.71986 12.2215 2.14702 13.2528C2.57419 14.2841 3.20029 15.2211 3.98959 16.0104C4.77889 16.7997 5.71592 17.4258 6.74719 17.853C7.77846 18.2801 8.88376 18.5 10 18.5C11.1162 18.5 12.2215 18.2801 13.2528 17.853C14.2841 17.4258 15.2211 16.7997 16.0104 16.0104C16.7997 15.2211 17.4258 14.2841 17.853 13.2528C18.2801 12.2215 18.5 11.1162 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10ZM17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5C8.01088 17.5 6.10322 16.7098 4.6967 15.3033C3.29018 13.8968 2.5 11.9891 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" fill="#CBACF9"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 10C6.5 14.396 7.942 18 10 18C12.058 18 13.5 14.396 13.5 10C13.5 5.604 12.058 2 10 2C7.942 2 6.5 5.604 6.5 10ZM12.5 10C12.5 13.889 11.255 17 10 17C8.745 17 7.5 13.889 7.5 10C7.5 6.111 8.745 3 10 3C11.255 3 12.5 6.111 12.5 10Z" fill="#CBACF9"/>
            <path d="M3.735 5.31182L4.405 4.56982C4.51167 4.66582 4.626 4.75949 4.748 4.85082C6.066 5.83882 8.146 6.44082 10.413 6.44082C12.346 6.44082 14.15 6.00382 15.468 5.25082C15.7716 5.07896 16.0586 4.87909 16.325 4.65382L16.975 5.41382C16.6763 5.66916 16.3397 5.90382 15.965 6.11782C14.488 6.96282 12.513 7.44082 10.413 7.44082C7.943 7.44082 5.651 6.77782 4.148 5.65082C4.00535 5.54369 3.86754 5.43124 3.735 5.31182ZM3.735 14.6998L4.405 15.4398C4.51167 15.3432 4.626 15.2498 4.748 15.1598C6.066 14.1718 8.146 13.5698 10.413 13.5698C12.346 13.5698 14.15 14.0058 15.468 14.7598C15.7893 14.9445 16.075 15.1432 16.325 15.3558L16.975 14.5958C16.661 14.3302 16.3229 14.0945 15.965 13.8918C14.488 13.0478 12.513 12.5698 10.413 12.5698C7.943 12.5698 5.651 13.2328 4.148 14.3588C4.00133 14.4688 3.86367 14.5832 3.735 14.6998ZM2 10.4998V9.49982H18V10.4998H2Z" fill="#CBACF9"/>
          </svg>
          <p className="text-sm font-light">{linkTitle}</p>
          </a>
        <p className="text-white text-sm sm:text-md font-light mt-4">{obsah}</p>
        <div className="flex gap-2 mt-4">
          <Button content="Zjistit více" color={true} onClick={() => onShowModal({ jmeno, obsah, fotka, index, link, linkTitle, onShowModal, modalComponent })} />
        </div>
      </div>
      <div
        className={`w-[90%] sm:w-[30rem] h-auto ${isRightAligned ? "flip-horizontal" : ""}`}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(null);

  const projectData = [
    {
      jmeno: "Trénuj a uč se!",
      obsah:
        "Internetová služba TAU (Trénuj a uč se!) slouží k procvičování přijímacích zkoušek na počítači, tabletu i telefonu. Žákům jsou k dispozici všechna testová zadání matematiky a českého jazyka. V aplikaci je online vyhodnocena odpověď a žák na konci uvidí shrnutí všech svých odpovědí a úspěšnost.",
      fotka: "./images/tau.png",
      link: "https://tau.cermat.cz",
      linkTitle: "tau.cermat.cz",
      modalComponent: TauModal,
    },
    {
      jmeno: "Přihlášky na střední",
      obsah:
        "Informační web byl klíčovým zdrojem informací k přijímacímu řízení na střední školy v roce 2024 a bude jím i v roce letošním. Informace na jednom místě zde najdou rodiče a žáci, ředitelé středních škol nebo výchovní poradci základních škol. Předpokládá se, že stránku navštívilo desetitíce rodičů a poskytla jim přehledně vše o přijímačkách.",
      fotka: "./images/prihlasky.png",
      link: "https://prihlaskynastredni.cz",
      linkTitle: "prihlaskynastredni.cz",
      modalComponent: PrihlaskyModal,
    },
    {
      jmeno: "Veterán Cup Letohrad",
      obsah:
        "Veterán Cup Letohrad je charitativní hokejbalový turnaj, který se koná každý rok v Letohradě. Ve veřejné sbírce se v roce 2024 vybralo neuvěřitelných půl milionu korun na pomoc nemocných dětí. Celé akci jsem vytvořil logo i webové stránky. Nyní se starám o marketingové aktivity a spravuji sociální sítě.",
      fotka: "./images/veteran.png",
      link: "https://veterancupletohrad.cz",
      linkTitle: "veterancupletohrad.cz",
      modalComponent: VeteranModal, 
    },
    {
      jmeno: "Rodičáky",
      obsah:
        "Systém pro rezervaci termínů na třídní schůzky. Rodiče si na pár kliknutí zarezervují termín, učitelé mají přehled o účasti a pro správce je vytvořeno jednoduché administrační prostředí. Systém je navržen intuitivně, což šetří čas a usnadňuje organizaci celé škole. Jako projektový manažer a designér jsem zodpovídal za koordinaci a implementaci projektu.",
      fotka: "./images/rodicaky.png",
      link: "https://rodicaky.cz/info",
      linkTitle: "rodicaky.cz",
      modalComponent: RodicakyModal,
    },
    {
      jmeno: "ZŠ Letohrad",
      obsah:
        "Webová stránka základní školy Letohrad byla vytvořena s jednoduchým design, který usnadnil orientaci a přístup k informacím. Součástí projektu je administrativní systém s čtyřúrovňovým řízením práv, který umožňuje správcům a uživatelům různých úrovní přístupu upravovat všechny části webu.",
      fotka: "./images/zsletohrad.png",
      link: "https://zsletohrad.cz",
      linkTitle: "zsletohrad.cz",
      modalComponent: ZSModal,
    },
  ];

  const handleShowModal = (project: ProjectsProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = "6px"; // Přidání paddingu
    } else {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      document.body.style.paddingRight = ""; // Reset paddingu
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      document.body.style.paddingRight = ""; // Reset paddingu při unmountu
    };
  }, [isModalOpen]);

  return (
    <div className="mt-20">
      <p className="text-3xl sm:text-5xl text-white text-center font-bold mb-16 mt-24">
        Mé projekty
      </p>
      <div className="flex flex-col justify-center items-center container-zkusenosti mx-auto">
        {projectData.map((project, index) => (
          <Projekt
            key={index}
            {...project}
            index={index}
            onShowModal={handleShowModal}
            modalComponent={project.modalComponent} // Pass the modal component dynamically
          />
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Zobrazení modalu s dynamickým obsahem */}
            <selectedProject.modalComponent project={selectedProject} />
          </div>
        </div>
      )}
    </div>
  );
}