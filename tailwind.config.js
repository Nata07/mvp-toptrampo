module.exports = {
  node:'jit', //cria somente o que precisa no projeto e nao cria o que é desnecessario
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
