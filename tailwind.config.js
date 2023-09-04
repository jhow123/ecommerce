/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#ff9900',
      }, // Adicione uma chave de fechamento aqui
    },
  },
  plugins: [],
}
