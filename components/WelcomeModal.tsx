'use client'

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainerName: string;
}

export default function WelcomeModal({ isOpen, onClose, trainerName }: WelcomeModalProps) {
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center">
        
        <div className="text-7xl mb-4 animate-bounce">🎉</div>
        
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Bem-vindo, {trainerName}!
        </h2>
        
        <p className="text-white text-lg mb-6">
          Sua jornada como treinador Pokémon começa agora!
        </p>
        
        <button
          onClick={onClose}
          className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg"
        >
          Começar Aventura
        </button>
        
      </div>
    </div>
  );
}
