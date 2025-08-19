import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-400 text-white p-4 font-['Mozilla_Headline', sans-serif]">
        <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Mi App</div>
          
            <div className="hidden md:flex gap-x-6 ">
              <a href="#" className="hover:underline">Inicio</a>
              <a href="#" className="hover:underline">Servicios</a>
              <a href="#" className="hover:underline">Contacto</a>
            </div>
            {/* Código del botón de menú móvil */}
            <button
              className="md:hidden  text-2xl "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#" className="block hover:underline">Inicio</a>
              <a href="#" className="block hover:underline">Servicios</a>
              <a href="#" className="block hover:underline">Contacto</a>
            </div>
          )}
        </div>
    </>
  );
};

export default Navbar;
