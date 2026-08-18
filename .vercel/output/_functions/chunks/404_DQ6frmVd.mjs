import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DLCaMrlY.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"locale": "es",
		"title": "404 — Página no encontrada",
		"description": "La página que buscas no existe.",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="error-page" data-astro-cid-ibpinaeu><div class="container" data-astro-cid-ibpinaeu><div class="error-content" data-astro-cid-ibpinaeu><span class="error-tag" data-astro-cid-ibpinaeu>Error 404</span><h1 class="error-title font-display" data-astro-cid-ibpinaeu>Página<br data-astro-cid-ibpinaeu><span class="error-accent" data-astro-cid-ibpinaeu>no encontrada</span></h1><p class="error-desc" data-astro-cid-ibpinaeu>La página que buscas no existe o fue movida.</p><a href="/" class="error-btn magnetic" data-astro-cid-ibpinaeu><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ibpinaeu><path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-ibpinaeu></path></svg><span data-astro-cid-ibpinaeu>Volver al inicio</span></a></div></div></section>` })}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/404.astro", void 0);
var $$file = "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
