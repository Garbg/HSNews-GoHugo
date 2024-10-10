/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layouts/**/*.html",
		"./content/**/*.{html,md}",
		"./themes/**/layouts/**/*.html",
		"./themes/**/content/**/*.{html,md}",
    "./hugo_stats.json"
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
