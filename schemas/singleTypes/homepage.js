export default {
  name: 'homepage',
	title: 'Strona główna',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'hero',
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'services',
    },
    {
      name: 'services_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      fieldset: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'services',
    },
    {
      name: 'services_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Wezwanie do działania',
      fieldset: 'services',
    },
    {
      name: 'involved_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'involved',
    },
    {
      name: 'involved_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'involved',
    },
    {
      name: 'involved_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'involved',
    },
    {
      name: 'involved_List',
      type: 'array',
      of: [
        { type: 'markdown' }
      ],
      title: 'Lista',
      fieldset: 'involved',
      validation: Rule => Rule.max(5)
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'process',
    },
    {
      name: 'process_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      fieldset: 'process',
    },
    {
      name: 'process_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'process',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja Hero',
      options: { collapsible: true }
    },
    {
      name: 'services',
      title: 'Sekcja usługi',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'involved',
      title: 'W jakich projektach brałam udział?',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'process',
      title: 'Proces',
      options: { collapsible: true, collapsed: true }
    },
  ]
}