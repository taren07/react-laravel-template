/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/ts/*.{js,jsx,ts,tsx}',
      './resources/ts/**/*.{js,jsx,ts,tsx}',
      './resources/ts/**/**/*.{js,jsx,ts,tsx}',
      './resources/ts/**/**/**/*.{js,jsx,ts,tsx}',
      './resources/views/emails/*.blade.php',
      './resources/views/emails/*/*.blade.php',
      './resources/views/emails/*/*/*.blade.php',
      './resources/views/emails/*/*/*/*.blade.php',
      './resources/views/emails/*/*/*/*/*.blade.php',
      './resources/views/components/layouts/*.blade.php',
      './resources/views/components/layouts/a/*.blade.php',
      './resources/views/components/layouts/b/*.blade.php',
      './public/index.html',
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      //以下で適用
      '-lg': {max: '1024px'},
      //以上で適用
      'lg': {min: '1025px'},
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],

}
