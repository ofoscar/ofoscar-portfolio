/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        'app-bg': '#F9FAFB',
        'app-surface': '#FFFFFF',
        'app-surface-secondary': '#F3F4F6',
        'app-text': '#111827',
        'app-text-secondary': '#6B7280',
        'app-text-muted': '#9CA3AF',
        'app-brand': '#3B82F6',
        'app-brand-secondary': '#8B5CF6',
        'app-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        'app-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'app-md':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'app-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
