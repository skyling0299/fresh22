module.exports = {
  mode: 'jit',
  purge: [
      
      './views/articles/messages/*.ejs',
      './views/articles/*.ejs',
      './views/users/*.ejs'
  ],
  content: ["views/articles/index.ejs"],
  theme: {
    extend: {
      backgroundImage: {
        'capoo': "url('/public/capoo.jpg')"
      }
    },
  },
  plugins: [],
}
