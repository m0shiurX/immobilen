/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		screens: {
			phone: '650px',
			tablet: '750px',
			laptop: '950px',
			desktop: '1440px',
		},
	},
	plugins: [],
};
