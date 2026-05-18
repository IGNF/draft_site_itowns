const THEME_KEY = "itowns-theme";
const LANG_KEY = "itowns-lang";

type LangCode = "en" | "fr";

function readIsDark(): boolean {
  try {
    const s = localStorage.getItem(THEME_KEY);
    if (s === "light") return false;
    if (s === "dark") return true;
    return true;
  } catch {
    return true;
  }
}

function readLang(): LangCode {
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === "fr" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return "en";
}

function currentLang(): LangCode {
  return document.documentElement.dataset.lang === "fr" ? "fr" : "en";
}

function setAttr(el: Element | null, name: string, value: string): void {
  if (el instanceof HTMLElement) el.setAttribute(name, value);
}

function applyDataAriaLabels(lang: LangCode): void {
  document.querySelectorAll("[data-aria-en][data-aria-fr]").forEach((el) => {
    const en = el.getAttribute("data-aria-en");
    const fr = el.getAttribute("data-aria-fr");
    if (en && fr) setAttr(el, "aria-label", lang === "fr" ? fr : en);
  });
}

function applyLang(code: LangCode): void {
  document.documentElement.dataset.lang = code;
  document.documentElement.setAttribute("lang", code);
  try {
    localStorage.setItem(LANG_KEY, code);
  } catch {
    /* ignore */
  }

  const isFr = code === "fr";
  const langToggle = isFr
    ? { aria: "Afficher le site en anglais", title: "English version" }
    : { aria: "Afficher le site en français", title: "Version française" };

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    setAttr(btn, "aria-label", langToggle.aria);
    setAttr(btn, "title", langToggle.title);
    setAttr(btn, "aria-pressed", isFr ? "true" : "false");
  });

  setAttr(
    document.querySelector(".nav-container"),
    "aria-label",
    isFr ? "Navigation principale" : "Main navigation",
  );
  setAttr(
    document.querySelector(".hamburger"),
    "aria-label",
    isFr ? "Ouvrir ou fermer le menu" : "Toggle menu",
  );
  setAttr(
    document.querySelector(".community-panel"),
    "aria-label",
    isFr
      ? "Contributeurs principaux — communauté GitHub"
      : "Main contributors — GitHub community",
  );

  document.querySelectorAll(".logo").forEach((logo) => {
    if (isFr) {
      setAttr(
        logo,
        "title",
        "Accueil iTowns (retour en haut de page si déjà sur la page)",
      );
      setAttr(logo, "aria-label", "iTowns — accueil ou haut de page");
    } else {
      setAttr(
        logo,
        "title",
        "iTowns home (scroll to top when already on the page)",
      );
      setAttr(logo, "aria-label", "iTowns — home or top of page");
    }
  });

  applyDataAriaLabels(code);
  applyTheme(readIsDark());
}

function applyTheme(isDark: boolean): void {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  const meta = document.getElementById("meta-theme-color");
  if (meta) meta.setAttribute("content", isDark ? "#0f0f0f" : "#f1f1f1");

  const lang = currentLang();
  const labelWhenDark =
    lang === "fr" ? "Activer le thème clair" : "Enable light theme";
  const labelWhenLight =
    lang === "fr" ? "Activer le thème sombre" : "Enable dark theme";
  const titleWhenDark =
    lang === "fr" ? "Passer au thème clair" : "Toggle light / dark theme";
  const titleWhenLight =
    lang === "fr" ? "Passer au thème sombre" : "Toggle light / dark theme";

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    setAttr(btn, "aria-pressed", isDark ? "true" : "false");
    setAttr(btn, "aria-label", isDark ? labelWhenDark : labelWhenLight);
    setAttr(btn, "title", isDark ? titleWhenDark : titleWhenLight);
  });
}

function toggleLang(): void {
  applyLang(currentLang() === "fr" ? "en" : "fr");
}

function toggleTheme(): void {
  const isDark = document.documentElement.dataset.theme === "dark";
  const next = !isDark;
  try {
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  } catch {
    /* ignore */
  }
  applyTheme(next);
}

function onDocClickCapture(e: MouseEvent): void {
  if (e.button !== 0) return;
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.closest(".lang-toggle")) {
    e.preventDefault();
    toggleLang();
    return;
  }
  if (target.closest(".theme-toggle")) toggleTheme();
}

function initSiteUi(): void {
  applyLang(readLang());
}

if (!window.__itownsSiteUiBound) {
  window.__itownsSiteUiBound = true;
  document.addEventListener("click", onDocClickCapture, true);
  document.addEventListener("astro:after-swap", initSiteUi);
}

initSiteUi();

declare global {
  interface Window {
    __itownsSiteUiBound?: boolean;
  }
}
