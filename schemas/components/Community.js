import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: 'Community',
  title: 'Społeczność Kierunek Dzierganie',
  type: 'object',
  fields: [
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy sekcja ma być wyróżniona (subtelne tło)?',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: 'Dołącz do Naszej **Twórczej Społeczności**',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      initialValue:
        'To miejsce, gdzie znajdziesz przede wszystkim wsparcie cudownych kreatywnych dziewczyn oraz możesz też pochwalić się swoimi pracami wykonanymi w ramach kursów.',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezywanie do działania (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[Sekcja społeczność] ${removeMarkdown(heading)}`,
        subtitle: `${removeMarkdown(paragraph)}`,
        icon: () => '👥',
      };
    },
  },
};
