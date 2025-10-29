# 🔴 Pokédex Interativa

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)

Uma aplicação web interativa e moderna para explorar o universo Pokémon com filtros avançados, perfil de treinador e visualização detalhada de cada criatura! 🚀

[🎮 Ver Demo](#) | [📖 Documentação](#funcionalidades) | [🐛 Reportar Bug](../../issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Aprendizados](#-aprendizados)
- [Melhorias Futuras](#-melhorias-futuras)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

A **Pokédex Interativa** é uma aplicação web full-stack desenvolvida com as tecnologias mais modernas do ecossistema React/Next.js. O projeto consome dados da [PokeAPI](https://pokeapi.co/) para fornecer informações detalhadas sobre **todos os 1025+ Pokémon** existentes.

### 🌟 Destaques

- 🎨 Interface moderna e responsiva com Tailwind CSS
- ⚡ Performance otimizada com Next.js 15
- 🔍 Sistema de filtros avançado (nome, tipo, habilidade)
- 👤 Sistema de perfil de treinador personalizado
- 🎭 Modais interativos e animações suaves
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎨 Linhas da tabela coloridas por tipo de Pokémon
- 🖼️ Imagens oficiais de alta qualidade

---

## ✨ Funcionalidades

### 🔐 Sistema de Treinador

- ✅ Cadastro de perfil de treinador
- ✅ Armazenamento de informações pessoais (nome, nascimento, gênero, endereço)
- ✅ Seleção de Pokémon favorito
- ✅ Modal de boas-vindas personalizado
- ✅ Exibição do perfil na interface principal

### 🔍 Sistema de Busca e Filtros

- ✅ Busca por nome do Pokémon
- ✅ Filtro por tipo (Fire, Water, Grass, etc.)
- ✅ Filtro por habilidade (300+ habilidades disponíveis)
- ✅ Filtros combinados para busca precisa

### 📊 Visualização de Dados

- ✅ Tabela interativa com 1025+ Pokémon
- ✅ Linhas coloridas por tipo principal
- ✅ Badges de tipo com cores temáticas
- ✅ Informações detalhadas: altura, peso, habilidades
- ✅ Card de visualização com imagem oficial
- ✅ Seleção visual do Pokémon ativo

### 🎨 Interface

- ✅ Navbar com acesso rápido ao formulário
- ✅ Animações suaves e transições
- ✅ Scrollbar personalizada
- ✅ Design responsivo para todos os dispositivos
- ✅ Paleta de cores temática Pokémon

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React com SSR e App Router
- **[React 18](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### APIs

- **[PokeAPI](https://pokeapi.co/)** - RESTful API com dados completos de Pokémon
- **[Pokemon.com Assets](https://www.pokemon.com/)** - Imagens oficiais de alta qualidade

### Ferramentas de Desenvolvimento

- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código
- **Git** - Controle de versão

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1️⃣ **Clone o repositório**

```
git clone https://github.com/seu-usuario/pokedex-app.git
cd pokedex-app
```

2️⃣ **Instale as dependências**

```
npm install

ou
yarn install
```


3️⃣ **Execute o projeto em modo de desenvolvimento**

```
npm run dev

ou
yarn dev
```


4️⃣ **Acesse no navegador**

```
http://localhost:3000
```

### Build para produção

```
npm run build
npm start
```


---

## 📂 Estrutura do Projeto

```
pokedex-app/
├── app/ # App Router do Next.js
│ ├── globals.css # Estilos globais
│ ├── layout.tsx # Layout principal
│ └── page.tsx # Página inicial (componente principal)
├── components/ # Componentes React reutilizáveis
│ ├── FilterBar.tsx # Barra de filtros
│ ├── Navbar.tsx # Barra de navegação
│ ├── PokemonCard.tsx # Card de detalhes do Pokémon
│ ├── PokemonTable.tsx # Tabela de listagem
│ ├── TrainerCard.tsx # Card do perfil do treinador
│ ├── TrainerFormModal.tsx # Modal do formulário
│ └── WelcomeModal.tsx # Modal de boas-vindas
├── services/ # Serviços de API
│ └── pokemonService.ts # Funções para consumir PokeAPI
├── types/ # Definições TypeScript
│ ├── pokemon.ts # Interfaces de Pokémon
│ └── trainer.ts # Interface de Treinador
├── utils/ # Funções utilitárias
│ └── typeColors.ts # Mapeamento de cores por tipo
├── public/ # Arquivos estáticos
├── next.config.js # Configuração do Next.js
├── tailwind.config.js # Configuração do Tailwind
└── tsconfig.json # Configuração do TypeScript
```


---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e aprofundados os seguintes conceitos:

### React & Next.js

- ✅ **Hooks** (`useState`, `useEffect`)
- ✅ **Client Components** vs Server Components
- ✅ **Props Drilling** e comunicação entre componentes
- ✅ **Controlled Components** em formulários
- ✅ **Renderização condicional** e listas
- ✅ **Ciclo de vida** de componentes

### TypeScript

- ✅ **Interfaces** e **Types**
- ✅ **Generics** em hooks
- ✅ **Type Safety** em props e states
- ✅ **Union Types** e tipos opcionais

### Boas Práticas

- ✅ **Component-Based Architecture**
- ✅ **Separation of Concerns** (services, utils, types)
- ✅ **Código limpo** e modular
- ✅ **Imutabilidade** de estados
- ✅ **Async/Await** para requisições HTTP

### Tailwind CSS

- ✅ **Utility-first CSS**
- ✅ **Responsive Design**
- ✅ **Customização** de cores e estilos
- ✅ **Safelist** para classes dinâmicas

---

## 🎯 Melhorias Futuras

- [ ] 🔍 Busca com autocomplete
- [ ] 🌙 Modo escuro (dark mode)
- [ ] 💾 Persistência de dados com localStorage
- [ ] 🔊 Sons dos Pokémon
- [ ] 📊 Gráficos de stats (HP, Attack, Defense)
- [ ] 🎮 Comparação entre Pokémon
- [ ] 🌐 Internacionalização (i18n)
- [ ] ⭐ Sistema de favoritos
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🔐 Autenticação de usuários

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### 📝 Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Atualizações de build, configs, etc

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Contato

**Seu Nome** - [@seu_twitter](https://twitter.com/fabiomagajr)

📧 Email: fabiomagajr@gmail.com

🔗 LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/fabiomagajr)

🐙 GitHub: [@seu-usuario](https://github.com/fabiomagajr)

---

## 🙏 Agradecimentos

- [PokeAPI](https://pokeapi.co/) - Pelos dados completos e gratuitos
- [The Pokémon Company](https://www.pokemon.com/) - Pelas imagens oficiais
- [Vercel](https://vercel.com/) - Pela plataforma de deploy
- [Next.js Team](https://nextjs.org/) - Pelo incrível framework

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

Made with ❤️ and ⚡ by [Fabio Magalhães](https://github.com/seu-usuario)

**[⬆ Voltar ao topo](#-pokédex-interativa)**

</div>
