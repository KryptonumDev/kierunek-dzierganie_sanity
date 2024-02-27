export default {
  name: 'Statute_Page',
  title: 'Regulamin',
  type: 'document',
  icon: () => '📜',
  fields: [
    {
      name: 'Header_Heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'Header_Description',
      type: 'markdown',
      title: 'Opis',
    },
    {
      name: 'Content',
      type: 'array',
      of: [{type: 'titleAndDescription'}],
      title: 'Zawartość',
      fieldset: 'Content',
    },
    {
      name: 'Files',
      type: 'array',
      of: [{type: 'file'}],
      title: 'Lista plików',
      fieldset: 'Files'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'Content',
      title: 'Zawartość podstrony',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'Files',
      title: 'Pliki',
      options: {collapsible: true, collapsed: true},
    }
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
}
