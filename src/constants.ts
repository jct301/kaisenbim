import type { HeroImage, Link, SiteConfig, SocialMedia } from '@/types'

export const HERO_IMAGE: HeroImage = '/src/hero.webp'
export const SOCIAL_MEDIA: SocialMedia = {
  mail:'mailto:kaisenbim@gmail.com',
  whatsapp:'',
  facebook:'',
  instagram:'',
  linkedin:''
}
export const LINKS: Link[] = [
  {
    title:'Inicio',
    url:'/',
    label:'home'
  },
  {
    title: 'Servicios',
    url: '/#services',
    label:'services'
  },
  {
    title: 'Proyectos',
    url: '/#projects',
    label:'projects'
  },
  {
    title:'Publicaciones',
    url:'/#posts',
    label:'posts'
  }
]

export const SITE_CONFIG: SiteConfig = {
  author: '@KaisenBIM',
  title: 'KaisenBIM',
  description: 'Sitio web de KaisenBIM servicios de modelado BIM en proyectos de construcción.',
  lang: 'es_BO',
  ogLocale: 'es_BO',
  date: {
    locale: 'es-BO',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
}
