import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ikona hamburgeru

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-[#0B0D22] px-6 py-4 border border-03 rounded-3xl w-fit mx-auto mt-[-1rem]">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Menu pro mobilní zařízení */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block absolute top-full left-0 bg-red-500 p-4 rounded-md shadow-lg w-full`}
      >
        <p className="text-white py-2">O mně</p>
        <p className="text-white py-2">Projekty</p>
        <p className="text-white py-2">Reference</p>
        <p className="text-white py-2">Kontakt</p>
      </div>
    </div>
  );
}
