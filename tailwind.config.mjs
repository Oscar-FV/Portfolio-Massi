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
				textBlack: '#1E1E1E',
				projectText: '#E8DAFF'
			},
			backgroundImage: {
				'bento1': "url('/imgs/bento1.webp')",
				'bento2': "url('/imgs/bento2.webp')",
				'bento3': "url('/imgs/bento3.webp')",
				'bento4': "url('/imgs/bento4.webp')",
			}
		},
	},
	plugins: [],
}
