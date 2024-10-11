import * as purgecss from "@fullhuman/postcss-purgecss";
import * as autoprefixer from "autoprefixer";
const tailwindConfig =
	process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js";
import purgeHtml from "purgecss-from-html";
const tailwind = (await import('tailwindcss')).default(tailwindConfig)
module.exports = {
	plugins: [
		tailwind,
		autoprefixer,
		purgecss({
			content: ["./layouts/**/*.html", "./themes/**/layouts/**/*.html"],
			extractors: [
				{
					extractor: purgeHtml,
					extensions: ["html"],
				},
			],
		}),
	],
};
