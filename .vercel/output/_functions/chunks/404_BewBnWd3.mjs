import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DLCaMrlY.mjs";
//#region src/pages/en/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"locale": "en",
		"title": "404 — Page not found",
		"description": "The page you are looking for does not exist.",
		"data-astro-cid-g7u7mcuy": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="error-page" data-astro-cid-g7u7mcuy><div class="container" data-astro-cid-g7u7mcuy><div class="error-content" data-astro-cid-g7u7mcuy><span class="error-tag" data-astro-cid-g7u7mcuy>Error 404</span><h1 class="error-title font-display" data-astro-cid-g7u7mcuy>Page<br data-astro-cid-g7u7mcuy><span class="error-accent" data-astro-cid-g7u7mcuy>not found</span></h1><p class="error-desc" data-astro-cid-g7u7mcuy>The page you are looking for does not exist or has been moved.</p><a href="/en" class="error-btn magnetic" data-astro-cid-g7u7mcuy><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-g7u7mcuy><path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-g7u7mcuy></path></svg><span data-astro-cid-g7u7mcuy>Back to home</span></a></div></div></section>` })}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/en/404.astro", void 0);
var $$file = "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/en/404.astro";
var $$url = "/en/404";
//#endregion
//#region \0virtual:astro:page:src/pages/en/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
