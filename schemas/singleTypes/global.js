export default {
  name: 'global',
	title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'facebook',
      title: 'Facebook',
      validation: Rule => Rule.required(),
      fieldset: 'social',
    },
    {
      type: 'string',
      name: 'instagram',
      title: 'Instagram',
      validation: Rule => Rule.required(),
      fieldset: 'social',
    },
    {
      type: 'string',
      name: 'youtube',
      title: 'YouTube',
      validation: Rule => Rule.required(),
      fieldset: 'social',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Social linki',
      options: {
        collapsible: true
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