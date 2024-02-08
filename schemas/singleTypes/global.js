export default {
  name: 'global',
	title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'nav_Annotation',
      type: 'markdown',
      title: 'Baner w nawigacji (opcjonalne)',
      description: 'Staraj się nie przekraczać 100 znaków',
      fieldset: 'nav',
    },
    {
      name: 'nav_Links',
      type: 'array',
      of: [{
        type: 'nav_Links'
      }],
      title: 'Linki w nawigacji',
      validation: Rule => Rule.required().max(5),
      fieldset: 'nav',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      validation: Rule => Rule.required().uri({ scheme: ['https'] }),
      fieldset: 'social',
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      validation: Rule => Rule.required().uri({ scheme: ['https'] }),
      fieldset: 'social',
    },
    {
      name: 'youtube',
      type: 'url',
      title: 'YouTube',
      validation: Rule => Rule.required().uri({ scheme: ['https'] }),
      fieldset: 'social',
    },
    {
      name: 'messenger',
      type: 'url',
      title: 'Messenger',
      validation: Rule => Rule.required().uri({ scheme: ['https'] }),
      fieldset: 'social',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indeksowanie przez roboty SEO',
      description: 'Po włączeniu roboty SEO (takie jak Google) będą mogły indeksować witrynę w wyszukiwarkach.'
    },
  ],
  fieldsets: [
    {
      name: 'nav',
      title: 'Nawigacja',
      options: {
        collapsible: true
      }
    },
    {
      name: 'social',
      title: 'Social linki',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px'
    },
  ]
}

export const nav_Links = {
  name: "nav_Links",
  title: "Linki w nawigacji",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link relatywny',
      description: 'Jeśli nie jest uzupełniony to znaczy, że jest to zakładka.',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/')) {
            return 'Link musi być relatywny (zaczynający się od "/").';
          }
          return true;
        }),
    },
    {
      name: 'sublinks',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'nav_Link',
        },
      ],
      hidden: ({ parent: { href }}) => href !== undefined,
    },
  ]
}

export const nav_Link = {
  name: "nav_Link",
  title: "Linki w nawigacji",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Miniaturka (opcjonalne)',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link relatywny',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/')) {
            return 'Link musi być relatywny (zaczynający się od "/").';
          }
          return true;
        }).required(),
    },
  ]
}