import { removeMarkdown } from '../../utils/functions';
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
      name: 'hero',
      type: 'BlogPost_Collection_Hero',
      title: 'Hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'Author_Collection' }],
      title: 'Autor',
      options: { disableNew: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'BlogCategory_Collection' }] }],
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
        source: 'hero.heading',
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
    {
      name: 'content',
      type: 'PortableText',
      title: 'Zawartość bloga',
    },
  ],

  preview: {
    select: {
      title: 'hero.heading',
      subtitle: 'hero.paragraph',
    },
    prepare: ({ title, subtitle }) => {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    },
  },
};

export const BlogPost_Collection_Hero = {
  name: 'BlogPost_Collection_Hero',
  title: 'Sekcja wstępna',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
    },
  ],
};
