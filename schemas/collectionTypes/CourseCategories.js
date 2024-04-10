export default {
  name: 'courseCategory',
  title: 'Kategorie kursów',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      title: 'Slug',
      validation: Rule => Rule.required(),
    },
  ],
};
