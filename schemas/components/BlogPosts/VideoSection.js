const title = 'Sekcja wideo';
const icon = () => '📹';

export default {
  name: 'VideoSection',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'video',
      type: 'file',
      title: 'Wideo',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      video: 'video',
    },
    prepare({ video }) {
      return {
        title: `[${title}] - ${video}`,
        icon,
      };
    },
  },
};
