import CourseSlug from '../../components/CourseSlug';

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
  icon: () => '📚',
  fields: [
    {
      name: 'visible',
      type: 'boolean',
      title: 'Widoczny w sklepie',
      initialValue: true,
      validation: Rule => Rule.required(),
      group: 'configuration',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kursu',
      validation: Rule => Rule.required(),
      group: 'configuration',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      components: {
        input: CourseSlug,
      },
      title: 'Slug',
      validation: Rule => Rule.required(),
      group: 'configuration',
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
      group: 'configuration',
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
      group: 'configuration',
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
      group: 'configuration',
    },
    {
      title: 'Długość kursu',
      name: 'courseLength',
      type: 'string',
      group: 'configuration',
    },
    {
      name: 'materials_link',
      title: 'Dodatkowe materiały',
      type: 'reference',
      to: [{ type: 'product' }],
      group: 'configuration',
    },
    {
      name: 'printed_manual',
      title: 'Instrukcja drukowana',
      type: 'reference',
      to: [{ type: 'product' }],
      group: 'configuration',
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
      group: 'configuration',
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'CourseAuthor_Collection' }],
      title: 'Autor kursu',
      validation: Rule => Rule.required(),
      group: 'configuration',
    },
    {
      name: 'generateCertificate',
      type: 'boolean',
      title: 'Generuj certyfikat po ukończeniu kursu',
      initialValue: false,
      group: 'configuration',
    },
    {
      name: 'popup',
      type: 'boolean',
      title: 'Wyskakujące okienko po dodaniu do koszyka',
      description: 'Wyskakujące okienko z dodatkowymi materiałami oraz instrukcją drukowaną',
      initialValue: false,
      group: 'configuration',
    },
    {
      name: 'automatizationId',
      type: 'string',
      title: 'Identyfikator automatyzacji',
      description: 'ID grupy w automatyzacji MailerLite',
      group: 'configuration',
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
      group: 'prices',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Cena w groszach po rabacie',
      validation: Rule => Rule.min(0),
      group: 'prices',
    },
    {
      name: 'excerpt',
      type: 'markdown',
      title: 'Krótki opis na karcie wyróżnionego produktu',
      group: 'description',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{ type: 'image', validation: Rule => Rule.required() }],
      group: 'description',
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
      group: 'description',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Opis kursu',
      of: [ColumnImageSection, OrderedList, Standout, UnorderedList, TextSection],
      group: 'description',
    },
    {
      name: 'featuredVideo',
      type: 'string',
      title: 'Link do filmu wyróżniającego',
      description: 'Link do iframe',
      group: 'description',
    },
    {
      name: 'previewLessons',
      type: 'array',
      title: 'Podgląd kursu',
      of: [
        {
          type: 'reference',
          to: [{ type: 'lesson' }],
          validation: Rule => Rule.required(),
        },
      ],
      group: 'preview',
    },
    {
      name: 'previewGroupMailerLite',
      type: 'string',
      title: 'Grupa w MailerLite',
      group: 'preview',
      description:
        'Grupa do której dodawane są osoby, które skorzystały z podglądu kursu, po kupieniu kursu automatycznie są usuwane z tej grupy',
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
      name: 'configuration',
      title: 'Konfiguracja',
    },
    {
      name: 'prices',
      title: 'Ceny',
    },
    {
      name: 'description',
      title: 'Treści',
    },
    {
      name: 'preview',
      title: 'Podgląd kursu',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      name: 'name',
      gallery: 'gallery',
      price: 'price',
      discount: 'discount',
    },
    prepare({ name, gallery, price, discount }) {
      return {
        title: name,
        media: gallery[0],
        subtitle: `${parseInt(price / 100)} zł` + (discount ? ` | rabat: ${parseInt(discount / 100)} zł` : ''),
      };
    },
  },
};
