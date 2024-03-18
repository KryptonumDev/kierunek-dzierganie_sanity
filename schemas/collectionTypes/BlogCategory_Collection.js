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
      title: 'Link do kategorii',
      description: 'Unikalna nazwa kategorii, która będzie wykorzystywana w adresie URL',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
};
