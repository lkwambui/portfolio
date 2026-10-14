/**
 * Shares the card using the Web Share API when available and falls back to
 * copying the canonical URL to the clipboard. Returns a short status string
 * describing what happened, or throws when neither API is usable.
 */
export async function shareOrCopy({ title, text, url }) {
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({ title, text, url });
      return "shared";
    } catch (error) {
      if (error && error.name === "AbortError") {
        return "cancelled";
      }
    }
  }

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return "copied";
  }

  throw new Error("Sharing is not supported in this browser.");
}
