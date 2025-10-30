export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#fef3c7',
        agave: '#7a9a9b',
        amber: '#d97706',
        slate: '#3f3f46',
        softGray: '#777777',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(122, 154, 155, 0.15)',
      },
    },
  },
  plugins: [],
};
