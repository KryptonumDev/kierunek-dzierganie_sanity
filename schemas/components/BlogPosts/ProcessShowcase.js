import { removeMarkdown } from '../../../utils/functions';

const title = 'Pokazanie procesu';
const icon = () => '🔢';

export default {
  name: 'ProcessShowcase',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'ProcessShowcase_List' }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare({ list }) {
      return {
        title: `[${title}] - ${removeMarkdown(list[0].paragraph)}`,
        media: list[0].img,
        icon,
      };
    },
  },
};

export const ProcessShowcase_List = {
  name: 'ProcessShowcase_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
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
      paragraph: 'paragraph',
      media: 'img',
    },
    prepare({ media, paragraph }) {
      return {
        title: `${removeMarkdown(paragraph)}`,
        media,
      };
    },
  },
};
