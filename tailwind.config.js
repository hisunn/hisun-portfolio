/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F8F5',
        ink: '#131F1A',
        approved: { DEFAULT: '#0B7A4B', dark: '#0A6A42', soft: '#E3F1E9' },
        stamp: '#D8432A',
        muted: '#5C6B63',
        line: '#DCE1DA',
        terminal: { DEFAULT: '#0D1411', text: '#9DB4A8', green: '#3ECF8E' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1080px' },
      boxShadow: {
        card: '0 1px 2px rgba(19,31,26,0.06), 0 8px 24px -12px rgba(19,31,26,0.12)',
      },
    },
  },
  plugins: [],
}
