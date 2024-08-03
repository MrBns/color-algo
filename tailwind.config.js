import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/.{svelte,ts,js,html}'],
	theme: {
		extend: {
			colors: {
				primary: colors.sky
			}
		}
	},
	plugins: []
};
