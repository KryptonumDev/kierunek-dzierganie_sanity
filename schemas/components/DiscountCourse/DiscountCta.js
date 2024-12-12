import { removeMarkdown } from '../../../utils/remove-markdown';

export default {
  name: 'discountCta',
  type: 'object',
  title: 'Sekcja z ceną i CTA',
  icon: () => '💰',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Obrazek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'additionalParagraph',
      type: 'markdown',
      title: 'Dodatkowy paragraf (opcjonalnie)',
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'Tekst wezwania do działania',
      validation: Rule => Rule.required(),
    },
    {
      name: 'additionalText',
      type: 'markdown',
      title: 'Dodatkowy tekst do CTA (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
      icon: 'icon',
      media: 'image',
    },
    prepare: ({ title, subtitle, icon, media }) => ({
      title: removeMarkdown(title) || 'Sekcja z ceną i CTA',
      subtitle: removeMarkdown(subtitle) || 'Brak podtytułu',
      media,
      icon,
    }),
  },
};
