import { removeMarkdown } from '../../utils/remove-markdown';

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
    },
    {
      name: 'groupId',
      type: 'string',
      title: 'ID grupy z MailerLite',
      description: 'Domyślnie grupa Newsletter (ID: 112582388). Po uzupełnieniu tego pola, użytkownik, który wypełni formularz zostanie dodany do tej grupy.',
      validation: Rule => Rule.required(),
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
