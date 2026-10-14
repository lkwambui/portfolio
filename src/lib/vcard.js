import { card } from "../data/card";

function escapeVCardValue(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

/**
 * Builds a vCard 3.0 string for Lucy Kamau. Fields are escaped and the
 * lines are joined with CRLF as required by the vCard specification.
 */
export function buildVCard() {
  const [givenName, ...familyParts] = card.name.split(" ");
  const familyName = familyParts.join(" ");
  const address = card.location.split(", ");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(familyName)};${escapeVCardValue(givenName)};;;`,
    `FN:${escapeVCardValue(card.name)}`,
    `TITLE:${escapeVCardValue(card.title)}`,
    `ORG:${escapeVCardValue(card.company)}`,
    `TEL;TYPE=CELL,VOICE:${escapeVCardValue(card.phone)}`,
    `EMAIL;TYPE=INTERNET,WORK:${escapeVCardValue(card.email)}`,
    `URL:${escapeVCardValue(card.portfolio)}`,
    `URL:${escapeVCardValue(card.linkedin)}`,
    `ADR;TYPE=WORK:;;${escapeVCardValue(address[0] ?? "")};${escapeVCardValue(
      address[1] ?? ""
    )};;${escapeVCardValue(address[address.length - 1] ?? "")}`,
    "END:VCARD",
  ];

  return `${lines.join("\r\n")}\r\n`;
}

/**
 * Generates the vCard in the browser and triggers a download, revoking the
 * temporary object URL once the download has been started.
 */
export function downloadVCard(filename = "Lucy-Kamau.vcf") {
  const blob = new Blob([buildVCard()], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
