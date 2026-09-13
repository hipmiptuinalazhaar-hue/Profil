import { siteConfig } from "@/config/site";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
