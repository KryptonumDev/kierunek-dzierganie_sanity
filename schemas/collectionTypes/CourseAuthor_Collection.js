const title = 'Zbiór autorów kursu';
const icon = () => '👤';

export default {
  name: 'CourseAuthor_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Imię autora kursu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'surname',
      type: 'string',
      title: 'Nazwisko autora kursu',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'surname',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title} ${subtitle ? subtitle : ''}`,
      };
    },
  },
};
