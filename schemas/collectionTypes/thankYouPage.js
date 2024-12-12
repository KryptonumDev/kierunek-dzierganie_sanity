export default {
  name: 'thankYouPage',
  title: 'Strony podziękowania',
  type: 'document',
  icon: () => '🎉',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'hasDiscount',
      type: 'boolean',
      title: 'Czy ma rabat na kurs?',
      initialValue: false,
    },
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
      hidden: ({ parent }) => parent?.hasDiscount,
    },
    {
      name: 'discountCourse',
      title: 'Kurs z rabatem',
      type: 'object',
      hidden: ({ parent }) => !parent?.hasDiscount,
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'course',
          title: 'Referencja kursu',
          type: 'reference',
          to: [{ type: 'course' }],
          validation: Rule =>
            Rule.custom((value, context) => {
              if (context.parent && !value) return 'Required';
              return true;
            }),
          options: {
            filter: 'visible == true',
          },
        },
        {
          name: 'discount',
          type: 'number',
          title: 'Wielkość rabatu',
          description: 'Wielkość wyrażona w postaci liczby',
          validation: Rule =>
            Rule.custom((value, context) => {
              if (context.parent && !value) return 'Required';
              return true;
            }),
        },
        {
          name: 'discountTime',
          type: 'number',
          title: 'Czas trwania rabatu',
          description: 'Czas trwania rabatu w minutach',
          validation: Rule =>
            Rule.custom((value, context) => {
              if (context.parent && !value) return 'Required';
              return true;
            }),
        },
      ],
    },
    {
      name: 'discountComponents',
      type: 'array',
      title: 'Komponenty sekcji z rabatem',
      hidden: ({ parent }) => !parent?.hasDiscount,
      of: [
        { type: 'discountHero' },
        { type: 'timerBox' },
        { type: 'imageHeading' },
        { type: 'ctaHeading' },
        { type: 'discountCta' },
      ],
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
      subtitle: 'slug.current',
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
};
