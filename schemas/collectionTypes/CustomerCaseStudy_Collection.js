import { slugify } from '../../utils/slugify';

export default {
  name: 'CustomerCaseStudy_Collection',
  title: 'Zbiór historii kursantów',
  type: 'document',
  icon: () => '🙋‍♀️',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Imię',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Slug, to unikalny ciąg znaków, który znajdziemy zazwyczaj po ukośniku w adresie URL podstrony. Dzięki niemu jego forma jest zrozumiała dla użytkowników.',
      options: {
        source: 'name',
        slugify: input => `historia-${slugify(input)}`,
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 3,
      title: 'Zajawka',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'excerpt',
      media: 'img',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
