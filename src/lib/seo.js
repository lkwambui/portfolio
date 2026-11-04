import { useEffect } from "react";
import { getPageSeo } from "./seoConfig";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content) {
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  } else if (el) {
    el.remove();
  }
}

function setCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

function setJsonLd(jsonLd) {
  document.getElementById("site-jsonld")?.remove();
  document.getElementById("page-jsonld")?.remove();

  if (!jsonLd) return;

  const script = document.createElement("script");
  script.id = "page-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  document.head.appendChild(script);
}

/**
 * Applies per-page title, description, canonical, social metadata and JSON-LD.
 * Page SEO defaults come from src/lib/seoConfig.js so client navigation and
 * build-time prerendering stay consistent.
 */
export function usePageMeta({ path = "/", ...overrides } = {}) {
  const { title, fullTitle, description, image, jsonLd, robots } = overrides;

  useEffect(() => {
    const seo = getPageSeo(path, {
      title,
      fullTitle,
      description,
      image,
      jsonLd,
      robots,
    });

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.robots);
    setMeta("name", "author", "Lucy Kamau");
    setMeta("property", "og:type", seo.ogType);
    setMeta("property", "og:site_name", "Lucy Kamau");
    setMeta("property", "og:locale", "en_KE");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", seo.canonical);
    setMeta("property", "og:image", seo.image);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", seo.title);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.image);
    setMeta("name", "twitter:image:alt", seo.title);

    setCanonical(seo.canonical);
    setJsonLd(seo.jsonLd);
  }, [path, title, fullTitle, description, image, jsonLd, robots]);
}
