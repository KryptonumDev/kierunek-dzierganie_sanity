const title = 'Zbiór autorów kursu';
const icon = () => '';

export default {
  name: 'CourseAuthor_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko autora kursu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      title: 'Slug',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis autora',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie autora',
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
