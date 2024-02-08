export default {
  name: 'course',
  title: 'Course Entry',
  type: 'document',
  icon: () => '📂',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kursu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },

    // {
    //   name: 'price',
    //   type: 'number',
    //   title: 'Cena w groszach',
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'discount',
    //   type: 'number',
    //   title: 'Cena w groszach po rabacie',
    // },
    // {
    //   name: 'image',
    //   type: 'image',
    //   title: 'Obrazek wyróżniający',
    //   validation: (Rule) => Rule.required(),
    // },

    // {
    //   name: 'complexity',
    //   type: 'string',
    //   title: 'Complexity',
    //   options: {
    //     list: [
    //       {title: 'Easy', value: '1'},
    //       {title: 'Medium', value: '2'},
    //       {title: 'Hard', value: '3'},
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'category',
    //   type: 'reference',
    //   to: [{type: 'courseCategory'}],
    //   options: {disableNew: true},
    //   title: 'Category',
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'author',
    //   type: 'reference',
    //   to: [{type: 'author'}],
    //   options: {disableNew: true},
    //   title: 'Author',
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'chapters',
      type: 'array',
      title: 'Chapters',
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
}
