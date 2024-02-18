import { SITE_CONFIG } from '../constants'

const dateFormat = new Intl.DateTimeFormat(
  SITE_CONFIG.date.locale,
  SITE_CONFIG.date.options
)

export function getFormattedDate (
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  if (typeof options !== 'undefined') {
    return new Date(date).toLocaleDateString(SITE_CONFIG.date.locale, {
      ...(SITE_CONFIG.date.options),
      ...options
    })
  }

  return dateFormat.format(new Date(date))
}
