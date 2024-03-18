import { removeMarkdown } from '../../utils/functions';

export default {
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'object',
  icon: () => '📬',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: '**Zapisz się**',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
      // TODO: add initialValue for img
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img',
    },
    prepare({ title, media }) {
      return {
        title: `[Newsletter] ${removeMarkdown(title)}`,
        media,
      };
    },
  },
};
