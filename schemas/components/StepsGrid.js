import { removeMarkdown } from '../../utils/functions';

const title = 'Sekcja z siatką kroków';
export const StepsGrid_Title = title;
const icon = () => '🦶';

export default {
  name: 'StepsGrid',
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
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'StepsGrid_Item',
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'paragraph',
      list: 'list',
    },
    prepare({ heading, subtitle, list }) {
      return {
        title: `[${title}] ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(subtitle),
        media: () => list?.length || '',
        icon,
      };
    },
  },
};

export const StepsGrid_Item = {
  name: 'StepsGrid_Item',
  title: 'Element',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: removeMarkdown(subtitle),
      };
    },
  },
};
