export interface CtaHeadingProps {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
  image: {
    desktop: string;
    mobile: string;
    alt: string;
  };
}

export interface NewHeadingProps {
  title: string;
  items: {
    title: string;
    excerpt: string;
  }[];
}

export interface ListArticleProps {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  excerpt: string;
}

export interface ListArticlesProps {
  data: ListArticleProps[];
}
