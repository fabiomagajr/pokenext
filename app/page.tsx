'use client'

import { useEffect, useState } from 'react';
import { Pokemon, FilterOptions } from '@/types/pokemon';
import { Trainer } from '@/types/trainer';
import { 
  fetchPokemonList, 
  fetchPokemonDetails, 
  fetchTypes, 
  fetchAbilities 
} from '@/services/pokemonService';
import Navbar from '@/components/Navbar';
import TrainerFormModal from '@/components/TrainerFormModal';
import WelcomeModal from '@/components/WelcomeModal';
import TrainerCard from '@/components/TrainerCard';
import FilterBar from '@/components/FilterBar';
import PokemonTable from '@/components/PokemonTable';
import PokemonCard from '@/components/PokemonCard';

export default function Home() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterOptions>({
    searchName: '',
    selectedType: '',
    selectedAbility: '',
  });
  
  const [types, setTypes] = useState<{ name: string; url: string }[]>([]);
  const [abilities, setAbilities] = useState<{ name: string; url: string }[]>([]);
  
  // Carrega dados iniciais
  useEffect(() => {
    async function loadInitialData() {
      try {
        setIsLoading(true);
        
        const [typesData, abilitiesData] = await Promise.all([
          fetchTypes(),
          fetchAbilities(300),
        ]);
        
        setTypes(typesData);
        setAbilities(abilitiesData);
        
        // Carrega TODOS os Pokemon (1025+)
        const pokemonList = await fetchPokemonList(1025, 0);
        
        const detailedPokemons = await Promise.all(
          pokemonList.results.map((p) => fetchPokemonDetails(p.name))
        );
        
        setAllPokemons(detailedPokemons);
        setFilteredPokemons(detailedPokemons);
        
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadInitialData();
  }, []);
  
  // Aplica filtros
  useEffect(() => {
    let result = [...allPokemons];
    
    if (filters.searchName) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.searchName.toLowerCase())
      );
    }
    
    if (filters.selectedType) {
      result = result.filter((p) =>
        p.types.some((t) => t.type.name === filters.selectedType)
      );
    }
    
    if (filters.selectedAbility) {
      result = result.filter((p) =>
        p.abilities.some((a) => a.ability.name === filters.selectedAbility)
      );
    }
    
    setFilteredPokemons(result);
    
    if (selectedPokemon && !result.find((p) => p.id === selectedPokemon.id)) {
      setSelectedPokemon(null);
    }
    
  }, [filters, allPokemons, selectedPokemon]);
  
  const handleFormSubmit = (trainerData: Trainer) => {
    setTrainer(trainerData);
    setIsFormOpen(false);
    setIsWelcomeOpen(true);
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      
      {/* Navbar */}
      <Navbar 
        onOpenForm={() => setIsFormOpen(true)}
        trainer={trainer ? { name: trainer.name, favoritePokemon: trainer.favoritePokemon } : null}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600">
            Pokédex Interativa
          </h1>
          <p className="text-gray-600 mt-2">Explore o mundo Pokémon com filtros e detalhes!</p>
        </header>
        
        {/* Card do Treinador */}
        {trainer && <TrainerCard trainer={trainer} />}
        
        {/* Filtros */}
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          types={types}
          abilities={abilities}
        />
        
        {/* Layout Grid: Tabela + Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2">
            <PokemonTable
              pokemons={filteredPokemons}
              selectedPokemon={selectedPokemon}
              onSelectPokemon={setSelectedPokemon}
              isLoading={isLoading}
            />
          </div>
          
          <div className="lg:col-span-1">
            <PokemonCard pokemon={selectedPokemon} />
          </div>
          
        </div>
        
      </div>
      
      {/* Modais */}
      <TrainerFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={trainer}
      />
      
      <WelcomeModal
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
        trainerName={trainer?.name || ''}
      />
      
    </main>
  );
}
