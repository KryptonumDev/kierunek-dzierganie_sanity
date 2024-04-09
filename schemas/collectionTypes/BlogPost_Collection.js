import { removeMarkdown } from '../../utils/remove-markdown';
import { slugify } from '../../utils/slugify';

const title = 'Zbiór blogów';
const icon = () => '✒️';

export default {
  name: 'BlogPost_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Author',
      type: 'reference',
      to: [{ type: 'Author_Collection' }],
      title: 'Autor',
      options: { disableNew: true },
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'BlogCategory_Collection'
        }]
      }],
      title: 'Kategoria',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Slug, to unikalny ciąg znaków, który znajdziemy zazwyczaj po ukośniku w adresie URL podstrony. Dzięki niemu jego forma jest zrozumiała dla użytkowników.',
      options: {
        source: 'hero_Heading',
        slugify: input => `${slugify(input)}`,
      },
      validation: Rule =>
        Rule.custom(({ current: slug }) => {
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            return 'Slug może zawierać tylko małe litery, cyfry oraz łączniki. Upewnij się, że nie zawiera on znaków specjalnych ani wielkich liter.';
          }
          return true;
        }).required(),
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja wstępna',
    },
  ],
  preview: {
    select: {
      title: 'hero_Heading',
      subtitle: 'hero_Paragraph',
    },
    prepare: ({ title, subtitle }) => {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    },
  },
};
