import hljs from 'highlight.js';

document.addEventListener("DOMContentLoaded", () => {
	for (const el of document.querySelectorAll("code")) {
		hljs.highlightElement(el);
	}
});
