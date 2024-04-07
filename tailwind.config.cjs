/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			primary: {
				DEFAULT: 'var(--primary)',
				50: 'var(--primary-50)',
				100: 'var(--primary-100)',
				200: 'var(--primary-200)',
				300: 'var(--primary-300)',
				400: 'var(--primary-400)',
				500: 'var(--primary-500)',
				600: 'var(--primary-600)',
				700: 'var(--primary-700)',
				800: 'var(--primary-800)',
				900: 'var(--primary-900)',
				950: 'var(--primary-950)'
			}
		},
		fontFamily: {
			heading: 'var(--font-heading), sans-serif',
			body: 'var(--font-body), sans-serif'
		}
	},

	plugins: []
};

module.exports = config;
