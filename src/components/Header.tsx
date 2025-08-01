import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo y marca */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">JQ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">JQsystems</h1>
              <p className="text-xs text-gray-500">for Academies</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Soluciones
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Nichos
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Casos de Éxito
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* Botón CTA y menú móvil */}
          <div className="flex items-center space-x-4">
            {/* Botón CTA desktop */}
            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Agendar Demo
              </span>
            </button>

            {/* Menú hamburguesa móvil */}
            <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menú móvil expandido (oculto por defecto) */}
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 hidden">
          <div className="flex flex-col space-y-3 pt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
              Soluciones
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
              Nichos
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
              Casos de Éxito
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
              Contacto
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-4">
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Agendar Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 