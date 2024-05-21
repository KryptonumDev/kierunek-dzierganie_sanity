export default {
  name: 'productCategory',
  title: 'Kategorie produktów',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'visibleInKnitting',
      type: 'boolean',
      title: 'Widoczny na podstronie dziergania',
      initialValue: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'visibleInCrocheting',
      type: 'boolean',
      title: 'Widoczny na podstronie szydełkowania',
      initialValue: true,
      validation: Rule => Rule.required(),
    },
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
