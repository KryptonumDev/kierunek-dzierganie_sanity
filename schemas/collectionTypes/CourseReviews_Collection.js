export default {
  name: 'courseReviewCollection',
  title: 'Zbiór opinii o kursach',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'nameOfReviewer',
      type: 'string',
      title: 'Imię recenzenta',
      validation: Rule => Rule.required(),
    },
    {
      name: 'linkToHistory',
      type: 'string',
      title: 'Link do historii kursantki',
    },
    {
      name: 'review',
      type: 'markdown',
      title: 'Opinia',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Ocena',
      validation: Rule => Rule.required().min(1).max(5),
    },
    {
      name: 'course',
      type: 'reference',
      to: [
        {
          type: 'course',
        },
      ],
      title: 'Kurs',
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'nameOfReviewer',
      course: 'course.name',
      mark: 'rating',
    },
    prepare({ name, course, mark }) {
      return {
        title: `${course} - ${name} ${mark}/5`,
      };
    },
  },
};
