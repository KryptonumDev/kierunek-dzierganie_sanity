import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: 'WordsCollection',
  title: 'Sekcja z kolekcją słów',
  type: 'object',
  icon: () => '☁️',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list',
      cta: 'cta',
    },
    prepare({ title, list, cta }) {
      return {
        title: `[Sekcja z kolekcją słów${cta ? ' - wraz z CTA' : ''}] ${removeMarkdown(title)}`,
        subtitle: list.join(', '),
      };
    },
  },
};
