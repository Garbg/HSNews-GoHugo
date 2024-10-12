/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
	theme: {
		colors: {
			primary: colors.blue["600"],
		},
		extend: {
			typography: {
				custom: {
					css: {
						"--tw-prose-body": colors.black,
						'--tw-prose-links': colors.primary,
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
