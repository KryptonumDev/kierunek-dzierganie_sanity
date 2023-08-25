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
      name: 'hero_Annotation',
      type: 'markdown',
      title: 'Annotacja',
      fieldset: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'hero',
    },
    {
      name: 'standout_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'standout',
    },
    {
      name: 'standout_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'standout',
    },
    {
      name: 'info_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'info',
    },
    {
      name: 'info_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'info',
    },
    {
      name: 'characteristics_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'characteristics',
    },
    {
      name: 'benefits_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'benefits',
    },
    {
      name: 'benefits_List',
      type: 'array',
      of: [
        { type: 'markdown' }
      ],
      title: 'Lista',
      fieldset: 'benefits',
    },
    {
      name: 'benefits_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'benefits',
    },
    {
      name: 'benefits_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'benefits',
    },
    {
      name: 'benefits_CtaAnnotation',
      type: 'markdown',
      title: 'Wezwanie do działania - Annotacja',
      fieldset: 'benefits',
    },
    {
      name: 'frequency_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'frequency',
    },
    {
      name: 'frequency_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'frequency',
    },
    {
      name: 'frequency_Img',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'frequency',
    },
    {
      name: 'testimonials_Title',
      type: 'markdown',
      title: 'Tytuł',
      fieldset: 'testimonials',
    },
    {
      name: 'testimonials_List',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      title: 'Opinie',
      fieldset: 'testimonials',
    },
    {
      name: 'testimonials_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'testimonials',
    },
    {
      name: 'testimonials_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'testimonials',
    },
    {
      name: 'testimonials_CtaAnnotation',
      type: 'markdown',
      title: 'Wezwanie do działania - Annotacja',
      fieldset: 'testimonials',
    },
    {
      name: 'showcase_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'showcase',
    },
    {
      name: 'showcase_Images',
      type: 'array',
      of: [
        { type: 'image' }
      ],
      validation: Rule => Rule.min(3).max(3),
      title: 'Zdjęcia',
      fieldset: 'showcase',
    },
    {
      name: 'showcase_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'showcase',
    },
    {
      name: 'showcase_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'showcase',
    },
    {
      name: 'showcase_CtaAnnotation',
      type: 'markdown',
      title: 'Wezwanie do działania - Annotacja',
      fieldset: 'showcase',
    },
    {
      name: 'aboutMe_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'aboutMe',
    },
    {
      name: 'aboutMe_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'aboutMe',
    },
    {
      name: 'aboutMe_Img',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'aboutMe',
    },
    {
      name: 'faq_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'faq',
    },
    {
      name: 'faq_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'faq',
    },
    {
      name: 'ctaSection_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'ctaSection',
    },
    {
      name: 'ctaSection_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'ctaSection',
    },
    {
      name: 'ctaSection_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'ctaSection',
    },
    {
      name: 'ctaSection_CtaAnnotation',
      type: 'markdown',
      title: 'Wezwanie do działania - Annotacja',
      fieldset: 'ctaSection',
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
      name: 'standout',
      title: 'Sekcja centralna',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'info',
      title: 'Jak wyglądają warsztaty?',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'characteristics',
      title: 'Charakterystyka',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'benefits',
      title: 'Co zyskasz?',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'frequency',
      title: 'Częstotliwość warsztatów',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'testimonials',
      title: 'Opinie po warsztatach',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'showcase',
      title: 'Zobacz co będziemy dziergać',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'aboutMe',
      title: 'O mnie',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'faq',
      title: 'Sekcja FAQ',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
      options: { collapsible: true, collapsed: true }
    },
  ]
}