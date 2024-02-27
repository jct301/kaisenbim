export interface Content {
  slug: string;
  data: {
    title: string;
    description: string;
    thumbnail: {
      src: string;
      alt: string;
    };
    publishDate: Date;
  };
}
