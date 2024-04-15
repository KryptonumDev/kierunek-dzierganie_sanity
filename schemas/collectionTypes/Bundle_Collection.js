import {
  ColumnImageSection,
  OrderedList,
  Standout,
  UnorderedList,
  TextSection,
} from '../components/Product_Components';

export default {
  name: 'bundle',
  title: 'Zestaw produktów',
  type: 'document',
  icon: () => '',
  fields: [
    {
      name: 'visible',
      type: 'boolean',
      title: 'Widoczny w sklepie',
      initialValue: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa zestawu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Kategorie kursów',
      of: [{ type: 'reference', to: [{ type: 'courseCategory' }] }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'basis',
      type: 'string',
      title: 'Rodzaj pakietu',
      options: {
        list: [
          {
            title: 'Pakiet kursów szydełkowania',
            value: 'crocheting',
          },
          {
            title: 'Pakiet kursów dziergania na drutach',
            value: 'knitting',
          },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena w groszach',
      validation: Rule => Rule.min(0).required(),
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: Rule => Rule.min(0),
    },
    {
      name: 'featuredVideo',
      type: 'string',
      title: 'Link do filmu wyróżniającego',
      description: 'Link do iframe',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{ type: 'image', validation: Rule => Rule.required() }],
    },
    {
      name: 'courses',
      type: 'array',
      title: 'Powiązane kursy',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: Rule =>
        Rule.custom((currentValue, { document }) => {
          if (document.type === 'bundle' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
    },
    {
      name: 'description',
      type: 'array',
      title: 'Opis',
      of: [ColumnImageSection, OrderedList, Standout, UnorderedList, TextSection],
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
};
