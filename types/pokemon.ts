// Interface para o Pokemon básico (lista)
export interface PokemonListItem {
  name: string;
  url: string;
}

// Interface para Pokemon detalhado
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  species: {
    name: string;
    url: string;
  };
}

// Tipagem dos tipos do Pokemon (grass, fire, water, etc)
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// Tipagem das habilidades
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

// Tipagem das imagens (sprites)
export interface PokemonSprites {
  front_default: string;
  front_shiny: string | null;
  other?: {
    'official-artwork': {
      front_default: string;
    };
  };
}

// Resposta da API de lista de Pokemon
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

// Para os filtros
export interface FilterOptions {
  searchName: string;
  selectedType: string;
  selectedAbility: string;
}
