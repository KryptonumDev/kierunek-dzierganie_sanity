import {removeMarkdown} from '../../utils/functions';

const title = 'Najpopularniejsze kursy';
const icon = () => '🔥';

export default {
  name: 'MostPopularCourses',
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
      name: 'courses',
      type: 'reference',
      to: [{type: 'course'}],
      title: 'Kursy',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare: ({title, subtitle}) => {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    },
  },
};
