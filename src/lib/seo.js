import { useEffect } from "react";
import { site } from "../data/site";

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

/**
 * Sets per-page document title, meta description, Open Graph tags,
 * canonical URL and optional JSON-LD structured data.
 */
export function usePageMeta({ title, description, path = "/", image, jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;
    const url = `${site.domain}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    let existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, jsonLd]);
}