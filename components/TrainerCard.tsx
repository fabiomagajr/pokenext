'use client'

import { Trainer } from '@/types/trainer';

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  
  const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };
  
  return (
    <div className="bg-gradient-to-br from-red-500 to-yellow-400 rounded-lg shadow-lg p-6 mb-6 text-white">
      <div className="flex items-center gap-4">
        
        <div className="text-6xl">👤</div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Treinador: {trainer.name}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-semibold">Idade:</span> {calculateAge(trainer.birthdate)} anos
            </div>
            <div>
              <span className="font-semibold">Gênero:</span> {trainer.gender}
            </div>
            <div className="col-span-2">
              <span className="font-semibold">Endereço:</span> {trainer.address}
            </div>
            <div className="col-span-2">
              <span className="font-semibold">Pokémon Favorito:</span> ⭐ {trainer.favoritePokemon}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
