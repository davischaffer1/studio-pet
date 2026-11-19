/**
 * ============================================================
 *  Studio Pet — Configuração central de informações comerciais
 * ============================================================
 *  Este é o único lugar em que você precisa mexer para trocar
 *  telefone, WhatsApp, Instagram, endereço, horários e avaliações.
 *
 *  Todos os dados abaixo são reais, confirmados no perfil do
 *  Google e no Instagram oficial da Studio Pet.
 */

// Apenas números, com DDI + DDD.
const WHATSAPP_NUMBER = '5549999807158'

const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de agendar um horário na Studio Pet.'

const buildWhatsAppLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/** Ficha da Studio Pet no Google (endereço, horários e avaliações). */
const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJAUpamuG35JQR9dAIfifzjtE'

export const siteConfig = {
  brand: {
    name: 'Studio Pet',
    tagline: 'Estética Animal',
    description:
      'Banho, tosa e cuidados especiais para cães e gatos, com carinho e atenção em cada detalhe.',
  },

  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
    /** Formato apenas para exibição no site. */
    whatsappDisplay: '(49) 99980-7158',

    instagram: {
      handle: '@studio.pet_esteticaanimal',
      url: 'https://www.instagram.com/studio.pet_esteticaanimal/',
    },

    address: {
      street: 'Rua Guaporé, 581 — Sala 01',
      city: 'Presidente Médici, Chapecó — SC',
      mapsUrl: GOOGLE_MAPS_URL,
    },

    hours: [
      { label: 'Terça a sexta', value: '08h–12h · 13h30–18h' },
      { label: 'Sábado', value: '08h30–12h' },
      { label: 'Domingo e segunda', value: 'Fechado' },
    ],

    /** Resumo curto usado nos blocos de chamada final. */
    hoursSummary: {
      weekdays: 'Terça a sexta, 08h–12h e 13h30–18h',
      saturday: 'Sábado, 08h30–12h',
    },

    /** Avaliações reais publicadas no Google. */
    reviews: {
      rating: '5,0',
      count: 9,
      url: GOOGLE_MAPS_URL,
    },
  },

  /** Mensagens prontas para cada ponto de contato. */
  messages: {
    default: DEFAULT_WHATSAPP_MESSAGE,
    hero: 'Olá! Vim pelo site e gostaria de agendar um horário na Studio Pet.',
    footer: 'Olá! Gostaria de tirar uma dúvida sobre os cuidados da Studio Pet.',
    review: 'Olá! Sou cliente da Studio Pet e gostaria de enviar minha avaliação.',
  },
}

export const whatsappLink = buildWhatsAppLink

export const bookingLink = buildWhatsAppLink(siteConfig.messages.hero)

export const contactLink = buildWhatsAppLink(siteConfig.messages.default)
