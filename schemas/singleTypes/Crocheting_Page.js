export default {
  name: 'Crocheting_Page',
  title: 'Szydełkowanie',
  type: 'document',
  icon: () => '🧶',
  fields: [
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony nad listingiem',
    },
    {
      name: 'listing_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'listing',
    },
    {
      name: 'listing_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'listing',
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
    {
      name: 'listing',
      title: 'Lista wszystkich kursów',
      options: { collapsible: true },
    },
  ],
};
