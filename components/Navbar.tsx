'use client'

interface NavbarProps {
  onOpenForm: () => void;
  trainer: { name: string; favoritePokemon: string } | null;
}

export default function Navbar({ onOpenForm, trainer }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 shadow-lg mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Título */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-white">
              🔴 Pokédex Interativa
            </h1>
          </div>
          
          {/* Informações do Treinador */}
          <div className="flex items-center gap-4">
            {trainer && (
              <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold">
                  Treinador: {trainer.name}
                </span>
                <span className="text-white/90 text-sm">
                  ⭐ {trainer.favoritePokemon}
                </span>
              </div>
            )}
            
            {/* Botão Formulário */}
            <button
              onClick={onOpenForm}
              className="bg-white text-red-600 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
            >
              {trainer ? 'Editar Perfil' : 'Formulário'}
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
