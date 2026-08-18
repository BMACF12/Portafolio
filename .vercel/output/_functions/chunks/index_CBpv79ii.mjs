import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, i as renderComponent } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DLCaMrlY.mjs";
import { a as $$Skills, c as $$Hero, i as $$ProjectsSlider, n as $$Experience, o as $$Services, r as $$Philosophy, s as $$StickyIntro, t as $$ContactSection } from "./ContactSection_DWBV3X85.mjs";
//#region src/pages/en/index.astro
var en_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => "/en"
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"locale": "en",
		"title": "Home",
		"description": "Software Engineer specialized in Angular, TypeScript and Flutter. I build modern, high-performance digital experiences."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "locale": "en" })}${renderComponent($$result, "StickyIntro", $$StickyIntro, { "locale": "en" })}${renderComponent($$result, "Services", $$Services, { "locale": "en" })}${renderComponent($$result, "Skills", $$Skills, { "locale": "en" })}${renderComponent($$result, "ProjectsSlider", $$ProjectsSlider, { "locale": "en" })}${renderComponent($$result, "Philosophy", $$Philosophy, { "locale": "en" })}${renderComponent($$result, "Experience", $$Experience, { "locale": "en" })}${renderComponent($$result, "ContactSection", $$ContactSection, { "locale": "en" })}` })}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/en/index.astro", void 0);
var $$file = "C:/Users/brian/dev/Paginas_web/Portafolio/src/pages/en/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/en/index@_@astro
var page = () => en_exports;
//#endregion
export { page };
