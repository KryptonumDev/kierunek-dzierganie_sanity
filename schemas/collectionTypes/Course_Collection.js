export default {
  name: 'course',
  title: 'Kursy',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kursu',
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
      name: 'author',
      type: 'reference',
      to: [{ type: 'CourseAuthor_Collection' }],
      title: 'Autor kursu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ kursu',
      options: {
        list: [
          {
            title: 'Kurs',
            value: 'course',
          },
          {
            title: 'Program',
            value: 'program',
          },
        ],
      },
      initialValue: 'course',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Obrazek wyróżniający',
      validation: Rule => Rule.required(),
    },
    {
      name: 'complexity',
      type: 'string',
      title: 'Poziom',
      options: {
        list: [
          { title: 'Dla początkujących', value: '1' },
          { title: 'Dla średnio zaawansowanych', value: '2' },
          { title: 'Dla zaawansowanych', value: '3' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Długość kursu',
      name: 'courseLength',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'materials_link',
      title: 'Dodatkowe materiały',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'chapters',
      type: 'array',
      title: 'Rozdziały',
      of: [
        {
          type: 'ChapterList',
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
