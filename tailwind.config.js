/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
	theme: {
		colors: {
			primary: colors.blue["600"],
		},
		extend: {
			typography: ({ theme }) => ({
				custom: {
					css: {
						"--tw-prose-body": theme("colors.black"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
