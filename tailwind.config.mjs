/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lacquer':  ['Lacquer', 'sans-serif'],
				'poppins':  ['Poppins', 'sans-serif'],
			},
			colors: {
				textBlack: '#1E1E1E'
			},
		},
	},
	plugins: [],
}
