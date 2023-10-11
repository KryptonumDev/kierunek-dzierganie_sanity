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
        { type: 'CourseModules' },
        { type: 'ImageShowcase' },
        { type: 'Bonuses' },
      ]
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
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