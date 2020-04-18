export default interface Mdx {
  fields: {
    id: string;
    title: string;
    slug: string;
  };
  body: any;
  tableOfContents: any;
  parent: any;
  frontmatter: {
    unwritten?: boolean;
    metaTitle?: string;
    metaDescription?: string;
  };
}
