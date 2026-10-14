import { QRCodeSVG } from "qrcode.react";
import { card } from "../../data/card";

export default function CardQrCode({ value = card.cardUrl }) {
  const urlLabel = value.replace(/^https?:\/\//, "");
  return (
    <figure className="flex flex-col items-center">
      <div className="rounded-2xl border border-line bg-white p-4 shadow-[0_14px_34px_rgba(32,32,32,0.06)]">
        <QRCodeSVG
          value={value}
          size={180}
          level="M"
          marginSize={2}
          bgColor="#FFFFFF"
          fgColor="#202020"
          title={`QR code linking to ${card.name}'s digital business card`}
          className="h-auto w-full max-w-[180px]"
        />
      </div>
      <figcaption className="mt-4 max-w-xs text-center">
        <p className="text-sm font-medium text-ink">
          Scan to view my digital business card.
        </p>
        <p className="mt-1 break-all text-xs text-muted">{urlLabel}</p>
      </figcaption>
    </figure>
  );
}
