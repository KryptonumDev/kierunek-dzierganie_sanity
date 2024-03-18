const title = 'Blog';
const icon = () => '📝';

export default {
  name: 'Blog_Page',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'hero',
    },
    {
      name: 'categories_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'categories',
    },
    {
      name: 'categories_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'categories',
    },
    {
      name: 'blog_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'blog',
    },
    {
      name: 'blog_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'blog',
    },
    {
      name: 'blog_HighlightedPost',
      type: 'reference',
      to: [{ type: 'BlogPost_Collection' }],
      title: 'Wyróżniony post',
      validation: Rule => Rule.required(),
      fieldset: 'blog',
    },
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja wstępna',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'categories',
      title: 'Sekcja z kategoriami bloga',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'blog',
      title: 'Sekcja z postami bloga',
      options: { collapsible: true, collapsed: true },
    },
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
};
