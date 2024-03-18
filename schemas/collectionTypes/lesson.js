export default {
  name: 'lesson',
  title: 'Lekcje',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
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
    {
      name: 'video',
      type: 'string',
      title: 'Link do filmiku',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lengthInMinutes',
      type: 'number',
      title: 'Długość w minutach',
      validation: Rule => Rule.required(),
    },
    // {
    //   name: 'description',
    //   type: 'markdown',
    //   title: 'Description',
    // },
    {
      name: 'files',
      type: 'array',
      title: 'Files',
      of: [
        {
          type: 'file',
        },
      ],
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
};
