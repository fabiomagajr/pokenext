'use client'

import { Pokemon } from '@/types/pokemon';
import { getTypeBadgeColor } from '@/utils/typeColors';

interface PokemonCardProps {
  pokemon: Pokemon | null;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  if (!pokemon) {
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg p-8 flex items-center justify-center h-[600px]">
        <div className="text-center">
          <div className="text-6xl mb-4">❓</div>
          <p className="text-gray-500 font-semibold text-lg">
            Selecione um Pokémon na tabela
          </p>
        </div>
      </div>
    );
  }
  
  // URL alternativa - Pokemon.com (sem limite de taxa)
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png`;
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-2xl p-6 h-[600px] flex flex-col">
      
      <div className="text-center mb-4">
        <span className="text-gray-500 font-bold text-sm">#{pokemon.id.toString().padStart(3, '0')}</span>
        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          {capitalize(pokemon.name)}
        </h2>
      </div>
      
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-4">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="max-w-[300px] max-h-[300px] object-contain drop-shadow-2xl"
        />
      </div>
      
      <div className="flex gap-2 justify-center mb-4">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className={`${getTypeBadgeColor(typeInfo.type.name)} px-4 py-2 rounded-full font-bold text-sm uppercase`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-100 rounded-lg p-3">
          <p className="text-gray-600 text-xs font-semibold">Altura</p>
          <p className="text-xl font-bold text-blue-700">{pokemon.height / 10}m</p>
        </div>
        <div className="bg-green-100 rounded-lg p-3">
          <p className="text-gray-600 text-xs font-semibold">Peso</p>
          <p className="text-xl font-bold text-green-700">{pokemon.weight / 10}kg</p>
        </div>
      </div>
      
      <div className="mt-4 bg-yellow-50 rounded-lg p-3">
        <p className="text-gray-600 text-xs font-semibold mb-2">Habilidades</p>
        <div className="flex flex-wrap gap-2">
          {pokemon.abilities.map((ab) => (
            <span
              key={ab.ability.name}
              className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {capitalize(ab.ability.name.replace('-', ' '))}
              {ab.is_hidden && ' (Oculta)'}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}
