import { removeMarkdown } from '../../../utils/remove-markdown';

export default {
  name: 'discountHero',
  type: 'object',
  title: 'Sekcja Hero',
  icon: () => '🎇',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Obrazek w tle',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf (opcjonalnie)',
      validation: Rule => Rule.required(),
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
      media: 'image',
      icon: 'icon',
    },
    prepare: ({ title, subtitle, media, icon }) => ({
      title: removeMarkdown(title) || 'Sekcja Hero',
      subtitle: removeMarkdown(subtitle) || 'Brak podtytułu',
      media: media || icon,
    }),
  },
};
