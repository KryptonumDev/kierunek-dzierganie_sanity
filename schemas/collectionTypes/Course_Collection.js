import {
  ColumnImageSection,
  OrderedList,
  Standout,
  UnorderedList,
  TextSection,
} from '../components/Product_Components';

export default {
  name: 'course',
  title: 'Kursy',
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
      title: 'Nazwa kursu',
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
      name: 'excerpt',
      type: 'markdown',
      title: 'Krótki opis na karcie wyróżnionego produktu',
    },
    {
      name: 'basis',
      type: 'string',
      title: 'Rodzaj kursu',
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
      name: 'price',
      type: 'number',
      title: 'Cena w groszach',
      validation: Rule =>
        Rule.min(0).custom((currentValue, { document }) => {
          if (document.type !== 'variable' && currentValue === undefined) return 'To pole jest wymagane';
          return true;
        }),
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: Rule => Rule.min(0),
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'CourseAuthor_Collection' }],
      title: 'Autor kursu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ kursu',
      options: {
        list: [
          {
            title: 'Kurs',
            value: 'course',
          },
          {
            title: 'Program',
            value: 'program',
          },
        ],
      },
      initialValue: 'course',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: [
        {
          type: 'courseCategory',
        },
      ],
      validation: Rule => Rule.required(),
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
      name: 'complexity',
      type: 'string',
      title: 'Poziom',
      options: {
        list: [
          { title: 'Dla początkujących', value: 'dla-poczatkujacych' },
          { title: 'Dla średnio zaawansowanych', value: 'dla-srednio-zaawansowanych' },
          { title: 'Dla zaawansowanych', value: 'dla-zaawansowanych' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Długość kursu',
      name: 'courseLength',
      type: 'string',
    },
    {
      name: 'materials_link',
      title: 'Dodatkowe materiały',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'printed_manual',
      title: 'Instrukcja drukowana',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'chapters',
      type: 'array',
      title: 'Rozdziały',
      of: [
        {
          type: 'ChapterList',
        },
      ],
    },
    {
      name: 'description',
      type: 'array',
      title: 'Opis kursu',
      of: [ColumnImageSection, OrderedList, Standout, UnorderedList, TextSection],
    },
    {
      name: 'generateCertificate',
      type: 'boolean',
      title: 'Generuj certyfikat po ukończeniu kursu',
      initialValue: false,
    },
    {
      name: 'popup',
      type: 'boolean',
      title: 'Wyskakujące okienko po dodaniu do koszyka',
      description: 'Wyskakujące okienko z dodatkowymi materiałami oraz instrukcją drukowaną',
      initialValue: false,
    },
    {
      name: 'automatizationId',
      type: 'string',
      title: 'Identyfikator automatyzacji',
      description: 'ID grupy w automatyzacji MailerLite',
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
      title: 'SEO',
      name: 'seo',
    },
  ],
};
