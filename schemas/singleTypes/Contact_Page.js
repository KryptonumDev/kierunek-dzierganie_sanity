export default {
  name: 'Contact_Page',
	title: 'Kontakt',
  type: 'document',
  icon: () => '💌',
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