const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindConfig =
	process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js";
const tailwind = require("tailwindcss")(tailwindConfig);
const purgeHtml = require("purgecss-from-html");

module.exports = {
	plugins: [
		tailwind,
		require("autoprefixer"),
		purgecss({
			content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
      safelist: ["code"],
			extractors: [
				{
					extractor: purgeHtml,
					extensions: ["html"],
				},
			],
		}),
	],
};
