import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-400 text-white p-4 font-['Mozilla_Headline', sans-serif]">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="font-bold text-xl">Mi App</div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Código del botón de menú móvil */}
            </button>
          </div>

          <div className="hidden md:flex gap-x-6">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Servicios</a>
            <a href="#" className="hover:underline">Contacto</a>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#" className="block hover:underline">Inicio</a>
              <a href="#" className="block hover:underline">Servicios</a>
              <a href="#" className="block hover:underline">Contacto</a>
            </div>
          )}
        </div>
      </nav>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl font-['Mozilla_Headline', sans-serif] animate-slide-module mb-4">
    Bienvenidos a mi app
  </h1>
  <p class="text-gray-500">Esta parte se encuentra en el contenido principal</p>
</div>
    </>
  );
};

export default Navbar;
