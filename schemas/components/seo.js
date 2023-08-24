export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.max(70).warning('Pole title nie powinno być dłuższe niż 70 znaków.')
    },
    {
      name: 'description',
      type: 'text',
      rows: 4,
      title: 'Description',
      validation: Rule => Rule.max(165).warning('Pole description nie powinno być dłuższe niż 165 znaków.')
    },
  ]
}