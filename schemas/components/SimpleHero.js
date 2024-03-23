import { removeMarkdown } from '../../utils/functions';

const title = 'Prosta HERO sekcja';
export const SimpleHero_Title = title;
const icon = () => 'SH';

export default {
  name: 'SimpleHero',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy jest wyróżniony tłem?',
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
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}] ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        icon,
      };
    },
  },
};
