import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ikona hamburgeru

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative top-24 left-1/2 transform -translate-x-1/2 flex justify-between items-center bg-[#0B0D22] px-12 py-5 border border-03 rounded-3xl w-fit pointer">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Odkazy pro větší obrazovky */}
      <div className="hidden lg:flex space-x-10">
        <p className="text-white">O mně</p>
        <p className="text-white">Projekty</p>
        <p className="text-white">Reference</p>
        <p className="text-white">Kontakt</p>
      </div>

      {/* Menu pro mobilní zařízení */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 bg-red-500 p-4 w-full text-center space-y-4`}
      >
        <p className="text-white">O mně</p>
        <p className="text-white">Projekty</p>
        <p className="text-white">Reference</p>
        <p className="text-white">Kontakt</p>
      </div>
    </div>
  );
}
