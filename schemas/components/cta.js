export default {
  name: "cta",
  title: "Wezwanie do działania",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          { title: 'Główny', value: 'primary' },
          { title: 'Podrzędny', value: 'secondary' }
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      initialValue: 'primary',
    },
    {
      title: 'Tekst',
      name: 'text',
      type: 'string',
      description: 'Tekst, który będzie widoczny na przycisku',
    },
    {
      title: 'Link',
      name: 'href',
      type: 'string',
      description: 'Link relatywny lub absolutny (z https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Nieprawidłowy adres URL.';
          }
          return true;
        }),
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href'
    },
  }
}