'use client'

import { Pokemon } from '@/types/pokemon';
import { getTypeColor, getTypeBadgeColor } from '@/utils/typeColors';

interface PokemonTableProps {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  onSelectPokemon: (pokemon: Pokemon) => void;
  isLoading: boolean;
}

export default function PokemonTable({
  pokemons,
  selectedPokemon,
  onSelectPokemon,
  isLoading,
}: PokemonTableProps) {
  
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-red-500"></div>
        <p className="mt-4 text-gray-600 font-semibold">Carregando Pokémon...</p>
      </div>
    );
  }
  
  if (pokemons.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum Pokémon encontrado com esses filtros.</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-auto max-h-[600px] rounded-lg shadow-lg">
      <table className="w-full border-collapse">
        <thead className="bg-gradient-to-r from-red-600 to-yellow-500 text-white sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left font-bold">#</th>
            <th className="px-4 py-3 text-left font-bold">Nome</th>
            <th className="px-4 py-3 text-left font-bold">Tipo(s)</th>
            <th className="px-4 py-3 text-left font-bold">Habilidades</th>
            <th className="px-4 py-3 text-left font-bold">Altura</th>
            <th className="px-4 py-3 text-left font-bold">Peso</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            const primaryType = pokemon.types[0]?.type.name || 'normal';
            const rowColor = getTypeColor(primaryType);
            const isSelected = selectedPokemon?.id === pokemon.id;
            
            return (
              <tr
                key={pokemon.id}
                onClick={() => onSelectPokemon(pokemon)}
                className={`${rowColor} ${isSelected ? 'ring-4 ring-blue-500' : ''} cursor-pointer hover:scale-[1.01] transition-all border-b border-gray-300`}
              >
                <td className="px-4 py-3 font-bold text-gray-800">#{pokemon.id}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {capitalize(pokemon.name)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {pokemon.types.map((typeInfo) => (
                      <span
                        key={typeInfo.type.name}
                        className={`${getTypeBadgeColor(typeInfo.type.name)} px-2 py-1 rounded-full text-xs font-bold uppercase`}
                      >
                        {typeInfo.type.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {pokemon.abilities.slice(0, 2).map((ab, idx) => (
                    <span key={ab.ability.name}>
                      {capitalize(ab.ability.name.replace('-', ' '))}
                      {idx < Math.min(pokemon.abilities.length, 2) - 1 && ', '}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-3 text-gray-800">{pokemon.height / 10}m</td>
                <td className="px-4 py-3 text-gray-800">{pokemon.weight / 10}kg</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
