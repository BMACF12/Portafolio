import { D as createAstro, T as unescapeHTML, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, i as renderComponent, v as createRenderInstruction } from "./server_COAt0vAw.mjs";
import { t as createComponent } from "./compiler_BxPS5cUm.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/utils/i18n.ts
var languages = {
	es: {
		meta: {
			"title": "Brian Flores | Desarrollador Full-Stack",
			"description": "Desarrollador de Software especializado en Angular, TypeScript y Flutter. Construyo experiencias digitales modernas, rápidas y accesibles.",
			"ogDescription": "Portafolio de Brian Flores — Desarrollador Full-Stack en Ecuador, especializado en Angular y Flutter.",
			"keywords": [
				"desarrollador",
				"full-stack",
				"angular",
				"typescript",
				"flutter",
				"ecuador",
				"portafolio"
			],
			"author": "Brian Flores",
			"locale": "es-ES"
		},
		nav: {
			"home": "Inicio",
			"services": "Servicios",
			"skills": "Habilidades",
			"projects": "Proyectos",
			"experience": "Experiencia",
			"contact": "Contacto",
			"cv": "Descargar CV",
			"openMenu": "Abrir menú",
			"closeMenu": "Cerrar menú",
			"skipToContent": "Saltar al contenido principal"
		},
		hero: {
			"greeting": "Hola, soy",
			"name": "Brian Flores",
			"tagline": "Ingeniero de Software",
			"rotatingTexts": [
				"Desarrollador Full-Stack",
				"Angular & TypeScript",
				"Flutter & Dart",
				"Apasionado por el código"
			],
			"description": "Construyo productos digitales que la gente ama. Especializado en experiencias web y móviles con un enfoque obsesivo en el detalle.",
			"cta": {
				"primary": "Ver mi trabajo",
				"secondary": "Hablemos"
			},
			"scrollIndicator": "Desliza para descubrir"
		},
		intro: {
			"label": "Sobre mí",
			"title": "Diseño y construyo",
			"titleAccent": "experiencias digitales",
			"paragraphs": [
				"Soy Ingeniero en Software en formación en la Universidad de las Fuerzas Armadas ESPE, con sede en Ecuador. Combino una base académica sólida con experiencia práctica construyendo aplicaciones reales.",
				"Mi enfoque está en el frontend moderno: arquitecturas escalables en Angular, interfaces accesibles y experiencias móviles fluidas con Flutter. Cada proyecto es una oportunidad para aprender algo nuevo.",
				"Cuando no escribo código, me encontrarás leyendo sobre arquitectura de software, contribuyendo a proyectos open source o experimentando con nuevas tecnologías."
			]
		},
		services: {
			"label": "Servicios",
			"title": "Lo que hago",
			"items": [
				{
					"title": "Desarrollo Web",
					"description": "Aplicaciones SPA y SSR con Angular, TypeScript y las últimas prácticas del ecosistema frontend."
				},
				{
					"title": "Desarrollo Móvil",
					"description": "Apps multiplataforma con Flutter y Dart, con foco en rendimiento y experiencia nativa."
				},
				{
					"title": "APIs y Backend",
					"description": "Integración con servicios RESTful, autenticación JWT y arquitecturas serverless modernas."
				},
				{
					"title": "UI/UX Engineering",
					"description": "Interfaces intuitivas, accesibles y responsivas con Tailwind, animaciones fluidas con GSAP."
				},
				{
					"title": "Optimización Web",
					"description": "Sitios web rápidos como un rayo: técnicas de performance, SEO técnico y Core Web Vitals."
				},
				{
					"title": "Consultoría Técnica",
					"description": "Code review, arquitectura de proyectos y mentoría para equipos junior."
				}
			]
		},
		skills: {
			"label": "Stack",
			"title": "Mi caja de herramientas",
			"categories": [
				{
					"name": "Frontend",
					"skills": [
						{
							"name": "Angular",
							"level": 90
						},
						{
							"name": "TypeScript",
							"level": 88
						},
						{
							"name": "JavaScript",
							"level": 92
						},
						{
							"name": "HTML & CSS",
							"level": 95
						},
						{
							"name": "Tailwind CSS",
							"level": 90
						},
						{
							"name": "RxJS",
							"level": 80
						}
					]
				},
				{
					"name": "Mobile",
					"skills": [
						{
							"name": "Flutter",
							"level": 85
						},
						{
							"name": "Dart",
							"level": 82
						},
						{
							"name": "Firebase",
							"level": 78
						},
						{
							"name": "REST APIs",
							"level": 88
						},
						{
							"name": "Push Notifications",
							"level": 75
						},
						{
							"name": "State Management",
							"level": 80
						}
					]
				},
				{
					"name": "Tools & More",
					"skills": [
						{
							"name": "Git & GitHub",
							"level": 90
						},
						{
							"name": "Scrum / Kanban",
							"level": 85
						},
						{
							"name": "Figma",
							"level": 75
						},
						{
							"name": "Vite / Webpack",
							"level": 80
						},
						{
							"name": "Vercel / Netlify",
							"level": 85
						},
						{
							"name": "Problem Solving",
							"level": 92
						}
					]
				}
			]
		},
		projects: {
			"label": "Proyectos",
			"title": "Cosas que he construido",
			"subtitle": "Una selección de proyectos donde apliqué pensamiento crítico y código limpio.",
			"viewProject": "Ver proyecto",
			"viewCode": "Ver código",
			"liveDemo": "Demo en vivo",
			"stack": "Stack",
			"highlights": "Highlights",
			"coming": "Pronto",
			"allProjects": "Todos los proyectos",
			"backToProjects": "Volver a proyectos",
			"otherProjects": "Otros proyectos",
			"year": "Año",
			"statusLabel": "Estado",
			"statusLabels": {
				"completed": "Completado",
				"in-progress": "En desarrollo",
				"archived": "Archivado"
			}
		},
		philosophy: {
			"label": "Filosofía",
			"quote": "El código es poesía. Cada función es un verso, cada módulo una estrofa, y el producto final es la obra que el usuario experimenta.",
			"author": "Brian Flores"
		},
		contact: {
			"label": "Contacto",
			"title": "¿Construimos algo juntos?",
			"subtitle": "Estoy disponible para oportunidades laborales, proyectos freelance y colaboraciones.",
			"name": "Nombre",
			"email": "Email",
			"subject": "Asunto",
			"message": "Mensaje",
			"send": "Enviar mensaje",
			"sending": "Enviando...",
			"success": "¡Gracias! Te responderé pronto.",
			"error": "Hubo un error. Por favor intenta de nuevo.",
			"validation": {
				"nameRequired": "El nombre es obligatorio",
				"emailRequired": "El email es obligatorio",
				"emailInvalid": "Email inválido",
				"messageRequired": "El mensaje es obligatorio",
				"messageMin": "El mensaje debe tener al menos 10 caracteres"
			},
			"info": {
				"email": "Email",
				"location": "Ubicación",
				"locationValue": "Ecuador · Disponible remoto",
				"availability": "Disponibilidad"
			}
		},
		footer: {
			"tagline": "Construido con código limpio y mucho café ☕",
			"rights": "Todos los derechos reservados.",
			"builtWith": "Construido con"
		},
		social: {
			"linkedin": "LinkedIn",
			"github": "GitHub",
			"instagram": "Instagram",
			"email": "Email"
		}
	},
	en: {
		meta: {
			"title": "Brian Flores | Full-Stack Developer",
			"description": "Software Developer specialized in Angular, TypeScript and Flutter. I build modern, fast and accessible digital experiences.",
			"ogDescription": "Brian Flores's Portfolio — Full-Stack Developer based in Ecuador, specialized in Angular and Flutter.",
			"keywords": [
				"developer",
				"full-stack",
				"angular",
				"typescript",
				"flutter",
				"ecuador",
				"portfolio"
			],
			"author": "Brian Flores",
			"locale": "en-US"
		},
		nav: {
			"home": "Home",
			"services": "Services",
			"skills": "Skills",
			"projects": "Projects",
			"experience": "Experience",
			"contact": "Contact",
			"cv": "Download CV",
			"openMenu": "Open menu",
			"closeMenu": "Close menu",
			"skipToContent": "Skip to main content"
		},
		hero: {
			"greeting": "Hi, I'm",
			"name": "Brian Flores",
			"tagline": "Software Engineer",
			"rotatingTexts": [
				"Full-Stack Developer",
				"Angular & TypeScript",
				"Flutter & Dart",
				"Passionate about code"
			],
			"description": "I build digital products people love. Specialized in web and mobile experiences with an obsessive focus on detail.",
			"cta": {
				"primary": "See my work",
				"secondary": "Let's talk"
			},
			"scrollIndicator": "Scroll to discover"
		},
		intro: {
			"label": "About me",
			"title": "I design and build",
			"titleAccent": "digital experiences",
			"paragraphs": [
				"I'm a Software Engineer in training at Universidad de las Fuerzas Armadas ESPE in Ecuador. I combine a solid academic foundation with hands-on experience building real-world applications.",
				"My focus is on modern frontend: scalable architectures in Angular, accessible interfaces and fluid mobile experiences with Flutter. Every project is an opportunity to learn something new.",
				"When I'm not coding, you'll find me reading about software architecture, contributing to open source or experimenting with new technologies."
			]
		},
		services: {
			"label": "Services",
			"title": "What I do",
			"items": [
				{
					"title": "Web Development",
					"description": "SPA and SSR applications with Angular, TypeScript and the latest frontend ecosystem practices."
				},
				{
					"title": "Mobile Development",
					"description": "Cross-platform apps with Flutter and Dart, focused on performance and native experience."
				},
				{
					"title": "APIs & Backend",
					"description": "Integration with RESTful services, JWT authentication and modern serverless architectures."
				},
				{
					"title": "UI/UX Engineering",
					"description": "Intuitive, accessible and responsive interfaces with Tailwind, smooth animations with GSAP."
				},
				{
					"title": "Web Optimization",
					"description": "Lightning-fast websites: performance techniques, technical SEO and Core Web Vitals."
				},
				{
					"title": "Technical Consulting",
					"description": "Code review, project architecture and mentoring for junior teams."
				}
			]
		},
		skills: {
			"label": "Stack",
			"title": "My toolbox",
			"categories": [
				{
					"name": "Frontend",
					"skills": [
						{
							"name": "Angular",
							"level": 90
						},
						{
							"name": "TypeScript",
							"level": 88
						},
						{
							"name": "JavaScript",
							"level": 92
						},
						{
							"name": "HTML & CSS",
							"level": 95
						},
						{
							"name": "Tailwind CSS",
							"level": 90
						},
						{
							"name": "RxJS",
							"level": 80
						}
					]
				},
				{
					"name": "Mobile",
					"skills": [
						{
							"name": "Flutter",
							"level": 85
						},
						{
							"name": "Dart",
							"level": 82
						},
						{
							"name": "Firebase",
							"level": 78
						},
						{
							"name": "REST APIs",
							"level": 88
						},
						{
							"name": "Push Notifications",
							"level": 75
						},
						{
							"name": "State Management",
							"level": 80
						}
					]
				},
				{
					"name": "Tools & More",
					"skills": [
						{
							"name": "Git & GitHub",
							"level": 90
						},
						{
							"name": "Scrum / Kanban",
							"level": 85
						},
						{
							"name": "Figma",
							"level": 75
						},
						{
							"name": "Vite / Webpack",
							"level": 80
						},
						{
							"name": "Vercel / Netlify",
							"level": 85
						},
						{
							"name": "Problem Solving",
							"level": 92
						}
					]
				}
			]
		},
		projects: {
			"label": "Projects",
			"title": "Things I've built",
			"subtitle": "A selection of projects where I applied critical thinking and clean code.",
			"viewProject": "View project",
			"viewCode": "View code",
			"liveDemo": "Live demo",
			"stack": "Stack",
			"highlights": "Highlights",
			"coming": "Coming soon",
			"allProjects": "All projects",
			"backToProjects": "Back to projects",
			"otherProjects": "Other projects",
			"year": "Year",
			"statusLabel": "Status",
			"statusLabels": {
				"completed": "Completed",
				"in-progress": "In progress",
				"archived": "Archived"
			}
		},
		philosophy: {
			"label": "Philosophy",
			"quote": "Code is poetry. Every function is a verse, every module a stanza, and the final product is the work the user experiences.",
			"author": "Brian Flores"
		},
		contact: {
			"label": "Contact",
			"title": "Shall we build something together?",
			"subtitle": "I'm available for job opportunities, freelance projects and collaborations.",
			"name": "Name",
			"email": "Email",
			"subject": "Subject",
			"message": "Message",
			"send": "Send message",
			"sending": "Sending...",
			"success": "Thanks! I'll get back to you soon.",
			"error": "Something went wrong. Please try again.",
			"validation": {
				"nameRequired": "Name is required",
				"emailRequired": "Email is required",
				"emailInvalid": "Invalid email",
				"messageRequired": "Message is required",
				"messageMin": "Message must be at least 10 characters"
			},
			"info": {
				"email": "Email",
				"location": "Location",
				"locationValue": "Ecuador · Remote available",
				"availability": "Availability"
			}
		},
		footer: {
			"tagline": "Built with clean code and lots of coffee ☕",
			"rights": "All rights reserved.",
			"builtWith": "Built with"
		},
		social: {
			"linkedin": "LinkedIn",
			"github": "GitHub",
			"instagram": "Instagram",
			"email": "Email"
		}
	}
};
function useTranslations(locale) {
	return languages[locale];
}
function getOppositeLocale(locale) {
	return locale === "es" ? "en" : "es";
}
var supportedLocales = ["es", "en"];
function getLocaleLabel(locale) {
	return locale.toUpperCase();
}
//#endregion
//#region src/components/nav/ThemeToggle.astro
createAstro("https://brianflores.dev");
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ThemeToggle;
	const { locale = "es" } = Astro.props;
	const label = locale === "en" ? "Toggle theme" : "Cambiar tema";
	return renderTemplate`${maybeRenderHead($$result)}<button class="theme-toggle" type="button"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-vntfbfsx><svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-vntfbfsx><circle cx="12" cy="12" r="4" data-astro-cid-vntfbfsx></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" data-astro-cid-vntfbfsx></path></svg><svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-vntfbfsx><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-vntfbfsx></path></svg></button>${renderScript($$result, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/nav/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/nav/ThemeToggle.astro", void 0);
//#endregion
//#region src/components/nav/LanguageSelector.astro
createAstro("https://brianflores.dev");
var $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LanguageSelector;
	const { locale, currentPath } = Astro.props;
	const otherLocale = getOppositeLocale(locale);
	const switchHref = (() => {
		if (locale === "es") return currentPath === "/" ? "/en" : `/en${currentPath}`;
		return currentPath.replace(/^\/en/, "") || "/";
	})();
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(switchHref, "href")} class="lang-switcher"${addAttribute(`Switch to ${getLocaleLabel(otherLocale)}`, "aria-label")} data-astro-cid-mq5ku57c><span${addAttribute(["lang-option", { active: locale === "es" }], "class:list")} data-astro-cid-mq5ku57c>ES</span><span class="lang-divider" data-astro-cid-mq5ku57c>/</span><span${addAttribute(["lang-option", { active: locale === "en" }], "class:list")} data-astro-cid-mq5ku57c>EN</span></a>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/nav/LanguageSelector.astro", void 0);
//#endregion
//#region src/components/nav/Navbar.astro
createAstro("https://brianflores.dev");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { locale, currentPath } = Astro.props;
	const t = useTranslations(locale);
	const pathWithoutLocale = currentPath.replace(/^\/(en)/, "") || "/";
	const navLinks = [
		{
			href: `/${pathWithoutLocale === "/" ? "" : pathWithoutLocale}#home`,
			label: t.nav.home,
			id: "home"
		},
		{
			href: `/${pathWithoutLocale === "/" ? "" : pathWithoutLocale}#intro`,
			label: t.nav.services,
			id: "services"
		},
		{
			href: `/${pathWithoutLocale === "/" ? "" : pathWithoutLocale}#skills`,
			label: t.nav.skills,
			id: "skills"
		},
		{
			href: `/${pathWithoutLocale === "/" ? "" : pathWithoutLocale}#projects`,
			label: t.nav.projects,
			id: "projects"
		},
		{
			href: `/${pathWithoutLocale === "/" ? "" : pathWithoutLocale}#contact`,
			label: t.nav.contact,
			id: "contact"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header class="navbar" data-navbar data-astro-cid-mzkjb7uu><a${addAttribute(currentPath, "href")} class="logo magnetic"${addAttribute(t.meta.author, "aria-label")} data-astro-cid-mzkjb7uu><span class="logo-mark" aria-hidden="true" data-astro-cid-mzkjb7uu>BF</span><span class="logo-text" data-astro-cid-mzkjb7uu>brian<span class="dot" data-astro-cid-mzkjb7uu>.</span>dev</span></a><nav class="nav-desktop" aria-label="Primary navigation" data-astro-cid-mzkjb7uu><ul role="list" data-astro-cid-mzkjb7uu>${navLinks.map((link) => renderTemplate`<li data-astro-cid-mzkjb7uu><a${addAttribute(link.href, "href")} class="nav-link" data-astro-cid-mzkjb7uu>${link.label}</a></li>`)}</ul></nav><div class="nav-actions" data-astro-cid-mzkjb7uu><a href="/cv/Brian_Flores_CV.pdf" class="cta-cv magnetic" download data-astro-cid-mzkjb7uu><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-mzkjb7uu><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" data-astro-cid-mzkjb7uu></path></svg><span data-astro-cid-mzkjb7uu>${t.nav.cv}</span></a>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {
		"locale": locale,
		"currentPath": currentPath,
		"data-astro-cid-mzkjb7uu": true
	})}${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {
		"locale": locale,
		"data-astro-cid-mzkjb7uu": true
	})}</div><button class="menu-toggle magnetic" type="button" aria-controls="mobile-menu" aria-expanded="false"${addAttribute(t.nav.openMenu, "aria-label")} data-astro-cid-mzkjb7uu><span class="menu-line" data-astro-cid-mzkjb7uu></span><span class="menu-line" data-astro-cid-mzkjb7uu></span><span class="menu-line" data-astro-cid-mzkjb7uu></span></button><div id="mobile-menu" class="nav-mobile" aria-hidden="true" data-astro-cid-mzkjb7uu><nav aria-label="Mobile navigation" data-astro-cid-mzkjb7uu><ul role="list" data-astro-cid-mzkjb7uu>${navLinks.map((link) => renderTemplate`<li data-astro-cid-mzkjb7uu><a${addAttribute(link.href, "href")} class="nav-link-mobile" data-astro-cid-mzkjb7uu>${link.label}</a></li>`)}<li data-astro-cid-mzkjb7uu><a href="/cv/Brian_Flores_CV.pdf" class="nav-link-mobile cta" download data-astro-cid-mzkjb7uu>${t.nav.cv}</a></li></ul><div class="mobile-actions" data-astro-cid-mzkjb7uu>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {
		"locale": locale,
		"currentPath": currentPath,
		"data-astro-cid-mzkjb7uu": true
	})}${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {
		"locale": locale,
		"data-astro-cid-mzkjb7uu": true
	})}</div></nav></div></header>${renderScript($$result, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/nav/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/nav/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://brianflores.dev");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const { locale } = Astro.props;
	const t = useTranslations(locale);
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const socialLinks = [
		{
			name: t.social.linkedin,
			href: "https://www.linkedin.com/in/brian-flores-dev",
			icon: "linkedin"
		},
		{
			name: t.social.github,
			href: "https://github.com/BMACF12",
			icon: "github"
		},
		{
			name: t.social.email,
			href: "mailto:brianf13@outlook.es",
			icon: "email"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-astro-cid-jo6i4kqk><div class="container" data-astro-cid-jo6i4kqk><div class="footer-cta" data-astro-cid-jo6i4kqk><span class="footer-label reveal" data-astro-cid-jo6i4kqk>${t.contact.label}</span><h2 class="footer-title reveal" data-astro-cid-jo6i4kqk>${t.contact.title}</h2><p class="footer-subtitle reveal" data-astro-cid-jo6i4kqk>${t.contact.subtitle}</p><div class="footer-actions reveal-stagger" data-astro-cid-jo6i4kqk><a href="mailto:brianf13@outlook.es" class="btn-primary magnetic" data-astro-cid-jo6i4kqk><span data-astro-cid-jo6i4kqk>brianf13@outlook.es</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-jo6i4kqk><path d="M5 12h14M13 5l7 7-7 7" data-astro-cid-jo6i4kqk></path></svg></a><a href="tel:+593995466923" class="btn-secondary magnetic" data-astro-cid-jo6i4kqk><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-jo6i4kqk><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" data-astro-cid-jo6i4kqk></path></svg><span data-astro-cid-jo6i4kqk>+593 99 546 6923</span></a></div></div><div class="footer-divider" data-astro-cid-jo6i4kqk></div><div class="footer-bottom" data-astro-cid-jo6i4kqk><div class="footer-brand" data-astro-cid-jo6i4kqk><span class="footer-logo" data-astro-cid-jo6i4kqk>BF</span><p class="footer-tagline" data-astro-cid-jo6i4kqk>${t.footer.tagline}</p></div><div class="footer-social" data-astro-cid-jo6i4kqk>${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="social-link magnetic"${addAttribute(link.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(link.href.startsWith("http") ? "noopener noreferrer" : void 0, "rel")}${addAttribute(link.name, "aria-label")} data-astro-cid-jo6i4kqk>${link.icon === "linkedin" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-jo6i4kqk><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" data-astro-cid-jo6i4kqk></path></svg>`}${link.icon === "github" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-jo6i4kqk><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-5.37-5.37-12-12-12z" data-astro-cid-jo6i4kqk></path></svg>`}${link.icon === "email" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-jo6i4kqk><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-jo6i4kqk></path><polyline points="22,6 12,13 2,6" data-astro-cid-jo6i4kqk></polyline></svg>`}</a>`)}</div></div><div class="footer-meta" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>&copy; ${year} Brian Flores. ${t.footer.rights}</p><p data-astro-cid-jo6i4kqk>${t.footer.builtWith}<span class="tech-pill" data-astro-cid-jo6i4kqk>Astro</span><span class="tech-pill" data-astro-cid-jo6i4kqk>TypeScript</span><span class="tech-pill" data-astro-cid-jo6i4kqk>GSAP</span><span class="tech-pill" data-astro-cid-jo6i4kqk>Tailwind</span></p></div></div></footer>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/Footer.astro", void 0);
//#endregion
//#region node_modules/astro/components/ClientRouter.astro
createAstro("https://brianflores.dev");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/brian/dev/Paginas_web/Portafolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region src/components/ui/GlobalAtmosphere.astro
var $$GlobalAtmosphere = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="global-atmosphere" aria-hidden="true" data-astro-cid-xmllxep4><div class="global-grid" data-astro-cid-xmllxep4></div><div class="global-aurora" data-aurora data-astro-cid-xmllxep4></div><div class="global-noise" data-astro-cid-xmllxep4></div></div>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/GlobalAtmosphere.astro", void 0);
//#endregion
//#region src/components/ui/CustomCursor.astro
var $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="cursor-dot" data-cursor-dot aria-hidden="true" data-astro-cid-e6fwppol></div><div class="cursor-ring" data-cursor-ring aria-hidden="true" data-astro-cid-e6fwppol></div>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/CustomCursor.astro", void 0);
//#endregion
//#region src/components/ui/ScrollProgressIndicator.astro
var $$ScrollProgressIndicator = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button class="scroll-counter" data-scroll-counter type="button" aria-label="Scroll to top" data-astro-cid-z5shn6ra><span data-scroll-percent data-astro-cid-z5shn6ra>00</span><small data-astro-cid-z5shn6ra>%</small></button>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/ScrollProgressIndicator.astro", void 0);
//#endregion
//#region src/components/ui/SectionIndicator.astro
var $$SectionIndicator = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<aside class="section-indicator" data-section-indicator aria-label="Section navigation" data-astro-cid-4jrni7i7><span class="section-indicator-line" data-astro-cid-4jrni7i7></span><div class="section-dots" data-astro-cid-4jrni7i7><a href="#home" data-section-dot data-section-target="home" aria-label="Home" data-astro-cid-4jrni7i7></a><a href="#intro" data-section-dot data-section-target="intro" aria-label="About" data-astro-cid-4jrni7i7></a><a href="#services" data-section-dot data-section-target="services" aria-label="Services" data-astro-cid-4jrni7i7></a><a href="#skills" data-section-dot data-section-target="skills" aria-label="Skills" data-astro-cid-4jrni7i7></a><a href="#projects" data-section-dot data-section-target="projects" aria-label="Projects" data-astro-cid-4jrni7i7></a><a href="#philosophy" data-section-dot data-section-target="philosophy" aria-label="Philosophy" data-astro-cid-4jrni7i7></a><a href="#experience" data-section-dot data-section-target="experience" aria-label="Experience" data-astro-cid-4jrni7i7></a><a href="#contact" data-section-dot data-section-target="contact" aria-label="Contact" data-astro-cid-4jrni7i7></a></div></aside>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/SectionIndicator.astro", void 0);
//#endregion
//#region src/components/ui/Letterbox.astro
var $$Letterbox = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="letterbox letterbox-top" data-letterbox aria-hidden="true" data-astro-cid-4csdnuln></div><div class="letterbox letterbox-bottom" data-letterbox aria-hidden="true" data-astro-cid-4csdnuln></div>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/components/ui/Letterbox.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://brianflores.dev");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description, ogImage = "/og-image.jpg", locale = "es", canonical } = Astro.props;
	const t = useTranslations(locale);
	const fullTitle = title ? `${title} · Brian Flores` : t.meta.title;
	const metaDescription = description ?? t.meta.description;
	const canonicalUrl = canonical ?? new URL(Astro.url.pathname, Astro.site).toString();
	const alternateUrls = supportedLocales.map((loc) => ({
		hreflang: loc === "es" ? "es-ES" : "en-US",
		href: new URL(Astro.url.pathname, Astro.site).toString().replace(/\/(en)/, loc === "es" ? "" : "/en")
	}));
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Brian Flores",
		jobTitle: "Full-Stack Developer",
		url: Astro.site?.toString(),
		sameAs: ["https://www.linkedin.com/in/brian-flores-dev", "https://github.com/BMACF12"],
		knowsAbout: [
			"Angular",
			"TypeScript",
			"Flutter",
			"Dart",
			"Firebase",
			"REST APIs"
		],
		address: {
			"@type": "PostalAddress",
			addressCountry: "EC"
		}
	};
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Brian Flores · Portfolio",
		url: Astro.site?.toString()
	};
	return renderTemplate`<html${addAttribute(locale === "en" ? "en-US" : "es-ES", "lang")} class="lenis" data-theme="dark" data-astro-cid-z4jru4n3><head>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-z4jru4n3": true })}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="color-scheme" content="dark light"><meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)"><meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)"><title>${fullTitle}</title><meta name="description"${addAttribute(metaDescription, "content")}><meta name="author"${addAttribute(t.meta.author, "content")}><meta name="keywords"${addAttribute(t.meta.keywords.join(", "), "content")}><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(canonicalUrl, "href")}>${alternateUrls.map((alt) => renderTemplate`<link rel="alternate"${addAttribute(alt.hreflang, "hreflang")}${addAttribute(alt.href, "href")}>`)}<!-- Favicon & PWA --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"><link rel="manifest" href="/manifest.json"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name" content="Brian Flores · Portfolio"><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(metaDescription, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(new URL(ogImage, Astro.site).toString(), "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale"${addAttribute(t.meta.locale, "content")}><meta property="og:locale:alternate"${addAttribute(locale === "es" ? "en_US" : "es_ES", "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(fullTitle, "content")}><meta name="twitter:description"${addAttribute(metaDescription, "content")}><meta name="twitter:image"${addAttribute(new URL(ogImage, Astro.site).toString(), "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"><!-- Structured Data --><script type="application/ld+json">${unescapeHTML(JSON.stringify(personSchema))}<\/script><script type="application/ld+json">${unescapeHTML(JSON.stringify(websiteSchema))}<\/script>${renderHead($$result)}</head><body data-astro-cid-z4jru4n3><a href="#main-content" class="skip-link" data-astro-cid-z4jru4n3>${t.nav.skipToContent}</a><div class="scroll-progress" data-scroll-progress data-astro-cid-z4jru4n3></div>${renderComponent($$result, "GlobalAtmosphere", $$GlobalAtmosphere, { "data-astro-cid-z4jru4n3": true })}${renderComponent($$result, "CustomCursor", $$CustomCursor, { "data-astro-cid-z4jru4n3": true })}${renderComponent($$result, "ScrollProgressIndicator", $$ScrollProgressIndicator, { "data-astro-cid-z4jru4n3": true })}${renderComponent($$result, "SectionIndicator", $$SectionIndicator, { "data-astro-cid-z4jru4n3": true })}${renderComponent($$result, "Letterbox", $$Letterbox, { "data-astro-cid-z4jru4n3": true })}${renderComponent($$result, "Navbar", $$Navbar, {
		"locale": locale,
		"currentPath": Astro.url.pathname,
		"data-astro-cid-z4jru4n3": true
	})}<main id="main-content" data-astro-cid-z4jru4n3>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {
		"locale": locale,
		"data-astro-cid-z4jru4n3": true
	})}</body>${renderScript($$result, "C:/Users/brian/dev/Paginas_web/Portafolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}</html><script>
  (function() {
    const stored = localStorage.getItem('bf-portfolio-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.classList.add('light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
<\/script><script>
  if ('serviceWorker' in navigator && !['localhost', '127.0.0.1'].includes(location.hostname)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
<\/script>`;
}, "C:/Users/brian/dev/Paginas_web/Portafolio/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { useTranslations as n, renderScript as r, $$BaseLayout as t };
