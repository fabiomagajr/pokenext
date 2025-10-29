/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Cores de fundo para tipos
    'bg-gray-200', 'bg-red-200', 'bg-blue-200', 'bg-green-200',
    'bg-yellow-200', 'bg-cyan-200', 'bg-orange-200', 'bg-purple-200',
    'bg-amber-200', 'bg-indigo-200', 'bg-pink-200', 'bg-lime-200',
    'bg-stone-200', 'bg-violet-200', 'bg-indigo-300', 'bg-gray-300',
    'bg-slate-200', 'bg-fuchsia-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
