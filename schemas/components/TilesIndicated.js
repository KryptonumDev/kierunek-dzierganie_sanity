import { removeMarkdown } from '../../utils/functions';

export default {
  name: 'TilesIndicated',
  title: 'Dwa kafelki ze wsazującymi strzałkami',
  type: 'object',
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
      of: [
        {
          type: 'TilesIndicated_Item',
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required().min(2).max(2),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list',
    },
    prepare({ title, list }) {
      return {
        title: `[Dwa kafelki ze wsazującymi strzałkami] ${removeMarkdown(title)}`,
        subtitle: `${list.length} elementy`,
      };
    },
  },
};

export const TilesIndicated_Item = {
  name: 'TilesIndicated_Item',
  title: 'Element',
  type: 'object',
  fields: [
    {
      name: 'title',
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
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      paragraph: 'paragraph',
    },
    prepare({ title, paragraph }) {
      return {
        title,
        paragraph: removeMarkdown(paragraph),
      };
    },
  },
};
