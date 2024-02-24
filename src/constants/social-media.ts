import type { SocialMedia } from "@/types/social-media"

const WHATSAPP = '59177056643'
const MAIL = 'kaisenbim@gmail.com'


export const SOCIAL_MEDIA: SocialMedia = {
  mail: `mailto:${MAIL}`,
  whatsapp: `https://api.whatsapp.com/send?phone=${WHATSAPP}`,
  facebook: '',
  linkedin: ''
}