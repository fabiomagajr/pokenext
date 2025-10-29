// Mapeamento de tipos para cores de fundo da tabela (tons claros)
export const typeColors: Record<string, string> = {
  normal: 'bg-gray-200',
  fire: 'bg-red-200',
  water: 'bg-blue-200',
  grass: 'bg-green-200',
  electric: 'bg-yellow-200',
  ice: 'bg-cyan-200',
  fighting: 'bg-orange-200',
  poison: 'bg-purple-200',
  ground: 'bg-amber-200',
  flying: 'bg-indigo-200',
  psychic: 'bg-pink-200',
  bug: 'bg-lime-200',
  rock: 'bg-stone-200',
  ghost: 'bg-violet-200',
  dragon: 'bg-indigo-300',
  dark: 'bg-gray-300',
  steel: 'bg-slate-200',
  fairy: 'bg-pink-200',
  stellar: 'bg-fuchsia-200',
  unknown: 'bg-gray-200',
};

export function getTypeColor(typeName: string): string {
  return typeColors[typeName] || 'bg-white';
}

// ALTERE AQUI: Mapeamento para badges (TEXTO PRETO)
export const typeBadgeColors: Record<string, string> = {
  normal: 'bg-gray-400 text-black',
  fire: 'bg-red-400 text-black',
  water: 'bg-blue-400 text-black',
  grass: 'bg-green-400 text-black',
  electric: 'bg-yellow-300 text-black',
  ice: 'bg-cyan-300 text-black',
  fighting: 'bg-orange-400 text-black',
  poison: 'bg-purple-400 text-black',
  ground: 'bg-amber-400 text-black',
  flying: 'bg-indigo-400 text-black',
  psychic: 'bg-pink-400 text-black',
  bug: 'bg-lime-400 text-black',
  rock: 'bg-stone-400 text-black',
  ghost: 'bg-violet-400 text-black',
  dragon: 'bg-indigo-500 text-black',
  dark: 'bg-gray-500 text-black',
  steel: 'bg-slate-400 text-black',
  fairy: 'bg-pink-400 text-black',
  stellar: 'bg-fuchsia-400 text-black',
  unknown: 'bg-gray-400 text-black',
};

export function getTypeBadgeColor(typeName: string): string {
  return typeBadgeColors[typeName] || 'bg-gray-400 text-black';
}
