import { SITE_CONFIG } from "../constants";

const dateFormat = new Intl.DateTimeFormat(SITE_CONFIG.date.locale, SITE_CONFIG.date.options);

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions,
) {
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(SITE_CONFIG.date.locale, {
			...(SITE_CONFIG.date.options as Intl.DateTimeFormatOptions),
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}
