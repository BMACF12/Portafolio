import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, i as renderComponent } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DLCaMrlY.mjs";
import { a as $$Skills, c as $$Hero, i as $$ProjectsSlider, n as $$Experience, o as $$Services, r as $$Philosophy, s as $$StickyIntro, t as $$ContactSection } from "./ContactSection_DWBV3X85.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"locale": "es",
		"title": "Inicio",
		"description": "Ingeniero de Software especializado en Angular, TypeScript y Flutter. Construyo experiencias digitales modernas y de alto rendimiento."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "locale": "es" })}${renderComponent($$result, "StickyIntro", $$StickyIntro, { "locale": "es" })}${renderComponent($$result, "Services", $$Services, { "locale": "es" })}${renderComponent($$result, "Skills", $$Skills, { "locale": "es" })}${renderComponent($$result, "ProjectsSlider", $$ProjectsSlider, { "locale": "es" })}${renderComponent($$result, "Philosophy", $$Philosophy, { "locale": "es" })}${renderComponent($$result, "Experience", $$Experience, { "locale": "es" })}${renderComponent($$result, "ContactSection", $$ContactSection, { "locale": "es" })}` })}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/index.astro", void 0);
var $$file = "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
