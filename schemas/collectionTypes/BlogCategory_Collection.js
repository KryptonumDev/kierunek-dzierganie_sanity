import { slugify } from '../../utils/slugify';

const title = 'Zbiór kategorii bloga';
const icon = () => '📝';

export default {
  name: 'BlogCategory_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kategorii',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug, to unikalny ciąg znaków, który znajdziemy zazwyczaj po ukośniku w adresie URL podstrony. Dzięki niemu jego forma jest zrozumiała dla użytkowników.',
      options: {
        source: 'name',
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
};
