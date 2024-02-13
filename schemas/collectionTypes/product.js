export default {
  name: 'product',
  title: 'Produkty',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa produktu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: [{type: 'productCategory'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'basis',
      type: 'string',
      title: 'Podstawa',
      options: {
        list: [
          {
            title: 'Szydełkowanie',
            value: 'crocheting',
          },
          {
            title: 'Dzierganie na drutach',
            value: 'knitting',
          },
        ],
      }
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ produktu',
      options: {
        list: [
          {
            title: 'Kurs',
            value: 'digital',
          },
          {
            title: 'Fizyczny',
            value: 'physical',
          },
          {
            title: 'Fizyczny z wariantami',
            value: 'variable',
          },
          {
            title: 'Pakiet',
            value: 'bundle',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena w groszach',
      validation: (Rule) =>
        Rule.min(0).custom((currentValue, {document}) => {
          if (document.type !== 'variable' && currentValue === undefined)
            return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => document.type === 'variable',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: (Rule) => Rule.min(0),
      hidden: ({document}) => document.type === 'variable',
    },
    {
      name: 'countInStock',
      type: 'number',
      title: 'Ilość w magazynie',
      hidden: ({document}) => document.type !== 'physical',
      validation: (Rule) =>
        Rule.custom((currentValue, {document}) => {
          if (document.type === 'physical' && currentValue === undefined)
            return 'To pole jest wymagane'
          else if (document.type === 'physical' && currentValue < 0)
            return 'Wartość nie może być ujemna'
          return true
        }),
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Warianty',
      of: [{type: 'productVariant'}],
      hidden: ({document}) => document.type !== 'variable',
    },
    {
      name: 'featuredVideo',
      type: 'string',
      title: 'Link do filmu wyróżniającego',
      description: 'Link do iframe',
      hidden: ({document}) => document.type === 'variable',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{type: 'image', validation: (Rule) => Rule.required()}],
      hidden: ({document}) => document.type === 'variable',
    },
    {
      name: 'course',
      type: 'reference',
      title: 'Powiązany kurs',
      to: [{type: 'course'}],
      validation: (Rule) =>
        Rule.custom((currentValue, {document}) => {
          if (document.type === 'digital' && currentValue === undefined)
            return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => document.type !== 'digital',
    },
    {
      name: 'courses',
      type: 'array',
      title: 'Powiązane kursy',
      of: [{type: 'reference', to: [{type: 'course'}]}],
      validation: (Rule) =>
        Rule.custom((currentValue, {document}) => {
          if (document.type === 'bundle' && currentValue === undefined)
            return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => document.type !== 'bundle',
    },
    // TODO: Add product description
    {
      name: 'parameters',
      type: 'array',
      title: 'Parametry',
      of: [{type: 'productParameters'}],
      hidden: ({document}) => (document.type === 'bundle' || document.type === 'digital'),
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
