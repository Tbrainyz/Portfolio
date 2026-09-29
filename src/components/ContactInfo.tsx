import type { ReactNode } from "react";
import { CONTACT } from "../config/contact";

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.15c-1.6 0-3.1-.43-4.4-1.19l-.32-.19-3.11.82.83-3.03-.2-.31A8.15 8.15 0 1 1 20.19 12c0 4.5-3.66 8.15-8.15 8.15zm4.48-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

function InfoRow({ icon, label, value, href }: InfoRowProps) {
  const content = (
    <>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-surface/10 bg-surface/5 text-brand-magenta">
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-semibold text-dim">{label}</div>
        <div className="text-[15px] font-medium">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="flex items-center gap-4 transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <InfoRow icon={<EmailIcon />} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
      <InfoRow icon={<PhoneIcon />} label="Phone" value={CONTACT.phoneDisplay} href={`tel:${CONTACT.phoneTel}`} />
      <InfoRow
        icon={<WhatsAppIcon />}
        label="WhatsApp"
        value="Message me directly"
        href={`https://wa.me/${CONTACT.whatsappNumber}`}
      />
      <InfoRow icon={<LocationIcon />} label="Location" value={CONTACT.location} />
    </div>
  );
}
