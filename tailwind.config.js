/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const primarycol = colors.blue["600"];
module.exports = {
	content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
	theme: {
		colors: {
			primary: primarycol,
		},
		extend: {
			typography: {
				custom: {
					css: {
						"--tw-prose-body": colors.black,
						"--tw-prose-links": primarycol,
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
