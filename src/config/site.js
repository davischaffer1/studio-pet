/**
 * ============================================================
 *  Studio Pet — Configuração central de informações comerciais
 * ============================================================
 *  Este é o único lugar em que você precisa mexer para trocar
 *  telefone, WhatsApp, Instagram, endereço e horários.
 *
 *  ⚠️ Os dados abaixo são PLACEHOLDERS de exemplo.
 *  Substitua pelos dados reais antes de publicar o site.
 */

// Apenas números, com DDI + DDD. Ex.: 5544999999999
const WHATSAPP_NUMBER = '5500000000000'

const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de agendar um horário na Studio Pet.'

const buildWhatsAppLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

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
    whatsappDisplay: '(00) 00000-0000',

    instagram: {
      // ⚠️ Placeholder — troque pelo @ e pela URL do perfil oficial.
      handle: '@studio.pet',
      url: 'https://www.instagram.com/',
    },

    address: {
      // ⚠️ Placeholder — troque pelo endereço real.
      street: 'Rua Exemplo, 000 — Bairro',
      city: 'Cidade — UF',
      mapsUrl: 'https://www.google.com/maps',
    },

    /** ⚠️ Placeholder — confirme os horários reais de atendimento. */
    hours: [
      { label: 'Segunda a sexta', value: '09h às 18h' },
      { label: 'Sábado', value: '09h às 14h' },
      { label: 'Domingo', value: 'Fechado' },
    ],
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
