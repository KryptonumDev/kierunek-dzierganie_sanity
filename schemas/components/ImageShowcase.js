import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: 'ImageShowcase',
  title: 'Pokaz Zdjęć',
  type: 'object',
  fields: [
    {
      name: 'isGrid',
      type: 'boolean',
      initialValue: true,
      title: 'Czy jest zwykła galeria w kolumnach?',
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
    },
    {
      name: 'cta_Annotation',
      type: 'markdown',
      title: 'CTA Annotation',
    },
    {
      name: 'img',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      title: 'Zdjęcia',
      validation: Rule => Rule.min(9).max(9).warning('Jeżeli nie jest zwykła galeria użyj 9 zdjęć'),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
      media: 'img[0]',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `[Pokaz zdjęć] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media,
      };
    },
  },
};
