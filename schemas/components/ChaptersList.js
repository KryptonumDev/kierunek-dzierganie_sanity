export default {
  name: 'ChapterList',
  title: 'Rozdział',
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
