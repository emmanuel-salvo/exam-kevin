import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			blue: '#0D5287FF',
			white: '#FFFFFFFF',
			secondary: '#39D3BBFF',
			gray: '#2B3445FF',
			'light-gray': '#EFF7FFFF',
			'light-gray-2': '#4B566BFF',
		},
	},
	plugins: [],
};
export default config;
