export default {
  name: "ChapterList",
  title: "Chapter List",
  type: "object",
  fields: [
    {
      name: 'chapterName',
      type: 'string',
      title: 'Chapter Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons',
      type: 'array',
      title: 'Lessons',
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
}