import {removeMarkdown} from '../../utils/functions';

const title = 'Zbiór blogów';
const icon = () => '✒️';

export default {
  name: 'BlogPost_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Author',
      type: 'reference',
      to: [{type: 'Author_Collection'}],
      title: 'Autor',
      options: {disableNew: true},
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Link do postu',
      description: 'Unikalna nazwa postu, która będzie wykorzystywana w adresie URL',
      options: {
        source: 'hero_Heading',
      },
      validation: Rule => Rule.required(),
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja wstępna',
    },
  ],
  preview: {
    select: {
      title: 'hero_Heading',
      subtitle: 'hero_Paragraph',
    },
    prepare: ({title, subtitle}) => {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    },
  },
};
