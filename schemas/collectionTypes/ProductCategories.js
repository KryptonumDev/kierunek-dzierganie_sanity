export default {
  name: 'productCategory',
  title: 'Kategorie produktów',
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
