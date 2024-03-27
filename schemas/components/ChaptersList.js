export default {
  name: 'ChapterList',
  title: 'Chapter List',
  type: 'object',
  fields: [
    {
      name: 'chapterName',
      type: 'string',
      title: 'Nazwa rozdziału',
      validation: Rule => Rule.required(),
    },
    {
      name: 'chapterDescription',
      type: 'markdown',
      title: 'Opis rozdziału',
      validation: Rule => Rule.required(),
    },
    {
      name: 'chapterImage',
      type: 'image',
      title: 'Obrazek rozdziału',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons',
      type: 'array',
      title: 'Lekcje w rozdziale',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'lesson',
            },
          ],
        },
      ],
    },
  ],
};
