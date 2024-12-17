import { removeMarkdown } from '../../../utils/remove-markdown';

export default {
  name: 'ctaHeading',
  type: 'object',
  icon: () => '🔗',
  title: 'Sekcja z nagłówkiem i CTA',
  fields: [
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
      name: 'ctaText',
      type: 'string',
      title: 'Tekst wezwania do działania',
      description: 'Po kliknięciu przycisku użytkownik zostanie przekierowany do podstrony z kursem',
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
    },
    prepare: ({ title, subtitle, icon }) => ({
      title: removeMarkdown(title) || 'Sekcja z nagłówkiem i CTA',
      subtitle: removeMarkdown(subtitle) || 'Brak podtytułu',
      icon,
    }),
  },
};
