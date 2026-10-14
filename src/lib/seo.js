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
export function usePageMeta({
  title,
  fullTitle: titleOverride,
  description,
  path = "/",
  image,
  jsonLd,
  robots,
}) {
  useEffect(() => {
    const fullTitle =
      titleOverride ||
      (title ? `${title} - ${site.name}` : `${site.primaryRole || site.role} - ${site.name}`);
    const url = `${site.domain}${path}`;
    const socialImage = image
      ? image.startsWith("http")
        ? image
        : `${site.domain}${image}`
      : `${site.domain}/og-image.jpg`;
    const robotsValue = robots || "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", robotsValue);
    setMeta("name", "author", site.name);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", site.name);
    setMeta("property", "og:locale", "en_KE");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", socialImage);
    setMeta("property", "og:image:alt", fullTitle);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", socialImage);

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
  }, [title, titleOverride, description, path, image, jsonLd, robots]);
}