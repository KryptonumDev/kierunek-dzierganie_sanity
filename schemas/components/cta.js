export default {
  name: "cta",
  title: "Wezwanie do działania",
  type: "object",
  fields: [
    {
      title: 'Tekst',
      name: 'text',
      type: 'string',
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