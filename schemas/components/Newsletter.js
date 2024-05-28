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
      title: 'ID grupy z MailerLite (opcjonalne)',
      description: 'Domyślnie grupa Newsletter (ID: 112582388). Po uzupełnieniu tego pola, użytkownik, który wypełni formularz zostanie dodany do tej grupy.',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      groupId: 'groupId',
      media: 'img',
    },
    prepare({ title, groupId, media }) {
      return {
        title: `[Newsletter] ${removeMarkdown(title)}`,
        subtitle: `ID grupy: ${groupId || 112582388}`,
        media,
      };
    },
  },
};
