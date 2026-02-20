/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        landing: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        page: {
          bg: '#0D131D',
          'bg-elevated': '#151d2b',
          border: '#1e2a3a',
          text: '#ECF6F6',
          'text-muted': '#9ebfbf',
        },
        primary: {
          50: '#eef9f2',
          100: '#d6f0e0',
          200: '#b0e1c8',
          300: '#7dccaa',
          400: '#4CA866',
          500: '#2d9d5a',
          600: '#1f7d47',
          700: '#1a643a',
          800: '#185031',
          900: '#154229',
        },
        secondary: {
          50: '#f6f6f7',
          100: '#e2e2e4',
          200: '#c4c4c8',
          300: '#9f9fa5',
          400: '#7a7a82',
          500: '#5f5f66',
          600: '#4a4a50',
          700: '#3d3d42',
          800: '#212121',
          900: '#111112',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
