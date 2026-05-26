import { Linkedin, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <a
        href={siteConfig.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2.5 text-muted transition-colors hover:bg-brand-muted hover:text-[#0A66C2]"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin className={iconClassName} />
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2.5 text-muted transition-colors hover:bg-brand-muted hover:text-[#25D366]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className={iconClassName} />
      </a>
    </div>
  );
}
