export default {
  name: 'Statute_Page',
  title: 'Regulamin',
  type: 'document',
  icon: () => '📜',
  fields: [
    {
      name: 'header_Heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'header_Description',
      type: 'markdown',
      title: 'Opis',
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'Statute_Page_Content' }],
      title: 'Zawartość',
      fieldset: 'content',
    },
    {
      name: 'files',
      type: 'array',
      of: [{ type: 'file' }],
      title: 'Lista plików',
      fieldset: 'files',
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
      name: 'content',
      title: 'Zawartość podstrony',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'files',
      title: 'Pliki',
      options: { collapsible: true, collapsed: true },
    },
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
};
