import { Pokemon, PokemonListResponse, PokemonListItem } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Busca lista de Pokemon com paginação
export async function fetchPokemonList(
  limit: number = 151, 
  offset: number = 0
): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar lista de Pokemon');
  }
  
  return response.json();
}

// Busca detalhes de um Pokemon específico
export async function fetchPokemonDetails(nameOrId: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar Pokemon: ${nameOrId}`);
  }
  
  return response.json();
}

// Busca lista de tipos disponíveis
export async function fetchTypes(): Promise<{ name: string; url: string }[]> {
  const response = await fetch(`${BASE_URL}/type`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar tipos');
  }
  
  const data = await response.json();
  return data.results;
}

// Busca lista de habilidades disponíveis
export async function fetchAbilities(limit: number = 100): Promise<{ name: string; url: string }[]> {
  const response = await fetch(`${BASE_URL}/ability?limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar habilidades');
  }
  
  const data = await response.json();
  return data.results;
}

// Busca lista de gerações disponíveis
export async function fetchGenerations(): Promise<{ name: string; url: string }[]> {
  const response = await fetch(`${BASE_URL}/generation`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar gerações');
  }
  
  const data = await response.json();
  return data.results;
}

// Busca Pokemon por geração
// Busca Pokemon por geração
export async function fetchPokemonByGeneration(generationId: number): Promise<PokemonListItem[]> {
  const response = await fetch(`${BASE_URL}/generation/${generationId}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar Pokemon da geração');
  }
  
  const data = await response.json();
  
  // Tipagem correta para a resposta da API
  return data.pokemon_species.map((species: { name: string; url: string }) => ({
    name: species.name,
    url: species.url.replace('pokemon-species', 'pokemon'),
  }));
}

