"use client";

import React from 'react';

const Body: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section - Diseño Limpio y Confiable */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800 py-24 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge de confianza */}
            <div className="inline-flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Sistema Verificado • 500+ Academias</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">
                Más alumnos para tu academia,
              </span>
              <br />
              <span className="text-blue-600">
                sin invertir en publicidad
              </span>
            </h1>

            {/* Subtítulo con beneficio clave */}
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-gray-800">Automatización con IA + filtrado de leads:</span>
              <br />
              <span className="text-blue-600 font-bold">solo pagas por resultados</span>
            </p>

            {/* Estadísticas de confianza */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300%</div>
                <div className="text-sm text-gray-600">Más matrículas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">0€</div>
                <div className="text-sm text-gray-600">Inversión adicional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Automatización</div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://calendly.com/jqsystems1/reunion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar Reunión Gratuita
                </span>
              </a>
              
              <button 
                onClick={() => scrollToSection('nichos-especializados')}
                className="group bg-white border-2 border-blue-200 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ver Soluciones
                </span>
              </button>
            </div>

            {/* Garantía de confianza */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                <span className="text-green-500 font-semibold">✓</span> Demo gratuita • 
                <span className="text-green-500 font-semibold">✓</span> Sin compromiso • 
                <span className="text-green-500 font-semibold">✓</span> Resultados garantizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Nichos Especializados */}
      <section id="nichos-especializados" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nichos Especializados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl mb-6 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Belleza y Estética</h3>
              <p className="text-gray-600 mb-4">
                Academias de peluquería, estética, maquillaje, uñas y tratamientos faciales. 
                Automatiza consultas y reservas de cursos.
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-pink-50 text-pink-700 px-3 py-1 rounded-full mr-2 mb-2">Peluquería</span>
                <span className="inline-block bg-pink-50 text-pink-700 px-3 py-1 rounded-full mr-2 mb-2">Estética</span>
                <span className="inline-block bg-pink-50 text-pink-700 px-3 py-1 rounded-full mr-2 mb-2">Maquillaje</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl mb-6 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Finanzas e Inversión</h3>
              <p className="text-gray-600 mb-4">
                Cursos de trading, finanzas personales, inversiones y emprendimiento. 
                Filtrado inteligente de leads cualificados.
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mr-2 mb-2">Trading</span>
                <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mr-2 mb-2">Inversiones</span>
                <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mr-2 mb-2">Emprendimiento</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl mb-6 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Idiomas y Educación</h3>
              <p className="text-gray-600 mb-4">
                Academias de idiomas, cursos online, preparación de exámenes y formación profesional. 
                Marketing automatizado personalizado.
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2">Idiomas</span>
                <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2">Online</span>
                <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2">Formación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Qué hace el sistema */}
      <section id="que-hace-sistema" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🔧 Qué hace el sistema
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🟢 Contactamos automáticamente a tus leads</h3>
              <p className="text-gray-600">
                Nuestro sistema se conecta con tus leads de forma automática a través de WhatsApp, 
                iniciando conversaciones personalizadas sin intervención manual.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🟡 Filtramos con IA los interesados reales</h3>
              <p className="text-gray-600">
                La inteligencia artificial analiza cada conversación y identifica automáticamente 
                los leads con mayor probabilidad de matrícula.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🔴 Te entregamos alumnos listos para cerrar</h3>
              <p className="text-gray-600">
                Solo recibes leads cualificados y pre-interesados, listos para que cierres 
                la matrícula sin perder tiempo en prospectos fríos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Beneficios clave */}
      <section id="beneficios-clave" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🎁 Beneficios clave
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 mx-auto flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">✅ Ahorra tiempo</h3>
                <p className="text-gray-600">Solo hablas con interesados reales, no pierdes tiempo en prospectos fríos</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-4 mx-auto flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">✅ No gastas más en publicidad</h3>
                <p className="text-gray-600">Optimizamos tu inversión actual sin costos adicionales</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 mx-auto flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">✅ Pagas solo si se matriculan</h3>
                <p className="text-gray-600">Modelo de pago por resultados, sin riesgos para tu academia</p>
              </div>
            </div>

            {/* Botón secundario */}
            <div className="text-center">
              <a 
                href="https://calendly.com/jqsystems1/reunion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Solicita una demo gratuita
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cómo Funciona */}
      <section id="como-funciona" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Cómo Funciona Nuestro Sistema?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Integración WhatsApp</h3>
              <p className="text-gray-600">
                Conectamos tu WhatsApp Business con nuestro sistema de IA para automatizar respuestas
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Filtrado Inteligente</h3>
              <p className="text-gray-600">
                IA analiza cada lead y determina automáticamente su probabilidad de matrícula
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Marketing Estratégico</h3>
              <p className="text-gray-600">
                Campañas personalizadas según el nicho y comportamiento del lead
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Matrículas Automáticas</h3>
              <p className="text-gray-600">
                Conversión automática de leads cualificados sin intervención manual
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Listo para automatizar tu academia? */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
              🎯 ¿Listo para automatizar tu academia?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Formulario */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">💬 Agendar reunión por WhatsApp</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+34 600 123 456"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Tipo de curso</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                      <option value="" className="text-gray-800">Selecciona tu nicho</option>
                      <option value="belleza" className="text-gray-800">Belleza y Estética</option>
                      <option value="finanzas" className="text-gray-800">Finanzas e Inversión</option>
                      <option value="idiomas" className="text-gray-800">Idiomas y Educación</option>
                      <option value="otros" className="text-gray-800">Otros</option>
                    </select>
                  </div>
                  
                  <a 
                    href="https://calendly.com/jqsystems1/reunion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Agendar Reunión por WhatsApp
                    </span>
                  </a>
                </form>
              </div>

              {/* Servicios adicionales */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">🧩 Servicios adicionales</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-gray-800">Publicidad paga para más alcance</h4>
                      <p className="text-gray-600 text-sm">Campañas optimizadas para maximizar tu ROI</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-gray-800">Landing pages personalizadas</h4>
                      <p className="text-gray-600 text-sm">Páginas optimizadas para conversión</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-gray-800">Generación de leads desde cero</h4>
                      <p className="text-gray-600 text-sm">Creamos tu base de datos de prospectos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Multiplicar tus Matrículas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Únete a las academias que ya están generando resultados increíbles con nuestro sistema
          </p>
          <a 
            href="https://calendly.com/jqsystems1/reunion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <span className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Reunión Gratuita
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Body; 