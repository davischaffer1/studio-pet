import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        'Olá! Vim pelo site da Studio Pet e gostaria de agendar um horário.',
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp com a Studio Pet"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-sage-ink text-cream shadow-lift transition-all duration-300 hover:scale-105 hover:bg-sage-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-sage-ink/40"
        aria-hidden="true"
      />
      <MessageCircle
        size={26}
        strokeWidth={2.1}
        className="transition-transform duration-300 group-hover:-rotate-6"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-graphite px-4 py-2 text-[11px] font-bold text-cream opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Vamos agendar?
      </span>
    </a>
  )
}
