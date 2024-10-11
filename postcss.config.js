const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindConfig =
	process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js";
const tailwind = require("tailwindcss")(tailwindConfig);

module.exports = {
	plugins: [
		tailwind,
		require("autoprefixer"),
		purgecss({
			content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
		}),
	],
};
