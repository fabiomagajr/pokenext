'use client'

import { FilterOptions } from '@/types/pokemon';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  types: { name: string; url: string }[];
  abilities: { name: string; url: string }[];
}

export default function FilterBar({
  filters,
  onFilterChange,
  types,
  abilities,
}: FilterBarProps) {
  
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Filtros Pokédex</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Filtro por Nome */}
        <div>
          <label className="block text-white font-semibold mb-2">Nome do Pokémon</label>
          <input
            type="text"
            placeholder="Ex: Pikachu"
            value={filters.searchName}
            onChange={(e) => onFilterChange({ ...filters, searchName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-yellow-300"
          />
        </div>
        
        {/* Filtro por Tipo */}
        <div>
          <label className="block text-white font-semibold mb-2">Tipo</label>
          <select
            value={filters.selectedType}
            onChange={(e) => onFilterChange({ ...filters, selectedType: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-yellow-300"
          >
            <option value="">Todos os tipos</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {capitalize(type.name)}
              </option>
            ))}
          </select>
        </div>
        
        {/* Filtro por Habilidade */}
        <div>
          <label className="block text-white font-semibold mb-2">Habilidade</label>
          <select
            value={filters.selectedAbility}
            onChange={(e) => onFilterChange({ ...filters, selectedAbility: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-yellow-300"
          >
            <option value="">Todas as habilidades</option>
            {abilities.map((ability) => (
              <option key={ability.name} value={ability.name}>
                {capitalize(ability.name.replace('-', ' '))}
              </option>
            ))}
          </select>
        </div>
        
      </div>
    </div>
  );
}
