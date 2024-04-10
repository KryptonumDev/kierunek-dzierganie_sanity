import { countItems } from '../../utils/count-items';
import { removeMarkdown } from '../../utils/remove-markdown';

const ColumnImageSection = {
  name: 'ColumnImageSection',
  title: 'Sekcja z obrazkiem w kolumnie',
  type: 'object',
  fields: [
    {
      name: 'isReversed',
      type: 'boolean',
      title: 'Czy sekcja ma być odwrócona?',
      description: 'Jeśli zaznaczone zdjęcie będzie po prawej stronie, a tekst po lewej.',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek (opcjonalny)',
    },
    {
      name: 'suhheading',
      type: 'markdown',
      title: 'Podnagłówek (opcjonalny)',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      suhheading: 'suhheading',
      paragraph: 'paragraph',
      media: 'img',
    },
    prepare({ heading, suhheading, paragraph, media }) {
      return {
        title: removeMarkdown(heading) || removeMarkdown(suhheading),
        subtitle: removeMarkdown(paragraph),
        media,
      };
    },
  },
};
const OrderedList = {
  name: 'OrderedList',
  title: 'Sekcja z listą numerowaną',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'markdown' }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: removeMarkdown(heading),
        subtitle: countItems(list.length),
      };
    },
  },
};
const UnorderedList = {
  name: 'UnorderedList',
  title: 'Sekcja z listą nienumerowaną',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf (opcjonalnie)',
    },
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'markdown' }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: removeMarkdown(heading),
        subtitle: countItems(list.length),
      };
    },
  },
};
const Standout = {
  name: 'Standout',
  title: 'Sekcja wyróżniona',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: removeMarkdown(heading),
        subtitle: removeMarkdown(paragraph),
      };
    },
  },
};
const TextSection = {
  name: 'TextSection',
  title: 'Sekcja tekstowa',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'secondParagraph',
      type: 'markdown',
      title: 'Drugi paragraf (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: removeMarkdown(heading),
        subtitle: removeMarkdown(paragraph),
      };
    },
  },
};

export default {
  name: 'product',
  title: 'Produkty',
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
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: [
        {
          type: 'productCategory',
          // show only if type is physical or variable
        },
      ],
      validation: Rule => Rule.required(),
      hidden: ({ document }) => document.type === 'digital' || document.type === 'bundle',
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena w groszach',
      validation: Rule =>
        Rule.min(0).custom((currentValue, { document }) => {
          if (document.type !== 'variable' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
      hidden: ({ document }) => document.type === 'variable',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: Rule => Rule.min(0),
      hidden: ({ document }) => document.type === 'variable',
    },
    {
      name: 'countInStock',
      type: 'number',
      title: 'Ilość w magazynie',
      hidden: ({ document }) => document.type !== 'physical',
      validation: Rule =>
        Rule.custom((currentValue, { document }) => {
          if (document.type === 'physical' && currentValue === undefined) return 'To pole jest wymagane';
          else if (document.type === 'physical' && currentValue < 0) return 'Wartość nie może być ujemna';
          return true;
        }),
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Warianty',
      of: [{ type: 'productVariant' }],
      hidden: ({ document }) => document.type !== 'variable',
    },
    {
      name: 'featuredVideo',
      type: 'string',
      title: 'Link do filmu wyróżniającego',
      description: 'Link do iframe',
      hidden: ({ document }) => document.type === 'variable',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{ type: 'image', validation: Rule => Rule.required() }],
      hidden: ({ document }) => document.type === 'variable',
    },
    {
      name: 'course',
      type: 'reference',
      title: 'Powiązany kurs',
      to: [{ type: 'course' }],
      validation: Rule =>
        Rule.custom((currentValue, { document }) => {
          if (document.type === 'digital' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
      hidden: ({ document }) => document.type !== 'digital',
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
      hidden: ({ document }) => document.type !== 'bundle',
    },
    // TODO: Add product
    {
      name: 'description',
      type: 'array',
      title: 'Opis',
      of: [ColumnImageSection, OrderedList, Standout, UnorderedList, TextSection],
    },
    {
      name: 'parameters',
      type: 'array',
      title: 'Parametry',
      of: [{ type: 'productParameters' }],
      hidden: ({ document }) => document.type === 'bundle' || document.type === 'digital',
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
