import { Z as AstroError, q as UnknownContentCollectionError } from "./errors-data_BaBHHQaX.mjs";
import { c as isRemotePath, d as removeBase } from "./path_Dja5n-BA.mjs";
import { D as createAstro, T as unescapeHTML, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent, m as generateCspDigest, t as spreadAttributes } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
import { n as useTranslations, r as renderScript } from "./BaseLayout_DLCaMrlY.mjs";
import { i as VALID_INPUT_FORMATS } from "./assets_CifjNk5c.mjs";
import { n as $$Image } from "./_astro_assets_3TTRdG3J.mjs";
import * as devalue from "devalue";
import "html-escaper";
import * as z from "zod/v4";
//#region src/assets/images/profile.jpg
var profile_default = new Proxy({
	"src": "/_astro/profile.a-hCjztz.jpg",
	"width": 735,
	"height": 977,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/brian/dev/Paginas_web/Portafolio/src/assets/images/profile.jpg";
	return target[name];
} });
//#endregion
//#region src/components/sections/Hero.astro
createAstro("https://brianflores.dev");
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Hero;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	const baseUrl = locale === "en" ? "/en" : "";
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" id="home" data-section="home"${addAttribute(t.nav.home, "aria-label")} data-astro-cid-yodha2z4><div class="hero-bg" data-astro-cid-yodha2z4><div class="hero-grid" aria-hidden="true" data-astro-cid-yodha2z4></div><div class="hero-glow hero-glow-1" aria-hidden="true" data-astro-cid-yodha2z4></div><div class="hero-glow hero-glow-2" aria-hidden="true" data-astro-cid-yodha2z4></div></div><div class="hero-container container" data-astro-cid-yodha2z4><div class="hero-content" data-astro-cid-yodha2z4><div class="hero-greeting reveal" data-astro-cid-yodha2z4><span class="hero-line" data-astro-cid-yodha2z4></span><span class="hero-label" data-astro-cid-yodha2z4>${t.hero.greeting}</span></div><h1 class="hero-name font-display" data-astro-cid-yodha2z4><span class="hero-text-line" data-astro-cid-yodha2z4><span class="hero-text-inner reveal" data-split-text data-astro-cid-yodha2z4>${t.hero.name}</span></span></h1><div class="hero-role font-display reveal" data-astro-cid-yodha2z4><span class="hero-role-static" data-astro-cid-yodha2z4>${t.hero.tagline}</span><span class="hero-role-divider" data-astro-cid-yodha2z4>·</span><span class="hero-role-typing" data-typing-text data-astro-cid-yodha2z4></span><span class="hero-role-cursor" aria-hidden="true" data-astro-cid-yodha2z4>|</span></div><p class="hero-desc reveal" data-astro-cid-yodha2z4>${t.hero.description}</p><div class="hero-actions reveal-stagger" data-astro-cid-yodha2z4><a${addAttribute(`${baseUrl}#projects`, "href")} class="btn-hero btn-primary magnetic" data-parallax-trigger data-astro-cid-yodha2z4><span data-astro-cid-yodha2z4>${t.hero.cta.primary}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-yodha2z4><path d="M5 12h14M13 5l7 7-7 7" data-astro-cid-yodha2z4></path></svg></a><a${addAttribute(`${baseUrl}#contact`, "href")} class="btn-hero btn-ghost magnetic" data-parallax-trigger data-astro-cid-yodha2z4><span data-astro-cid-yodha2z4>${t.hero.cta.secondary}</span></a></div></div><div class="hero-visual" data-astro-cid-yodha2z4><div class="hero-image-wrap reveal" data-parallax="0.15" data-astro-cid-yodha2z4><div class="hero-image-frame" data-astro-cid-yodha2z4>${renderComponent($$result, "Image", $$Image, {
		"src": profile_default,
		"alt": `${t.hero.name} — ${t.hero.tagline}`,
		"width": 500,
		"height": 500,
		"widths": [
			320,
			500,
			800
		],
		"sizes": "(max-width: 768px) 70vw, 480px",
		"format": "webp",
		"quality": 85,
		"loading": "eager",
		"decoding": "async",
		"data-astro-cid-yodha2z4": true
	})}</div><div class="hero-image-badge hero-badge-1" data-astro-cid-yodha2z4><span class="badge-dot" data-astro-cid-yodha2z4></span><span data-astro-cid-yodha2z4>Angular · TS</span></div><div class="hero-image-badge hero-badge-2" data-astro-cid-yodha2z4><span class="badge-dot" data-astro-cid-yodha2z4></span><span data-astro-cid-yodha2z4>Flutter</span></div><div class="hero-image-badge hero-badge-3" data-astro-cid-yodha2z4><span class="badge-dot" data-astro-cid-yodha2z4></span><span data-astro-cid-yodha2z4>Available</span></div></div></div></div><div class="hero-scroll-indicator" aria-hidden="true" data-astro-cid-yodha2z4><span class="scroll-text" data-astro-cid-yodha2z4>${t.hero.scrollIndicator}</span><div class="scroll-arrow" data-astro-cid-yodha2z4><span data-astro-cid-yodha2z4></span></div></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/Hero.astro", void 0);
//#endregion
//#region src/components/ui/SectionLabel.astro
createAstro("https://brianflores.dev");
var $$SectionLabel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionLabel;
	const { label, number, align = "left" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["section-label reveal", `align-${align}`], "class:list")} data-astro-cid-ywijwoia>${number && renderTemplate`<span class="section-number" data-astro-cid-ywijwoia>${number}</span>`}<span class="section-divider" data-astro-cid-ywijwoia></span><span class="section-text" data-astro-cid-ywijwoia>${label}</span></div>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/SectionLabel.astro", void 0);
//#endregion
//#region src/components/sections/StickyIntro.astro
createAstro("https://brianflores.dev");
var $$StickyIntro = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StickyIntro;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	return renderTemplate`${maybeRenderHead($$result)}<section class="intro" id="intro" data-section="intro" data-sticky-section data-astro-cid-aoetnwss><div class="intro-sticky" data-sticky-inner data-astro-cid-aoetnwss><div class="container intro-container" data-astro-cid-aoetnwss><div class="intro-text" data-astro-cid-aoetnwss>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.intro.label,
		"number": "01",
		"data-astro-cid-aoetnwss": true
	})}<h2 class="intro-title font-display" data-astro-cid-aoetnwss><span class="intro-line reveal" data-astro-cid-aoetnwss>${t.intro.title}</span><span class="intro-line reveal intro-line-accent" data-astro-cid-aoetnwss>${t.intro.titleAccent}</span></h2><div class="intro-paragraphs" data-astro-cid-aoetnwss>${t.intro.paragraphs.map((p) => renderTemplate`<p class="intro-paragraph reveal" data-astro-cid-aoetnwss>${p}</p>`)}</div></div><div class="intro-visual" data-astro-cid-aoetnwss><div class="intro-card mask-reveal" data-astro-cid-aoetnwss><div class="intro-card-glow" aria-hidden="true" data-astro-cid-aoetnwss></div><div class="intro-card-content" data-astro-cid-aoetnwss><span class="intro-card-label" data-astro-cid-aoetnwss>${locale === "es" ? "Disciplina" : "Discipline"}</span><h3 class="intro-card-title font-display" data-astro-cid-aoetnwss>${locale === "es" ? "Cada pixel cuenta" : "Every pixel matters"}</h3><p class="intro-card-text" data-astro-cid-aoetnwss>${locale === "es" ? "Construyo interfaces que respetan el tiempo del usuario: rápidas, accesibles y visualmente memorables." : "I build interfaces that respect the user's time: fast, accessible and visually memorable."}</p><div class="intro-card-meta" data-astro-cid-aoetnwss><div class="meta-item" data-astro-cid-aoetnwss><span class="meta-value" data-astro-cid-aoetnwss>3+</span><span class="meta-label" data-astro-cid-aoetnwss>${locale === "es" ? "Años" : "Years"}</span></div><div class="meta-item" data-astro-cid-aoetnwss><span class="meta-value" data-astro-cid-aoetnwss>10+</span><span class="meta-label" data-astro-cid-aoetnwss>${locale === "es" ? "Proyectos" : "Projects"}</span></div><div class="meta-item" data-astro-cid-aoetnwss><span class="meta-value" data-astro-cid-aoetnwss>5+</span><span class="meta-label" data-astro-cid-aoetnwss>${locale === "es" ? "Tecnologías" : "Techs"}</span></div></div></div></div></div></div></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/StickyIntro.astro", void 0);
//#endregion
//#region src/components/sections/Services.astro
createAstro("https://brianflores.dev");
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Services;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	const serviceIcons = [
		"web",
		"mobile",
		"api",
		"ui",
		"optimization",
		"consulting"
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="services" id="services" data-section="services" data-astro-cid-j2lavqje><div class="container" data-astro-cid-j2lavqje><div class="services-header" data-astro-cid-j2lavqje>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.services.label,
		"number": "02",
		"data-astro-cid-j2lavqje": true
	})}<h2 class="services-title font-display reveal" data-astro-cid-j2lavqje>${t.services.title}</h2></div><div class="services-grid reveal-stagger" data-astro-cid-j2lavqje>${t.services.items.map((service, idx) => renderTemplate`<article class="service-card magnetic" data-spotlight data-astro-cid-j2lavqje><div class="service-card-number" data-astro-cid-j2lavqje>0${idx + 1}</div><div class="service-card-icon" aria-hidden="true" data-astro-cid-j2lavqje>${serviceIcons[idx] === "web" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><rect x="2" y="3" width="20" height="14" rx="2" data-astro-cid-j2lavqje></rect><line x1="8" y1="21" x2="16" y2="21" data-astro-cid-j2lavqje></line><line x1="12" y1="17" x2="12" y2="21" data-astro-cid-j2lavqje></line></svg>`}${serviceIcons[idx] === "mobile" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><rect x="5" y="2" width="14" height="20" rx="2" data-astro-cid-j2lavqje></rect><line x1="12" y1="18" x2="12" y2="18" data-astro-cid-j2lavqje></line></svg>`}${serviceIcons[idx] === "api" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><path d="M4 12h16M4 6h16M4 18h16" data-astro-cid-j2lavqje></path><circle cx="8" cy="6" r="1" fill="currentColor" data-astro-cid-j2lavqje></circle><circle cx="8" cy="18" r="1" fill="currentColor" data-astro-cid-j2lavqje></circle></svg>`}${serviceIcons[idx] === "ui" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><circle cx="12" cy="12" r="9" data-astro-cid-j2lavqje></circle><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" data-astro-cid-j2lavqje></path></svg>`}${serviceIcons[idx] === "optimization" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" data-astro-cid-j2lavqje></path></svg>`}${serviceIcons[idx] === "consulting" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-j2lavqje><path d="M21 11.5a8.38 8.38 0 01-9 8.5 8.5 8.5 0 01-8.5-8.5A8.38 8.38 0 0110.5 3a8.5 8.5 0 0110.5 8.5z" data-astro-cid-j2lavqje></path><path d="M8 12a4 4 0 108 0 4 4 0 00-8 0z" data-astro-cid-j2lavqje></path></svg>`}</div><h3 class="service-card-title font-display" data-astro-cid-j2lavqje>${service.title}</h3><p class="service-card-desc" data-astro-cid-j2lavqje>${service.description}</p><div class="service-card-arrow" aria-hidden="true" data-astro-cid-j2lavqje><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j2lavqje><path d="M5 12h14M13 5l7 7-7 7" data-astro-cid-j2lavqje></path></svg></div></article>`)}</div></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/Services.astro", void 0);
//#endregion
//#region src/components/ui/SkillConstellation.astro
createAstro("https://brianflores.dev");
var $$SkillConstellation = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SkillConstellation;
	const { locale, categories } = Astro.props;
	const positions = [
		[175, 150],
		[335, 80],
		[500, 165],
		[250, 280],
		[440, 315],
		[605, 260],
		[175, 475],
		[350, 410],
		[535, 505],
		[705, 420],
		[820, 300],
		[790, 125]
	];
	const perCategory = Math.max(1, Math.floor(positions.length / Math.max(1, categories.length)));
	const nodes = categories.flatMap((category, categoryIndex) => category.skills.slice(0, perCategory).map((skill, skillIndex) => ({
		...skill,
		category: category.name,
		categoryIndex,
		skillIndex
	}))).slice(0, positions.length);
	const edges = [
		[0, 1],
		[0, 3],
		[1, 2],
		[1, 4],
		[2, 5],
		[3, 4],
		[4, 5],
		[3, 7],
		[4, 7],
		[5, 8],
		[5, 9],
		[6, 7],
		[7, 8],
		[8, 9],
		[9, 10],
		[10, 11],
		[2, 11]
	].filter(([from, to]) => from < nodes.length && to < nodes.length);
	return renderTemplate`${maybeRenderHead($$result)}<div class="constellation" data-constellation data-spotlight data-astro-cid-moahk3wj><div class="constellation-topline" data-astro-cid-moahk3wj><span class="constellation-status" data-astro-cid-moahk3wj><i data-astro-cid-moahk3wj></i>${locale === "es" ? "Sistema de habilidades" : "Skill system"}</span><span class="constellation-hint" data-astro-cid-moahk3wj>${locale === "es" ? "Explora los nodos" : "Explore the nodes"} <span data-astro-cid-moahk3wj>↗</span></span></div><svg class="constellation-svg" viewBox="0 0 1000 600" role="img"${addAttribute(locale === "es" ? "Mapa interactivo de habilidades" : "Interactive skills map", "aria-label")} data-astro-cid-moahk3wj><defs data-astro-cid-moahk3wj><filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%" data-astro-cid-moahk3wj><feGaussianBlur stdDeviation="5" result="blur" data-astro-cid-moahk3wj></feGaussianBlur><feMerge data-astro-cid-moahk3wj><feMergeNode in="blur" data-astro-cid-moahk3wj></feMergeNode><feMergeNode in="SourceGraphic" data-astro-cid-moahk3wj></feMergeNode></feMerge></filter><linearGradient id="edge-gradient" x1="0" x2="1" data-astro-cid-moahk3wj><stop offset="0" stop-color="var(--color-accent)" stop-opacity=".15" data-astro-cid-moahk3wj></stop><stop offset=".5" stop-color="var(--color-accent)" stop-opacity=".75" data-astro-cid-moahk3wj></stop><stop offset="1" stop-color="var(--color-accent)" stop-opacity=".15" data-astro-cid-moahk3wj></stop></linearGradient></defs><g class="constellation-edges" aria-hidden="true" data-astro-cid-moahk3wj>${edges.map(([from, to]) => {
		const start = positions[from] ?? [0, 0];
		const end = positions[to] ?? [0, 0];
		return renderTemplate`<line${addAttribute(start[0], "x1")}${addAttribute(start[1], "y1")}${addAttribute(end[0], "x2")}${addAttribute(end[1], "y2")}${addAttribute(from, "data-edge-from")}${addAttribute(to, "data-edge-to")} data-astro-cid-moahk3wj></line>`;
	})}</g><g class="constellation-nodes" data-astro-cid-moahk3wj>${nodes.map((node, index) => {
		const [x = 0, y = 0] = positions[index] ?? [];
		return renderTemplate`<g class="skill-node" data-skill-node${addAttribute(index, "data-node-index")}${addAttribute(node.categoryIndex, "data-category")} tabindex="0" role="button"${addAttribute(`${node.name}: ${node.level}%`, "aria-label")}${addAttribute(`translate(${x} ${y})`, "transform")} data-astro-cid-moahk3wj><circle class="node-pulse" r="27" data-astro-cid-moahk3wj></circle><circle class="node-circle" r="17" data-astro-cid-moahk3wj></circle><circle class="node-core" r="5" data-astro-cid-moahk3wj></circle><text class="node-label" x="26" y="5" data-astro-cid-moahk3wj>${node.name}</text><text class="node-level" x="26" y="22" data-astro-cid-moahk3wj>${node.level}%</text></g>`;
	})}</g></svg><div class="constellation-legend" data-astro-cid-moahk3wj>${categories.map((category, index) => renderTemplate`<span${addAttribute(index, "data-legend-category")} data-astro-cid-moahk3wj><i data-astro-cid-moahk3wj></i>${category.name}</span>`)}</div></div>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/SkillConstellation.astro", void 0);
//#endregion
//#region src/components/sections/Skills.astro
createAstro("https://brianflores.dev");
var $$Skills = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Skills;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	return renderTemplate`${maybeRenderHead($$result)}<section class="skills" id="skills" data-section="skills" data-astro-cid-hsdsz7qj><div class="container" data-astro-cid-hsdsz7qj><div class="skills-header" data-astro-cid-hsdsz7qj>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.skills.label,
		"number": "03",
		"data-astro-cid-hsdsz7qj": true
	})}<h2 class="skills-title font-display reveal" data-astro-cid-hsdsz7qj>${t.skills.title}</h2><p class="skills-subtitle reveal" data-astro-cid-hsdsz7qj>${locale === "es" ? "Una red viva de tecnologías, herramientas y curiosidad constante." : "A living network of technologies, tools and constant curiosity."}</p></div>${renderComponent($$result, "SkillConstellation", $$SkillConstellation, {
		"locale": locale,
		"categories": t.skills.categories,
		"data-astro-cid-hsdsz7qj": true
	})}</div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/Skills.astro", void 0);
//#endregion
//#region node_modules/neotraverse/dist/path-Bxt08XGL.js
var to_string = (obj) => Object.prototype.toString.call(obj);
var is_typed_array = (value) => ArrayBuffer.isView(value) && to_string(value) !== "[object DataView]";
var is_array = Array.isArray;
var is_boxed_primitive = (obj) => {
	const tag = to_string(obj);
	if (tag !== "[object Boolean]" && tag !== "[object Number]" && tag !== "[object String]") return false;
	try {
		return typeof obj.valueOf() !== "object";
	} catch {
		return false;
	}
};
var gopd = Object.getOwnPropertyDescriptor;
var is_property_enumerable = Object.prototype.propertyIsEnumerable;
var get_own_property_symbols = Object.getOwnPropertySymbols;
var has_own_property = Object.prototype.hasOwnProperty;
var object_keys = Object.keys;
var object_proto = Object.prototype;
var get_proto = Object.getPrototypeOf;
function safe_set(dst, key, value) {
	if (typeof key === "object" && key !== null) key = String(key);
	if (key === "__proto__") Object.defineProperty(dst, key, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
	else dst[key] = value;
}
function assert_within_depth(depth, max_depth) {
	if (max_depth !== void 0 && depth > max_depth) throw new RangeError(`neotraverse: maximum traversal depth (${max_depth}) exceeded`);
}
function own_enumerable_keys(obj) {
	const res = object_keys(obj);
	const symbols = get_own_property_symbols(obj);
	for (let i = 0; i < symbols.length; i++) if (is_property_enumerable.call(obj, symbols[i])) res.push(symbols[i]);
	return res;
}
function is_non_writable(object, key) {
	return !gopd(object, key)?.writable;
}
var empty_null = {
	includeSymbols: false,
	immutable: false
};
function clamp_concurrency(c) {
	return typeof c === "number" && c >= 1 ? Math.floor(c) : 1;
}
function array_numeric(keys) {
	for (let i = 0; i < keys.length; i++) {
		const k = keys[i];
		if (typeof k === "string" && "" + +k === k) keys[i] = +k;
	}
	return keys;
}
function array_keys(node, keys) {
	const len = node.length;
	if (keys.length === len) {
		for (let i = 0; i < len; i++) keys[i] = i;
		return keys;
	}
	return array_numeric(keys);
}
function map_set_child_keys(node) {
	if (node instanceof Map) {
		const keys = [];
		for (const k of node.keys()) keys.push(k);
		return keys;
	}
	const keys = [];
	let i = 0;
	for (const _ of node) {
		keys.push(i);
		i++;
	}
	return keys;
}
function get_child_at(node, key, descend_map_set) {
	if (descend_map_set && node instanceof Map) return node.get(key);
	if (descend_map_set && node instanceof Set) return [...node][key];
	return node[key];
}
var shell_keyed = false;
function make_shell(src) {
	if (is_array(src)) {
		shell_keyed = true;
		return new Array(src.length);
	}
	shell_keyed = false;
	if (src instanceof ArrayBuffer) return src.slice(0);
	if (src instanceof DataView) return new DataView(src.buffer.slice(src.byteOffset, src.byteOffset + src.byteLength), 0, src.byteLength);
	if (is_typed_array(src)) return src.slice();
	if (is_boxed_primitive(src)) return Object(src);
	if (src instanceof Map) return new Map(src);
	if (src instanceof Set) return new Set(src);
	if (src instanceof WeakMap || src instanceof WeakSet) return src;
	const tag = to_string(src);
	if (tag === "[object Date]" && typeof src.getTime === "function") {
		shell_keyed = true;
		return new Date(src.getTime());
	}
	if (tag === "[object RegExp]" && typeof src.source === "string") try {
		const re = new RegExp(src.source, src.flags);
		re.lastIndex = src.lastIndex;
		shell_keyed = true;
		return re;
	} catch {}
	if (tag === "[object Error]") {
		const Ctor = typeof src.constructor === "function" ? src.constructor : Error;
		let dst;
		try {
			dst = new Ctor(src.message);
		} catch {
			dst = new Error(src.message);
		}
		if (src.name !== dst.name) dst.name = src.name;
		if (src.stack !== void 0) dst.stack = src.stack;
		if ("cause" in src) dst.cause = src.cause;
		shell_keyed = true;
		return dst;
	}
	if (tag === "[object Map]") {
		shell_keyed = false;
		return new Map(src);
	}
	if (tag === "[object Set]") {
		shell_keyed = false;
		return new Set(src);
	}
	if (tag === "[object ArrayBuffer]") {
		shell_keyed = false;
		return src.slice(0);
	}
	if (tag === "[object DataView]") {
		shell_keyed = false;
		const dv = src;
		return new DataView(dv.buffer.slice(dv.byteOffset, dv.byteOffset + dv.byteLength), 0, dv.byteLength);
	}
	shell_keyed = true;
	const proto = get_proto(src);
	return proto === object_proto ? {} : Object.create(proto);
}
function copy(src, options) {
	if (typeof src === "object" && src !== null) {
		const dst = make_shell(src);
		if (!shell_keyed) return dst;
		const keys = options.includeSymbols ? own_enumerable_keys(src) : object_keys(src);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			safe_set(dst, key, src[key]);
		}
		return dst;
	}
	return src;
}
/**
* The traversal context. Every method lives on the prototype, so visiting a
* node allocates a *single* object — not a context object plus a fresh closure
* for each of `update`/`remove`/`before`/… and a separate `modifiers` object.
* That, plus the lazily-derived {@link path}, is what makes the modern build
* dramatically faster and lighter on the GC than the classic design.
*
* @see https://neotraverse.puruvj.dev/guide/context
*/
var WalkContext = class {
	node;
	node_;
	parent;
	key;
	isRoot;
	isLeaf = false;
	isFirst = false;
	isLast = false;
	level;
	circular = void 0;
	keys = null;
	w;
	keep_going = true;
	removed = false;
	mods = null;
	constructor(w, node_, node) {
		const path = w.path;
		const level = path.length;
		this.w = w;
		this.node = node;
		this.node_ = node_;
		this.parent = w.parents[level - 1];
		this.key = path[level - 1];
		this.isRoot = level === 0;
		this.level = level;
	}
	get parents() {
		return this.w.parents;
	}
	get notRoot() {
		return !this.isRoot;
	}
	get notLeaf() {
		return !this.isLeaf;
	}
	get path() {
		const out = new Array(this.level);
		let c = this;
		for (let i = this.level - 1; i >= 0; i--) {
			out[i] = c.key;
			c = c.parent;
		}
		return out;
	}
	update(x, stopHere = false) {
		if (!this.isRoot) safe_set(this.parent.node, this.key, x);
		this.node = x;
		if (stopHere) this.keep_going = false;
	}
	delete(stopHere) {
		delete this.parent.node[this.key];
		this.removed = true;
		if (stopHere) this.keep_going = false;
	}
	remove(stopHere) {
		const parent = this.parent.node;
		if (is_array(parent)) parent.splice(this.key, 1);
		else delete parent[this.key];
		this.removed = true;
		if (stopHere) this.keep_going = false;
	}
	before(f) {
		(this.mods ??= {}).before = f;
	}
	after(f) {
		(this.mods ??= {}).after = f;
	}
	pre(f) {
		(this.mods ??= {}).pre = f;
	}
	post(f) {
		(this.mods ??= {}).post = f;
	}
	stop() {
		this.w.alive = false;
	}
	block() {
		this.keep_going = false;
	}
	nextSibling() {
		const parent = this.parent;
		if (!parent?.keys || this.key === void 0) return void 0;
		const keys = parent.keys;
		const idx = keys.indexOf(this.key);
		if (idx < 0 || idx >= keys.length - 1) return void 0;
		return make_sibling_ctx(this, keys[idx + 1]);
	}
	prevSibling() {
		const parent = this.parent;
		if (!parent?.keys || this.key === void 0) return void 0;
		const keys = parent.keys;
		const idx = keys.indexOf(this.key);
		if (idx <= 0) return void 0;
		return make_sibling_ctx(this, keys[idx - 1]);
	}
};
function make_sibling_ctx(self, sibKey) {
	const w = self.w;
	const parent = self.parent;
	const sibNode = get_child_at(parent.node, sibKey, w.descend_map_set);
	const sib = new WalkContext(w, sibNode, sibNode);
	sib.parent = parent;
	sib.key = sibKey;
	sib.level = self.level;
	sib.isRoot = self.level === 0;
	if (typeof sibNode === "object" && sibNode !== null) {
		sib.keys = initial_keys(w, sibNode, w.iter);
		sib.isLeaf = sib.keys.length === 0;
	} else sib.isLeaf = true;
	return sib;
}
function make_walk_state(options = empty_null, immutable) {
	return {
		alive: true,
		immutable: immutable ?? !!options.immutable,
		iter: options.includeSymbols ? own_enumerable_keys : object_keys,
		max_depth: options.maxDepth,
		path: [],
		parents: [],
		descend_map_set: !!options.descendIntoMapSet,
		concurrency: clamp_concurrency(options.concurrency)
	};
}
function descend_children(w, ctx, node, walker, immutable, mods, fresh) {
	const { path } = w;
	const pre = mods !== null ? mods.pre : void 0;
	const post = mods !== null ? mods.post : void 0;
	if (w.descend_map_set && node instanceof Map) {
		const entries = [...node.entries()];
		const last = entries.length - 1;
		for (let index = 0; index <= last; index++) {
			if (!w.alive && !immutable) break;
			const [key, val] = entries[index];
			path.push(key);
			if (pre !== void 0) pre(ctx, val, key);
			const child = walker(val);
			if (immutable && child.node !== val) node.set(key, child.node);
			child.isLast = index === last;
			child.isFirst = index === 0;
			if (post !== void 0) post(ctx, child);
			path.pop();
		}
		return;
	}
	if (w.descend_map_set && node instanceof Set) {
		const vals = [...node];
		const last = vals.length - 1;
		for (let index = 0; index <= last; index++) {
			if (!w.alive && !immutable) break;
			path.push(index);
			if (pre !== void 0) pre(ctx, vals[index], index);
			const child = walker(vals[index]);
			if (immutable && child.node !== vals[index]) {
				node.delete(vals[index]);
				node.add(child.node);
			}
			child.isLast = index === last;
			child.isFirst = index === 0;
			if (post !== void 0) post(ctx, child);
			path.pop();
		}
		return;
	}
	const keys = ctx.keys;
	const node_is_array = is_array(node);
	let last = keys.length - 1;
	for (let index = 0; index <= last; index++) {
		if (!w.alive && !immutable) break;
		const key = keys[index];
		const childVal = node[key];
		const len_before = node_is_array ? node.length : 0;
		path.push(key);
		if (pre !== void 0) pre(ctx, childVal, key);
		const child = walker(childVal);
		if (immutable && !child.removed && node[key] !== child.node) {
			if (fresh || has_own_property.call(node, key) && !is_non_writable(node, key)) safe_set(node, key, child.node);
		}
		child.isLast = index === last;
		child.isFirst = index === 0;
		if (post !== void 0) post(ctx, child);
		path.pop();
		if (node_is_array && node.length < len_before) {
			index--;
			last--;
		}
	}
}
function update_state(ctx) {
	const node = ctx.node;
	if (typeof node === "object" && node !== null) {
		if (!ctx.keys || ctx.node_ !== node) if (ctx.w.descend_map_set && node instanceof Map) ctx.keys = map_set_child_keys(node);
		else if (ctx.w.descend_map_set && node instanceof Set) ctx.keys = map_set_child_keys(node);
		else {
			const ks = ctx.w.iter(node);
			ctx.keys = is_array(node) ? array_keys(node, ks) : ks;
		}
		ctx.isLeaf = ctx.keys.length === 0;
	} else {
		ctx.isLeaf = true;
		ctx.keys = null;
	}
}
function initial_keys(w, node0, iter) {
	if (w.descend_map_set && node0 instanceof Map) return map_set_child_keys(node0);
	if (w.descend_map_set && node0 instanceof Set) return map_set_child_keys(node0);
	const keys = iter(node0);
	return is_array(node0) ? array_keys(node0, keys) : keys;
}
/**
* Depth-first walk; {@link forEach} and {@link map} use this internally.
*
* @example
* ```js
* import { walk } from 'neotraverse/modern';
* walk({ a: { b: 1 } }, (ctx) => {
*   if (ctx.path.join('.') === 'a.b') ctx.update(2);
* });
* // => { a: { b: 2 } }
* ```
*
* @see https://neotraverse.puruvj.dev/guide/api/walk#t-walk
*/
function walk(root, cb, options = empty_null) {
	const w = make_walk_state(options);
	const { immutable, max_depth, parents, iter } = w;
	const walker = (node_) => {
		assert_within_depth(w.path.length, max_depth);
		const node0 = immutable ? copy(node_, options) : node_;
		const ctx = new WalkContext(w, node_, node0);
		if (!w.alive) return ctx;
		const node0_is_obj = typeof node0 === "object" && node0 !== null;
		if (node0_is_obj) {
			const keys0 = initial_keys(w, node0, iter);
			ctx.keys = keys0;
			ctx.isLeaf = keys0.length === 0;
			for (let i = 0; i < parents.length; i++) if (parents[i].node_ === node_) {
				ctx.circular = parents[i];
				break;
			}
		} else ctx.isLeaf = true;
		const ret = cb(ctx, node0);
		if (ret !== void 0) ctx.update(ret);
		const mods = ctx.mods;
		if (mods !== null && mods.before !== void 0) mods.before(ctx, ctx.node);
		if (!ctx.keep_going) return ctx;
		const node = ctx.node;
		const fresh = node === node0;
		if ((fresh ? node0_is_obj : typeof node === "object" && node !== null) && ctx.circular === void 0) {
			parents.push(ctx);
			if (!fresh) update_state(ctx);
			descend_children(w, ctx, node, walker, immutable, mods, fresh);
			parents.pop();
		}
		if (mods !== null && mods.after !== void 0) mods.after(ctx, ctx.node);
		return ctx;
	};
	return walker(root).node;
}
/**
* @example
* ```js
* import { forEach } from 'neotraverse/modern';
* forEach([5, -3], (ctx, x) => { if (x < 0) ctx.update(x + 128); });
* // => [5, 125]
* ```
*
* @see https://neotraverse.puruvj.dev/guide/api/core#t-forEach
*/
function forEach(obj, cb, options) {
	return walk(obj, cb, options);
}
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var DATA_STORE_VIRTUAL_ID = "astro:data-layer-content";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
`${DATA_STORE_VIRTUAL_ID}`;
//#endregion
//#region node_modules/astro/dist/assets/utils/resolveImports.js
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
//#endregion
//#region node_modules/astro/dist/content/data-store-source.js
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
//#endregion
//#region node_modules/astro/dist/content/data-store.js
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). A collection's
	* parts are concatenated back into the exact
	* serialized string, then parsed with devalue. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			let stringified = "";
			for (const part of parts) stringified += typeof part === "string" ? part : part.default;
			const entries = devalue.parse(stringified);
			collections.set(collectionName, entries);
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_DconrlJY.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map2 = devalue.unflatten(data.default);
				return ImmutableDataStore.fromMap(map2);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
var globalDataStore = dataStoreSingleton();
//#endregion
//#region node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} \u2192 ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} \u2192 ${entryId}** data does not match the collection schema.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` \u2192 ${String(entryId)}` : ""}** returned an invalid cache hint.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
//#endregion
//#region node_modules/astro/dist/content/runtime.js
var cacheHintSchema = z.object({
	tags: z.array(z.string()).optional(),
	lastModified: z.date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await z.safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_DXqEyLLP.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = resolveEntryData(rawEntry, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			console.warn(`The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				console.warn(`Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_DXqEyLLP.mjs");
			const data = resolveEntryData(entry, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) console.error(message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
	const copy = structuredClone(data);
	forEach(copy, function(ctx, val) {
		if (typeof val === "string" && val.startsWith("__ASTRO_IMAGE_")) {
			const src = val.replace(IMAGE_IMPORT_PREFIX, "");
			const id = imageSrcToImportId(src, fileName);
			if (!id) {
				ctx.update(src);
				return;
			}
			const imported = imageAssetMap?.get(id);
			if (imported) {
				if (imported.__svgData) {
					const { __svgData: svgData, ...meta } = imported;
					ctx.update(createSvgComponent({
						meta,
						...svgData
					}));
				} else ctx.update(imported);
			} else ctx.update(src);
		}
	});
	return copy;
}
function resolveEntryData(entry, imageAssetMap) {
	return entry.assetImports?.length ? updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap) : structuredClone(entry.data);
}
//#endregion
//#region \0astro:content
var liveCollections = {};
var getCollection = createGetCollection({ liveCollections });
createGetEntry({ liveCollections });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
//#endregion
//#region src/components/sections/ProjectsSlider.astro
createAstro("https://brianflores.dev");
var $$ProjectsSlider = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectsSlider;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	const baseUrl = locale === "en" ? "/en" : "";
	const projects = (await getCollection("projects", ({ data }) => data.lang === locale)).sort((a, b) => a.data.order - b.data.order);
	return renderTemplate`${maybeRenderHead($$result)}<section class="projects" id="projects" data-section="projects" data-astro-cid-6kutndl4><div class="projects-pin" data-projects-slider data-astro-cid-6kutndl4><div class="projects-track" data-projects-track data-astro-cid-6kutndl4><div class="projects-intro" data-astro-cid-6kutndl4><div class="container" data-astro-cid-6kutndl4>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.projects.label,
		"number": "04",
		"data-astro-cid-6kutndl4": true
	})}<h2 class="projects-title font-display" data-astro-cid-6kutndl4>${t.projects.title}</h2><p class="projects-subtitle" data-astro-cid-6kutndl4>${t.projects.subtitle}</p><div class="projects-hint" data-astro-cid-6kutndl4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-6kutndl4><path d="M5 12h14M13 5l7 7-7 7" data-astro-cid-6kutndl4></path></svg><span data-astro-cid-6kutndl4>${locale === "es" ? "Scroll horizontal" : "Scroll horizontal"}</span></div></div></div>${projects.map((project, idx) => renderTemplate`<article class="project-slide" data-project-slide data-astro-cid-6kutndl4><div class="container project-slide-inner" data-astro-cid-6kutndl4><div class="project-slide-number" data-astro-cid-6kutndl4>0${idx + 1}</div><div class="project-slide-content" data-astro-cid-6kutndl4><span class="project-slide-status" data-astro-cid-6kutndl4><span class="status-dot" data-astro-cid-6kutndl4></span>${project.data.status === "completed" ? project.data.year : t.projects.coming}</span><h3 class="project-slide-title font-display" data-astro-cid-6kutndl4>${project.data.title}</h3><p class="project-slide-desc" data-astro-cid-6kutndl4>${project.data.description}</p>${project.data.highlights.length > 0 && renderTemplate`<div class="project-slide-highlights" data-astro-cid-6kutndl4><span class="highlights-label" data-astro-cid-6kutndl4>${t.projects.highlights}</span><ul role="list" data-astro-cid-6kutndl4>${project.data.highlights.map((h) => renderTemplate`<li data-astro-cid-6kutndl4><span class="highlight-arrow" data-astro-cid-6kutndl4>→</span><span data-astro-cid-6kutndl4>${h}</span></li>`)}</ul></div>`}<div class="project-slide-tags" data-astro-cid-6kutndl4><span class="tags-label" data-astro-cid-6kutndl4>${t.projects.stack}</span>${project.data.tags.map((tag) => renderTemplate`<span class="project-tag" data-astro-cid-6kutndl4>${tag}</span>`)}</div><div class="project-slide-actions" data-astro-cid-6kutndl4><a${addAttribute(`${baseUrl}/projects/${project.id.split("/")[1]}`, "href")} class="project-btn project-btn-primary magnetic" data-cursor-view data-astro-cid-6kutndl4><span data-astro-cid-6kutndl4>${t.projects.viewProject}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-6kutndl4><path d="M5 12h14M13 5l7 7-7 7" data-astro-cid-6kutndl4></path></svg></a>${project.data.github && renderTemplate`<a${addAttribute(project.data.github, "href")} target="_blank" rel="noopener noreferrer" class="project-btn project-btn-ghost magnetic" data-astro-cid-6kutndl4><svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-6kutndl4><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-5.37-5.37-12-12-12z" data-astro-cid-6kutndl4></path></svg><span data-astro-cid-6kutndl4>${t.projects.viewCode}</span></a>`}</div></div><div class="project-slide-visual" data-astro-cid-6kutndl4><div class="project-image-frame" data-astro-cid-6kutndl4><div class="project-image-placeholder" data-astro-cid-6kutndl4><span class="placeholder-number" data-astro-cid-6kutndl4>${String(idx + 1).padStart(2, "0")}</span><span class="placeholder-name" data-astro-cid-6kutndl4>${project.data.title}</span></div></div><div class="project-image-decoration" aria-hidden="true" data-astro-cid-6kutndl4></div></div></div></article>`)}</div></div><div class="projects-fallback" data-astro-cid-6kutndl4><div class="container" data-astro-cid-6kutndl4><div class="projects-fallback-grid" data-astro-cid-6kutndl4>${projects.map((project, idx) => renderTemplate`<article class="project-card" data-spotlight data-astro-cid-6kutndl4><div class="project-card-visual" data-astro-cid-6kutndl4><div class="project-image-frame small" data-astro-cid-6kutndl4><div class="project-image-placeholder" data-astro-cid-6kutndl4><span class="placeholder-number" data-astro-cid-6kutndl4>${String(idx + 1).padStart(2, "0")}</span></div></div></div><div class="project-card-content" data-astro-cid-6kutndl4><h3 class="project-card-title font-display" data-astro-cid-6kutndl4>${project.data.title}</h3><p class="project-card-desc" data-astro-cid-6kutndl4>${project.data.description}</p><div class="project-card-tags" data-astro-cid-6kutndl4>${project.data.tags.map((tag) => renderTemplate`<span class="project-tag" data-astro-cid-6kutndl4>${tag}</span>`)}</div><a${addAttribute(`${baseUrl}/projects/${project.id.split("/")[1]}`, "href")} class="project-card-link" data-astro-cid-6kutndl4>${t.projects.viewProject} →</a></div></article>`)}</div></div></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/ProjectsSlider.astro", void 0);
//#endregion
//#region src/components/sections/Philosophy.astro
createAstro("https://brianflores.dev");
var $$Philosophy = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Philosophy;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	return renderTemplate`${maybeRenderHead($$result)}<section class="philosophy" id="philosophy" data-section="philosophy" data-astro-cid-kjzoomte><div class="container" data-astro-cid-kjzoomte>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.philosophy.label,
		"number": "05",
		"align": "center",
		"data-astro-cid-kjzoomte": true
	})}<blockquote class="philosophy-quote" data-astro-cid-kjzoomte><span class="quote-mark" aria-hidden="true" data-astro-cid-kjzoomte>&ldquo;</span><p class="quote-text font-display reveal" data-split-text data-astro-cid-kjzoomte>${t.philosophy.quote}</p><footer class="quote-author" data-astro-cid-kjzoomte><span class="author-line" data-astro-cid-kjzoomte></span><cite class="author-name" data-astro-cid-kjzoomte>— ${t.philosophy.author}</cite></footer></blockquote></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/Philosophy.astro", void 0);
//#endregion
//#region src/components/sections/Experience.astro
createAstro("https://brianflores.dev");
var $$Experience = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Experience;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	return renderTemplate`${maybeRenderHead($$result)}<section class="experience" id="experience" data-section="experience" data-astro-cid-uxnjntfu><div class="container" data-astro-cid-uxnjntfu><div class="exp-header" data-astro-cid-uxnjntfu>${renderComponent($$result, "SectionLabel", $$SectionLabel, {
		"label": t.nav.experience,
		"number": "06",
		"data-astro-cid-uxnjntfu": true
	})}<h2 class="exp-title font-display reveal" data-astro-cid-uxnjntfu>${locale === "es" ? "Mi viaje" : "My journey"}</h2></div><ol class="timeline" role="list" data-astro-cid-uxnjntfu><li class="timeline-item reveal" data-astro-cid-uxnjntfu><div class="timeline-marker" data-astro-cid-uxnjntfu><span class="timeline-dot" data-astro-cid-uxnjntfu></span><span class="timeline-line" data-astro-cid-uxnjntfu></span></div><div class="timeline-content" data-astro-cid-uxnjntfu><span class="timeline-date" data-astro-cid-uxnjntfu>2023 — ${locale === "es" ? "Actualidad" : "Present"}</span><h3 class="timeline-title font-display" data-astro-cid-uxnjntfu>${locale === "es" ? "Estudiante de Ingeniería en Software" : "Software Engineering Student"}</h3><p class="timeline-place" data-astro-cid-uxnjntfu>Universidad de las Fuerzas Armadas ESPE · Ecuador</p><p class="timeline-desc" data-astro-cid-uxnjntfu>${locale === "es" ? "Formación en desarrollo de software, arquitecturas, bases de datos y metodologías ágiles. Trabajo en proyectos académicos y personales con Angular, Flutter y TypeScript." : "Education in software development, architectures, databases and agile methodologies. Working on academic and personal projects with Angular, Flutter and TypeScript."}</p></div></li><li class="timeline-item reveal" data-astro-cid-uxnjntfu><div class="timeline-marker" data-astro-cid-uxnjntfu><span class="timeline-dot" data-astro-cid-uxnjntfu></span><span class="timeline-line" data-astro-cid-uxnjntfu></span></div><div class="timeline-content" data-astro-cid-uxnjntfu><span class="timeline-date" data-astro-cid-uxnjntfu>2024</span><h3 class="timeline-title font-display" data-astro-cid-uxnjntfu>${locale === "es" ? "Proyectos Freelance" : "Freelance Projects"}</h3><p class="timeline-place" data-astro-cid-uxnjntfu>${locale === "es" ? "Varios clientes · Remoto" : "Various clients · Remote"}</p><p class="timeline-desc" data-astro-cid-uxnjntfu>${locale === "es" ? "Desarrollo de aplicaciones web y móviles para clientes reales, desde landing pages hasta aplicaciones complejas con backend." : "Web and mobile app development for real clients, from landing pages to complex applications with backend."}</p></div></li><li class="timeline-item reveal" data-astro-cid-uxnjntfu><div class="timeline-marker" data-astro-cid-uxnjntfu><span class="timeline-dot" data-astro-cid-uxnjntfu></span><span class="timeline-line" data-astro-cid-uxnjntfu></span></div><div class="timeline-content" data-astro-cid-uxnjntfu><span class="timeline-date" data-astro-cid-uxnjntfu>2022</span><h3 class="timeline-title font-display" data-astro-cid-uxnjntfu>${locale === "es" ? "Primeros pasos en código" : "First steps in code"}</h3><p class="timeline-place" data-astro-cid-uxnjntfu>${locale === "es" ? "Autodidacta · Ecuador" : "Self-taught · Ecuador"}</p><p class="timeline-desc" data-astro-cid-uxnjntfu>${locale === "es" ? "Descubrí la programación y comencé a construir proyectos propios: calculadoras, sitios web estáticos, pequeños bots. Ese fue el inicio del camino." : "I discovered programming and started building personal projects: calculators, static websites, small bots. That was the beginning of the journey."}</p></div></li></ol></div></section>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/Experience.astro", void 0);
//#endregion
//#region src/components/sections/ContactSection.astro
createAstro("https://brianflores.dev");
var $$ContactSection = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ContactSection;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	return renderTemplate`${maybeRenderHead($$result)}<section class="contact-section" id="contact" data-section="contact" data-astro-cid-iitoow3x><div class="contact-bg" aria-hidden="true" data-astro-cid-iitoow3x><div class="contact-glow" data-astro-cid-iitoow3x></div></div><div class="container contact-container"${addAttribute(t.contact.validation.nameRequired, "data-msg-name-required")}${addAttribute(t.contact.validation.emailRequired, "data-msg-email-required")}${addAttribute(t.contact.validation.emailInvalid, "data-msg-email-invalid")}${addAttribute(t.contact.validation.messageRequired, "data-msg-message-required")}${addAttribute(t.contact.validation.messageMin, "data-msg-message-min")}${addAttribute(t.contact.success, "data-msg-success")}${addAttribute(t.contact.error, "data-msg-error")} data-astro-cid-iitoow3x><div class="contact-info" data-astro-cid-iitoow3x><div class="contact-info-inner reveal" data-astro-cid-iitoow3x><span class="contact-tag" data-astro-cid-iitoow3x>${t.contact.label}</span><h2 class="contact-title font-display" data-astro-cid-iitoow3x>${t.contact.title}</h2><p class="contact-desc" data-astro-cid-iitoow3x>${t.contact.subtitle}</p><div class="contact-cards" data-astro-cid-iitoow3x><a href="mailto:brianf13@outlook.es" class="contact-card magnetic" data-astro-cid-iitoow3x><div class="contact-card-icon" data-astro-cid-iitoow3x><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-iitoow3x><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-iitoow3x></path><polyline points="22,6 12,13 2,6" data-astro-cid-iitoow3x></polyline></svg></div><div class="contact-card-content" data-astro-cid-iitoow3x><span class="contact-card-label" data-astro-cid-iitoow3x>${t.contact.info.email}</span><span class="contact-card-value" data-astro-cid-iitoow3x>brianf13@outlook.es</span></div></a><div class="contact-card" data-astro-cid-iitoow3x><div class="contact-card-icon" data-astro-cid-iitoow3x><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-iitoow3x><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" data-astro-cid-iitoow3x></path><circle cx="12" cy="10" r="3" data-astro-cid-iitoow3x></circle></svg></div><div class="contact-card-content" data-astro-cid-iitoow3x><span class="contact-card-label" data-astro-cid-iitoow3x>${t.contact.info.location}</span><span class="contact-card-value" data-astro-cid-iitoow3x>${t.contact.info.locationValue}</span></div></div><div class="contact-card" data-astro-cid-iitoow3x><div class="contact-card-icon" data-astro-cid-iitoow3x><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-iitoow3x><circle cx="12" cy="12" r="10" data-astro-cid-iitoow3x></circle><polyline points="12,6 12,12 16,14" data-astro-cid-iitoow3x></polyline></svg></div><div class="contact-card-content" data-astro-cid-iitoow3x><span class="contact-card-label" data-astro-cid-iitoow3x>${t.contact.info.availability}</span><span class="contact-card-value" data-astro-cid-iitoow3x><span class="status-pill" data-astro-cid-iitoow3x><span class="status-dot" data-astro-cid-iitoow3x></span>${locale === "es" ? "Abierto a oportunidades" : "Open to opportunities"}</span></span></div></div></div></div></div><form class="contact-form reveal" id="contact-form" novalidate data-form-mount data-astro-cid-iitoow3x><div class="form-row" data-astro-cid-iitoow3x><div class="form-group" data-astro-cid-iitoow3x><label for="name" data-astro-cid-iitoow3x>${t.contact.name} *</label><input type="text" id="name" name="name" required autocomplete="name" placeholder="John Doe" data-astro-cid-iitoow3x><span class="form-error" data-error="name" data-astro-cid-iitoow3x></span></div><div class="form-group" data-astro-cid-iitoow3x><label for="email" data-astro-cid-iitoow3x>${t.contact.email} *</label><input type="email" id="email" name="email" required autocomplete="email" placeholder="john@example.com" data-astro-cid-iitoow3x><span class="form-error" data-error="email" data-astro-cid-iitoow3x></span></div></div><div class="form-group" data-astro-cid-iitoow3x><label for="subject" data-astro-cid-iitoow3x>${t.contact.subject}</label><input type="text" id="subject" name="subject" placeholder="..." data-astro-cid-iitoow3x></div><div class="form-group" data-astro-cid-iitoow3x><label for="message" data-astro-cid-iitoow3x>${t.contact.message} *</label><textarea id="message" name="message" required rows="6" placeholder="..." data-astro-cid-iitoow3x></textarea><span class="form-error" data-error="message" data-astro-cid-iitoow3x></span></div><input type="text" name="bot-field" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" data-astro-cid-iitoow3x><button type="submit" class="form-submit magnetic" data-astro-cid-iitoow3x><span class="submit-text" data-astro-cid-iitoow3x>${t.contact.send}</span><span class="submit-icon" data-astro-cid-iitoow3x><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-iitoow3x><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" data-astro-cid-iitoow3x></path></svg></span><span class="submit-loader" aria-hidden="true" data-astro-cid-iitoow3x></span></button><div class="form-status" role="status" aria-live="polite" data-astro-cid-iitoow3x></div></form></div></section>${renderScript($$result, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/sections/ContactSection.astro", void 0);
//#endregion
export { $$Skills as a, $$Hero as c, $$ProjectsSlider as i, $$Experience as n, $$Services as o, $$Philosophy as r, $$StickyIntro as s, $$ContactSection as t };
