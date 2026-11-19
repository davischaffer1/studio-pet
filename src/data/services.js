import { Bath, Brush, Droplets, Scissors } from 'lucide-react'

export const services = [
  {
    id: 'banho',
    title: 'Banho',
    description:
      'Banho relaxante com produtos suaves, secagem cuidadosa e aquele cheirinho gostoso de pet limpinho.',
    image: '/images/service-banho.jpg',
    imageAlt: 'Cachorro golden retriever tomando banho com carinho',
    icon: Bath,
    tone: 'peach',
    whatsappMessage:
      'Olá! Gostaria de agendar um Banho para o meu pet na Studio Pet.',
  },
  {
    id: 'tosa-higienica',
    title: 'Tosa higiênica',
    description:
      'Aparo delicado das regiões que pedem atenção, mantendo seu pet confortável, limpo e bem cuidado.',
    image: '/images/service-higienica.jpg',
    imageAlt: 'Cachorro sendo escovado por profissional em ambiente de estética animal',
    icon: Scissors,
    tone: 'rose',
    whatsappMessage:
      'Olá! Gostaria de agendar uma Tosa higiênica para o meu pet na Studio Pet.',
  },
  {
    id: 'tosa-completa',
    title: 'Tosa completa',
    description:
      'Tosa feita com cuidado e carinho, valorizando o estilo e o conforto ideais para cada pelagem.',
    image: '/images/service-completa.jpg',
    imageAlt: 'Cachorro yorkshire recém-tosado, com o pelo alinhado e macio',
    icon: Brush,
    tone: 'sage',
    whatsappMessage:
      'Olá! Gostaria de agendar uma Tosa completa para o meu pet na Studio Pet.',
  },
  {
    id: 'hidratacao',
    title: 'Hidratação e cuidados especiais',
    description:
      'Tratamentos que devolvem maciez e brilho ao pelo, com atenção especial às necessidades de cada pet.',
    image: '/images/service-hidratacao.jpg',
    imageAlt: 'Profissional aplicando tratamento de hidratação em um cachorro',
    icon: Droplets,
    tone: 'cream',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre Hidratação e cuidados especiais para o meu pet na Studio Pet.',
  },
]
