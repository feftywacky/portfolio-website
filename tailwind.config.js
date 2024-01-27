/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {

      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },


      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        white: "#fff",
        "off-white": "#f7f8f8",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        background: "#000212",
        background_light: "#141414",
        background_light_2: "#2b2b2b",
        grey_light: "#A8A8A8",
        "grey-dark": "#222326",
        "primary-text": "#b4bcd0",
        hoverColor: '#00FF7F',
      },

      scale: {
        120: '1.2',
      },

      screens: {
        'projects_lg': '1070px',
        'lg': '1025px',
        'mini': '390px',
      },
      
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines":
          "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
        "radial-faded":
          "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },

      animation: {
        'border-blink': 'border-blink 2s ease-out infinite'
      },
      keyframes: {
        'border-blink': {
          '0%': { borderColor: 'rgba(255, 255, 255, 0.5)' },
          '50%': { borderColor: '#FFF' },
          '100%': { borderColor: 'rgba(255, 255, 255, 0.5)' }
        }
      },      

    },
  },
  plugins: [],
};
