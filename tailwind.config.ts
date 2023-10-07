import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

/**
 * LF (Line Feed): Usado principalmente en sistemas tipo Unix y Linux.
 * CRLF (Carriage Return + Line Feed): Usado principalmente en sistemas Windows.
 */