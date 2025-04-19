import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ikona hamburgeru
import { AiOutlineClose } from 'react-icons/ai'; // Ikona křížku

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      closeMenu();
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center md:bg-[#0B0D22] px-12 py-5 md:border md:border-03 rounded-3xl w-fit pointer md:mx-auto ml-auto mt-8 md:mt-20">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        <div className="hidden md:flex space-x-10">
          <p className="text-white cursor-pointer" onClick={() => scrollToSection('nabidka')}>
            Nabídka
          </p>
          <p className="text-white cursor-pointer" onClick={() => scrollToSection('projekty')}>
            Projekty
          </p>
          <p className="text-white cursor-pointer" onClick={() => scrollToSection('zkusenosti')}>
            Zkušenosti
          </p>
          <p className="text-white cursor-pointer" onClick={() => scrollToSection('kontakt')}>
            Kontakt
          </p>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 navbar text-white flex flex-col items-center justify-center h-fit">
          <button
            onClick={closeMenu}
            className="absolute top-12 right-12 text-white"
          >
            <AiOutlineClose size={30} />
          </button>
          <div className="text-center flex flex-col gap-10">
            <p className="cursor-pointer" onClick={() => scrollToSection('nabidka')}>
              Nabídka
            </p>
            <p className="cursor-pointer" onClick={() => scrollToSection('projekty')}>
              Projekty
            </p>
            <p className="cursor-pointer" onClick={() => scrollToSection('zkusenosti')}>
              Zkušenosti
            </p>
            <p className="cursor-pointer" onClick={() => scrollToSection('kontakt')}>
              Kontakt
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
