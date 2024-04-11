import { removeMarkdown } from '../../utils/functions';

const icon = () => '📰';
const title = 'Sekcja z najnowszymi wpisami bloga';

export default {
  name: 'LatestBlogEntries',
  type: 'object',
  title,
  icon,
  fields: [
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
      subtitle: 'paragraph',
    },
    prepare({ heading, subtitle }) {
      return {
        title: `[${title}] ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(subtitle),
        icon,
      };
    },
  },
};
