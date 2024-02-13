export interface Content {
  thumbnail: {
    src: {
      height: number;
      src: string;
      format: "avif" | "webp" | "jpg" | "jpeg" | "tiff" | "png" | "gif" | "svg";
      width: number;
    };
    alt: string;
  };
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  publishDate: string | date;
  updateDate?: string;
  tags: string[];
  draft: boolean;
}

export interface Link {
  name: string;
  path: string;
}

export interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
  webmentions?: {
    link: string;
    pingback?: string;
  };
}

export interface SiteMeta {
  title: string;
  description?: string;
  ogImage?: string | undefined;
  articleDate?: string | undefined;
}
