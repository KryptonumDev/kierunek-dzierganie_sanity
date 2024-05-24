import {
  ColumnImageSection,
  OrderedList,
  Standout,
  UnorderedList,
  TextSection,
} from '../components/Product_Components';
import productVariant from '../components/productVariant';

export default {
  name: 'product',
  title: 'Produkty fizyczne',
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
      title: 'Nazwa produktu',
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
      name: 'price',
      type: 'number',
      title: 'Cena w groszach',
      validation: Rule =>
        Rule.min(0).custom((currentValue, { document }) => {
          if (document.type === 'physical' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
      hidden: ({ document }) => document.type !== 'physical',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: Rule => Rule.min(0),
      hidden: ({ document }) => document.type !== 'physical',
    },
    {
      name: 'countInStock',
      type: 'number',
      title: 'Ilość w magazynie',
      validation: Rule =>
        Rule.min(0).custom((currentValue, { document }) => {
          if (document.type === 'physical' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
      hidden: ({ document }) => document.type !== 'physical',
    },
    {
      name: 'excerpt',
      type: 'markdown',
      title: 'Krótki opis na karcie wyróżnionego produktu',
    },
    {
      name: 'additionalInformation',
      type: 'array',
      title: 'Dodatkowe informacje o produkcie',
      of: [{ type: 'string' }],
      initialValue: ['Darmowy zwrot do 14 dni', 'Dostawa w ciągu 3 dni'],
    },
    {
      name: 'basis',
      type: 'string',
      title: 'Rodzaj produktu',
      options: {
        list: [
          {
            title: 'Produkt dla szydełkowania',
            value: 'crocheting',
          },
          {
            title: 'Produkt dla dziergania na drutach',
            value: 'knitting',
          },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ produktu',
      options: {
        list: [
          {
            title: 'Fizyczny standardowy',
            value: 'physical',
          },
          {
            title: 'Fizyczny z wariantami',
            value: 'variable',
          },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: [
        {
          type: 'productCategory',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Warianty',
      of: [{ type: 'productVariant' }],
      description:
        'Proszę upewnić się że każdy z wariantów ma wszystkie atrybuty, w przypadku gdy któryś z nich nie będzie miał takiego samego zestawu atrybutów jak pozostałe strona nię będzie działać prawidłowo!',
      hidden: ({ document }) => document.type !== 'variable',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{ type: 'image', validation: Rule => Rule.required() }],
      validation: Rule =>
        Rule.custom((currentValue, { document }) => {
          if (document.type === 'physical' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
      hidden: ({ document }) => document.type !== 'physical',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Opis produktu',
      of: [ColumnImageSection, OrderedList, Standout, UnorderedList, TextSection],
    },
    {
      name: 'parameters',
      type: 'array',
      title: 'Parametry',
      of: [{ type: 'productParameters' }],
    },
    {
      name: 'featuredVideo',
      type: 'string',
      title: 'Link do filmu wyróżniającego',
      description: 'Link do iframe',
      hidden: ({ document }) => document.type !== 'physical',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'package',
      title: 'Pakiet',
    },
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      visible: 'visible',
      type: 'type',
      title: 'name',
      gallery: 'gallery',
      variants: 'variants',
      countInStock: 'countInStock',
      price: 'price',
      category: 'category.name',
    },
    prepare({ visible, type, title, gallery, variants, countInStock, price, category }) {
      return {
        title,
        subtitle:
          (type === 'physical' ? 'Produkt fizyczny' : 'Produkt z wariantami') +
          ' | ' +
          (visible ? 'Widoczny' : 'Ukryty') +
          ' | ' +
          (countInStock || variants?.filter(variant => variant.countInStock > 0).length > 0
            ? 'Na stanie'
            : 'Brak na stanie') +
          ' | ' +
          (price
            ? `${parseInt(price) / 100} zł`
            : `${Math.min(...variants.map(variant => parseInt(variant.price / 100)))} zł -
              ${Math.max(...variants.map(variant => parseInt(variant.price / 100)))} zł`) +
          ' | ' +
          category,
        media: gallery ? gallery[0] : variants[0].gallery[0],
      };
    },
  },
};
