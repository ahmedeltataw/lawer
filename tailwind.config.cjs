/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '2rem',

			},
		},
		fontFamily: {
			'sans': ['Noto Kufi Arabic', 'system-ui', ],
			'serif': ['Noto Kufi Arabicf', 'Georgia', ],
			'mono': ['ui-monospace', 'SFMono-Regular',],
			'display': ['swap', ],
			'body': ['"Noto Kufi Arabic"', ],
		},


	},
	plugins: [
	],
}
