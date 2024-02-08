export default {
  name: 'product',
  title: 'Produkty',
  type: 'document',
  icon: () => '🛬',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Typ produktu',
      options: {
        list: [
          {title: 'Fizyczny', value: 'physical'},
          {title: 'Kurs', value: 'course'},
          {title: 'Pakiet', value: 'bundle'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
}
