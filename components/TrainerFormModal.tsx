'use client'

import { useState } from 'react';
import { Trainer } from '@/types/trainer';

interface TrainerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (trainer: Trainer) => void;
  initialData?: Trainer | null;
}

export default function TrainerFormModal({ 
  isOpen, 
  onClose, 
  onSubmit,
  initialData 
}: TrainerFormModalProps) {
  
  const [formData, setFormData] = useState<Trainer>(initialData || {
    name: '',
    birthdate: '',
    gender: '',
    address: '',
    favoritePokemon: '',
  });
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button>
        
        {/* Título */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🎒</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Preencha seus dados de treinador Pokémon
          </h2>
        </div>
        
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nome *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              placeholder="Ex: Ash Ketchum"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Data de Nascimento *
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Gênero *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
            >
              <option value="">Selecione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Endereço *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              placeholder="Ex: Pallet Town, Kanto"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Pokémon Favorito *
            </label>
            <input
              type="text"
              name="favoritePokemon"
              value={formData.favoritePokemon}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              placeholder="Ex: Pikachu"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all shadow-lg"
          >
            Enviar
          </button>
          
        </form>
        
      </div>
    </div>
  );
}
