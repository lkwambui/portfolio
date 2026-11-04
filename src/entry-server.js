import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";
import { getPageSeo, getAllRoutes, getSitemapEntries } from "./lib/seoConfig.js";

export { getAllRoutes, getSitemapEntries };

export function render(url) {
  const html = renderToString(
    React.createElement(
      StaticRouter,
      { location: url },
      React.createElement(App)
    )
  );

  return {
    html,
    seo: getPageSeo(url),
  };
}
