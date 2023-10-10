export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: () => '🛬',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      },
      description: 'Bez przedrostka "/landing" - dodawany on się automatycznie.',
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Subheading',
      fieldset: 'hero',
    },
    {
      name: 'hero_List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'List',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'HeroBackgroundImg' },
        { type: 'Benefits' },
        { type: 'Faq' },
        { type: 'Opinions' },
        { type: 'TileList' },
        { type: 'CtaSection' },
        { type: 'SimpleCtaSection' },
      ]
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
      name: 'hero',
      title: 'Hero',
      options: { collapsed: true }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
  ]
}