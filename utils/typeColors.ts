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

// Função auxiliar para obter a cor de fundo
export function getTypeColor(typeName: string): string {
  return typeColors[typeName] || 'bg-white';
}

// Mapeamento para badges (tons mais saturados)
export const typeBadgeColors: Record<string, string> = {
  normal: 'bg-gray-400 text-gray-900',
  fire: 'bg-red-500 text-white',
  water: 'bg-blue-500 text-white',
  grass: 'bg-green-500 text-white',
  electric: 'bg-yellow-400 text-gray-900',
  ice: 'bg-cyan-400 text-gray-900',
  fighting: 'bg-orange-600 text-white',
  poison: 'bg-purple-500 text-white',
  ground: 'bg-amber-600 text-white',
  flying: 'bg-indigo-400 text-white',
  psychic: 'bg-pink-500 text-white',
  bug: 'bg-lime-500 text-gray-900',
  rock: 'bg-stone-600 text-white',
  ghost: 'bg-violet-500 text-white',
  dragon: 'bg-indigo-600 text-white',
  dark: 'bg-gray-700 text-white',
  steel: 'bg-slate-500 text-white',
  fairy: 'bg-pink-400 text-white',
  stellar: 'bg-fuchsia-500 text-white',
  unknown: 'bg-gray-500 text-white',
};

export function getTypeBadgeColor(typeName: string): string {
  return typeBadgeColors[typeName] || 'bg-gray-400 text-gray-900';
}
