import { removeMarkdown } from '../../utils/remove-markdown';

const icon = () => '☁️';

export default {
  name: 'WordsCollection',
  title: 'Sekcja z kolekcją słów',
  type: 'object',
  icon,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie (opcjonalnie)',
      description: 'Zdjęcie pojawi się po środku sekcji, zmieniając jej wygląd.',
    },
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
      image: 'image',
    },
    prepare({ title, list, cta, image }) {
      return {
        title: `[Sekcja z kolekcją słów${cta ? ' - wraz z CTA' : ''}] ${removeMarkdown(title)}`,
        subtitle: list.join(', '),
        media: image || icon,
      };
    },
  },
};
