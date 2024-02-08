export default {
  name: 'AboutMe_Page',
	title: 'O mnie',
  type: 'document',
  icon: () => '🙋‍♀️',
  fields: [
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Zawartość podstrony',
      options: { collapsible: true }
    },
  ]
}