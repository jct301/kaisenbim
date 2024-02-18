import type { About, HeroImage, Link, SiteConfig, SocialMedia } from './types'

/**
 * Nodemailer constants
 */
export const SMTP_HOST = import.meta.env.SMT_HOST;
export const SMTP_MAIL = import.meta.env.SMT_MAIL
export const SMTP_PORT = import.meta.env.SMT_POST
export const SMTP_PASSWORD = import.meta.env.SMT_PASSWORD

const WHATSAPP = '59177056643'

export const PRESENTATION = 'Contribuyendo al futuro de la ingeniería.'
export const TITLE = 'KaisenBIM'

export const HERO_IMAGE: HeroImage = '/hero.webp'
export const ABOUT: About = {
  content: [
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colleg ',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
  ],
  image: '/hero.webp'
}
export const SOCIAL_MEDIA: SocialMedia = {
  mail: `mailto:${SMTP_MAIL}`,
  whatsapp: `https://api.whatsapp.com/send?phone=${WHATSAPP}`,
  facebook: '',
  linkedin: '',
}
export const LINKS: Link[] = [
  {
    title: 'Servicios',
    url: '/#services',
    label: 'services'
  },
  {
    title: 'Proyectos',
    url: '/#projects',
    label: 'projects'
  },
  {
    title: 'Contactanos',
    url: '/#contact',
    label:'contact'
  }
]

export const SITE_CONFIG: SiteConfig = {
  author: '@KaisenBIM',
  title: 'KaisenBIM',
  description:
    'Sitio web de KaisenBIM servicios de modelado BIM en proyectos de construcción.',
  lang: 'es_BO',
  ogLocale: 'es_BO',
  date: {
    locale: 'es-BO',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  }
}
