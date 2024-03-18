export default {
  name: 'knitting_Page',
  title: 'Strona dzierganie na drutach',
  type: 'document',
  icon: () => '🪡',
  fields: [
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony nad listingiem',
    },
    {
      name: 'listingTitle',
      type: 'markdown',
      title: 'Tytuł listingu produktów',
    },
    {
      name: 'listingText',
      type: 'markdown',
      title: 'Tekst listingu produktów',
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
      options: { collapsible: true },
    },
  ],
};
