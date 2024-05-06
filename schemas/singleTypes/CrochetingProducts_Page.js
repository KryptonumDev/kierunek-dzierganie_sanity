import { HeroSimple_Title } from '../components/HeroSimple';
import { StepsGrid_Title } from '../components/StepsGrid';

export default {
  name: 'CrochetingProducts_Page',
  title: 'Produkty do szydełkowania',
  type: 'document',
  icon: () => '🧶',
  fields: [
    {
      name: 'HeroSimple',
      type: 'HeroSimple',
      title: HeroSimple_Title,
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'StepsGrid',
      type: 'StepsGrid',
      title: StepsGrid_Title,
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'listing_Heading_Courses',
      type: 'markdown',
      title: 'Nagłówek dla listy kursów',
      fieldset: 'listing',
    },
    {
      name: 'listing_Paragraph',
      type: 'markdown',
      title: 'Paragraf dla listy kursów',
      fieldset: 'listing',
    },
    {
      name: 'listing_BestSeller',
      type: 'reference',
      title: 'Najpopularniejszy kurs',
      to: [{ type: 'product' }],
      options: {
        filter: '_type == "product" && basis == "crocheting" && visibility == true',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'LatestBlogEntries',
      type: 'LatestBlogEntries',
      title: 'Najnowsze wpisy bloga',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Zawartość podstrony',
      options: { collapsible: true },
    },
    {
      name: 'listing',
      title: 'Lista wszystkich kursów',
      options: { collapsible: true },
    },
  ],
};
